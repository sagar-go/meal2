
import React, { useContext, useState,useEffect } from 'react'
import Cocktail_call from './Cocktail_call';
import { MainContext } from './Context';
import Select from './Select';
import {Link} from "react-router-dom"
import Search from './Search'
import {CgShoppingCart} from 'react-icons/cg'
import {BsArrowLeft} from 'react-icons/bs'
import {HiUser} from 'react-icons/hi'


function Result2() {
  const { id,shop } = useContext(MainContext);
  const {categ,setcateg,alcat,setid,sub,setsrc,setsub,check,setcheck} = useContext(MainContext);


  const click=()=>{
    setcateg("");
    setid("") ;
    setsrc("");
    setsub("");
    setcheck(false);
  }

  return (
    <div>
      <div className="navbar">
        <ul>
        <Link to="/"> <li>Foodie</li> </Link> 
          <div className="cart"> 
            <li> <Link to="/cart"><CgShoppingCart  size={"30px"} color={"white"}/></Link></li>
            <li className='length'>{shop.length}</li>
              <li><HiUser color={"white"} size={"30px"} /></li>
          </div>
        </ul>
        </div>
      <Link className='home' to="/" onClick={click}>Back to home <BsArrowLeft className='arrow' size={"30px"}></BsArrowLeft> </Link>
         {check ?"":<Search/>}  
    </div>
  );
}

export default Result2;
