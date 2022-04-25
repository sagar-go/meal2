import React, { useContext, useState, useEffect } from "react";
import Cocktail_call from "./Cocktail_call";
import { MainContext } from "./Context";
import Select from "./Select";
import { Link } from "react-router-dom";
import Search from "./Search";
import { CgShoppingCart } from "react-icons/cg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { toast, Zoom } from "react-toastify";

function Cart() {
  const { categ, setcateg, alcat, setid, cart, sub, id, shop, setshop } =
    useContext(MainContext);
  const [flag, setflag] = useState(false);
  const click = () => {
    setcateg("");
    setid("");
  };
  let price = shop.map((e) => {
    return e.price * e.counts;
  });
  let sum = 0;
  price.map((e) => {
    return (sum += e);
  });
  const remove = (e) => {
    setshop(
      shop.filter((ele) => {
        if (e.id !== ele.id) {
          setflag(true);

          return ele;
        }
      })
    );
    const bb = toast.success(`Item removed from the cart !!!`, {
      position: "bottom-center",
    });
    bb();
  };

  const addcount = (e) => {
    setshop(
      shop.map((ele) => {
        if (e.id === ele.id) {
          return { ...ele, counts: ele.counts + 1 };
        } else {
          return ele;
        }
      })
    );
  };

  const remcount = (e) => {
    setshop(
      shop.map((ele) => {
        if (e.id === ele.id) {
          return { ...ele, counts: ele.counts - 1 };
        } else {
          return ele;
        }
      })
    );
  };

  if (shop.length === 0) {
    return (
      <>
        <div className="navbar">
          <ul>
            <Link classname="foodie" to="/">
              {" "}
              <li>Foodie</li>{" "}
            </Link>
            <div className="cart">
              <li>
                {" "}
                <Link to="/cart">
                  <CgShoppingCart size={"30px"} color={"white"} />{" "}
                </Link>{" "}
              </li>
              <li className="length">{shop.length}</li>
              <li>
                <HiUser color={"white"} size={"30px"} />
              </li>
            </div>
          </ul>
        </div>
        <Link className="home" to="/" onClick={click}>
          Back to home{" "}
          <BsArrowLeft className="arrow" size={"30px"}></BsArrowLeft>{" "}
        </Link>
        <h3 className="total">Total : $ {sum} </h3>
        <div className="empty">
          <h2>Cart is Empty</h2>
          <li>
            {" "}
            <MdOutlineRemoveShoppingCart size={"30px"} color={"black"} />{" "}
          </li>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="navbar">
          <ul>
            <Link classname="foodie" to="/">
              {" "}
              <li>Foodie</li>{" "}
            </Link>
            <div className="cart">
              <li>
                {" "}
                <Link to="/cart">
                  <CgShoppingCart size={"30px"} color={"white"} />{" "}
                </Link>{" "}
              </li>
              <li className="length">{shop.length}</li>
              <li>
                <HiUser color={"white"} size={"30px"} />
              </li>
            </div>
          </ul>
        </div>
        <Link className="home" to="/" onClick={click}>
          Back to home{" "}
          <BsArrowLeft className="arrow" size={"30px"}></BsArrowLeft>{" "}
        </Link>
        <h3 className="total">Total : $ {sum} </h3>
        <div className="cart1">
          {shop.map((e) => (
            <div className="cart2">
              <img
                src={e.strMealThumb || e.strDrinkThumb || e.recipe.image}
                alt=""
              />
              <h5> ${e.price * e.counts} </h5>

              <div className="buttons">
                <button onClick={() => addcount(e)}>+</button>
                <h4>{e.counts}</h4>
                {e.counts > 1 ? (
                  <button onClick={() => remcount(e)}>-</button>
                ) : (
                  <button disabled onClick={() => remcount(e)}>
                    -
                  </button>
                )}
                <AiOutlineDelete
                  className="trash"
                  size={"30px"}
                  onClick={() => remove(e)}
                ></AiOutlineDelete>
              </div>
            </div>
          ))}
        </div>
        <button
          className="place"
          onClick={() => window.alert(`Order Placed. Please pay $${sum}`)}
        >
          Place Order
        </button>
      </>
    );
  }
}

export default Cart;
