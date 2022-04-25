import React, { useContext, useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MainContext } from "./Context";
import { BsCheckCircleFill } from "react-icons/bs";
import { toast, Zoom } from "react-toastify";

function Search() {
  const { sub, shop, setshop } = useContext(MainContext);
  const [arr, setarr] = useState([]);
  const App_id = "463a8eaf";
  let App_key = "44662d548d4b9f217c7f80559d9af5be";
  const [range, setrange] = useState(1000);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    apicall();
  }, [sub]);

  const apicall = async () => {
    let response = await fetch(
      `https://api.edamam.com/search?q=${sub}&app_id=${App_id}&app_key=${App_key}`
    );
    let result = await response.json();
    let temp = result.hits;
    let temp2 = temp.map((e) => {
      return {
        ...e,
        counts: 1,
        id: Math.floor(Math.random() * 1000),
        price: Math.floor(Math.random() * 200),
      };
    });
    setarr(temp2);
  };
  console.log("tem", arr);

  const add = (e) => {
    setflag(true);
    setshop([...shop, e]);

    const bb = toast.success(`Successfully added to cart !!!`, {
      position: "top-center",
    });
    bb();
  };
  const check2 = (e) => {
    setrange(e.target.value);
  };

  const sort1 = () => {
    let temp = arr.sort((a, b) => {
      return a.price - b.price;
    });
    setarr([...temp]);
  };

  const sort2 = () => {
    let temp = arr.sort((a, b) => {
      return b.price - a.price;
    });
    setarr([...temp]);
  };
  if (arr.length === 0) {
    return (
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <>
        <div className="range">
          <input
            className="inprange"
            type="range"
            name=""
            id=""
            min={0}
            max={1000}
            onChange={check2}
          />
          <h2>Showing Result Below : $ {range}</h2>
          <button className="sort sort1" onClick={sort1}>
            Low to High
          </button>
          <button className="sort sort2" onClick={sort2}>
            High to low
          </button>
        </div>
        <>
          <div className="cockcall">
            {arr
              .filter((e) => {
                if (e.price <= range) {
                  return e;
                }
              })
              .map((e, idx) => (
                <div className="innercont" key={idx} onClick={() => add(e)}>
                  <img src={e.recipe.image} alt="" />
                  <p>{e.recipe.label.substring(0, 17)}</p>
                  <h5 className="allprice">${e.price}</h5>
                </div>
              ))}
          </div>
        </>
      </>
    );
  }
}
export default Search;
