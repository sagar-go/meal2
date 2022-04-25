import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "./Context";
import YouTube from "react-youtube";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { toast, Zoom } from "react-toastify";

function Rand() {
  const { rand, setrand, shop, setshop, count } = useContext(MainContext);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    randcall();
  }, []);

  const randcall = async () => {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await resp.json();
    let temp = [data.meals[0]];
    let temp2 = temp.map((e) => {
      return {
        ...e,
        counts: 1,
        id: Math.floor(Math.random() * 1000),
        price: Math.floor(Math.random() * 200),
      };
    });
    setrand(temp2);
  };
  const add = (e) => {
    setflag(true);
    setshop([...shop, e]);
    const bb = toast.success("Order Placed Successfully !!!", {
      position: "top-center",
    });
    bb();
  };
  return (
    <>
      <div>
        <h2 className="featured">Featured Meal</h2>
        {rand.map((e, idx) => (
          <div className="randcon" key={idx} onClick={() => add(e)}>
            <img src={e.strMealThumb} alt="" />
            <h3>{e.strMeal.substring(0, 20)} </h3>
            <span className="ranprice">${e.price}</span>
            <div className="youtube">
              <YouTube
                videoId={e.strYoutube.substring(e.strYoutube.indexOf("=") + 1)}
              />
            </div>
          </div>
        ))}

        {/* {flag?<div className="card">

<h3> Successfully added to cart </h3> <BsCheckCircleFill size={"30px"} color={"crimson"}/>
</div>:""} */}
      </div>
    </>
  );
}

export default Rand;
