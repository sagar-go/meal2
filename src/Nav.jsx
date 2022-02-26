import React from 'react';
import './App.css';
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from 'react-router-dom'
import Category from './Category';
import Inspire from './Inspire';
import Select from './Select';
import Rand from './Rand';
import { useContext } from 'react';
import { MainContext } from './Context';
import {CgShoppingCart} from 'react-icons/cg'
import {
  HiUser} from 'react-icons/hi'
import Cocktail from './Cocktail';
import Search from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import Result from './Result';

function Nav() {
  const{id,src,setsrc,sub,setsub,shop,setcheck} =useContext(MainContext);
  const [pos,setpos] =useState(false);

const changebackground=()=>{
  if(window.scrollY===0){
    setpos(false);
  }else if(window.scrollY>200){
    setpos(true)
  }
}


useEffect(()=>{
  window.addEventListener("scroll", changebackground);
  return () => window.removeEventListener('scroll', changebackground);
},[])



  const click=()=>{
    setsub(src);
    setsrc("");
    setcheck(true);
  }
  const change= (e)=>{
    setsrc(e.target.value)
  }

  return (
    <div>
  
      <nav>
        <ul className={pos?"below":"after"}>
         <Link to="/"> <li>Foodie</li> </Link> 
          <div className="cart"> 
            <li> <Link to="/cart"><CgShoppingCart  size={"30px"} color={"white"}/></Link></li>
            <li className='length1'>{shop.length}</li>
              <li><HiUser color={"white"} size={"30px"} /></li>
          </div>

  
        </ul>
     
          <div className="nav-item">
          <h2>Lets get straight into your cravings</h2>
            <input type="text" className='input' placeholder='Search here' value={src} onChange={change} /> 

            <Link className='srcicon' to="/result2">
            <AiOutlineSearch onClick={click} size={"30px"} className='srcicon' aria-disabled/>
              </Link> 
            </div>
      </nav>

      <Rand/>
     <Category/>
     <Inspire/>
     <Cocktail/>
   
    </div>  
  )
}

export default Nav
