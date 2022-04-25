import React from "react";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "./Context";
import { BsCheckCircleFill } from "react-icons/bs";
import { toast, Zoom } from "react-toastify";

function Cocktail_call() {
  const { categ, setcateg, shop, setshop } = useContext(MainContext);
  const [arr, setarr, alcat, setalcat] = useState([]);
  const [range, setrange] = useState(1000);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    call();
  }, []);

  const call = async () => {
    const resp = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categ}`
    );
    const data = await resp.json();
    // setarr([data][0].drinks)
    let temp = [data][0].drinks;
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
  console.log("drinks", arr);

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
            value={range}
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
        <div className="cockcall2">
          {arr
            .filter((ele) => {
              if (ele.price < range) {
                return ele;
              }
            })
            .map((e) => (
              <div className="innercont">
                <img src={e.strDrinkThumb} alt="" onClick={() => add(e)} />
                <p>{e.strDrink} </p>
                <h4 className="allprice">${e.price}</h4>
              </div>
            ))}
        </div>
        {/* {flag ? (
          <div className="card">
            <h3> Successfully added to cart </h3>{" "}
            <BsCheckCircleFill size={"30px"} color={"crimson"} />
          </div>
        ) : (
          ""
        )} */}
        {/* {flag2?<div className="card" style={{backgroundColor:"darkred"}}> */}
      </>
    );
  }
}

export default Cocktail_call;
