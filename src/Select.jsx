import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "./Context";
import { BsCheckCircleFill } from "react-icons/bs";
import { toast, Zoom } from "react-toastify";

function Select() {
  const { id, setid, shop, setshop } = useContext(MainContext);
  const [sel, setsel] = useState([]);
  const [flag, setflag] = useState(false);
  const [range, setrange] = useState(1000);

  useEffect(() => {
    selcall();
  }, [id]);

  const selcall = async () => {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    const data = await resp.json();

    let temp = [data][0].meals;
    let temp2 = temp.map((e) => {
      return {
        ...e,
        counts: 1,
        id: Math.floor(Math.random() * 1000),
        price: Math.floor(Math.random() * 200),
      };
    });
    setsel(temp2);
  };

  console.log("sel", sel);

  const add = (e) => {
    setflag(true);
    setshop([...shop, e]);

    const bb = toast.success(`Order Placed Successfully !!!`, {
      position: "top-center",
    });
    bb();
  };

  const sort1 = () => {
    let temp = sel.sort((a, b) => {
      return a.price - b.price;
    });
    setsel([...temp]);
  };

  const sort2 = () => {
    let temp = sel.sort((a, b) => {
      return b.price - a.price;
    });
    setsel([...temp]);
  };
  const check2 = (e) => {
    setrange(e.target.value);
    console.log("range is", e.target.value);
  };

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
      <div className="cockcall">
        {sel
          .filter((e) => {
            if (range === "100") {
              return e;
            } else if (e.price < range) {
              return e;
            }
          })
          .map((e, idx) => (
            <div className="innercont" key={idx} onClick={() => add(e)}>
              <img src={e.strMealThumb} alt="" />
              <p>{e.strMeal.substring(0, 17)}</p>
              <h5 className="allprice">${e.price}</h5>
            </div>
          ))}
        {/* 
        {flag ? (
          <div className="card">
            <h3> Successfully added to cart </h3>{" "}
            <BsCheckCircleFill size={"30px"} color={"crimson"} />
          </div>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}

export default Select;
