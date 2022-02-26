import React, { useContext, useState,useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MainContext } from "./Context";

function Search() {
  const { id, src, setsrc, sub, setsub,shop,setshop,check,setcheck } = useContext(MainContext);
  const [arr,setarr]= useState([]);
  const App_id ='bdc066d1';
  let App_key = "40196ccf2bb81c0603219c0ef768538f";
  const[range,setrange]= useState(1000)

  useEffect(()=>{
    apicall();
  },[sub])

  const apicall = async ()=> {
      let response = await fetch(`https://api.edamam.com/search?q=${sub}&app_id=${App_id}&app_key=${App_key}`);
      let result = await response.json();
      // let final = (result.hits);
    //   console.log(result);
    //   console.log(result.hits);
    //   console.log("api call");
    //   setarr(result.hits)

      let temp = (result.hits);
    let temp2 = temp.map((e)=>{
        return {...e,  counts:1, id:Math.floor(Math.random()*1000), price:Math.floor(Math.random()*200) }
    })
    setarr(temp2);
    
    }
    console.log("tem", arr);
   
    const add=(e)=>{
      setshop([...shop,e]);
      window.alert("Your Order has been placed...");
    }

    const check2=(e)=>{
      setrange(e.target.value)
  }


 if(arr.length===0 || src!==""){
   return(
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   )
 }else{

  return(
<>
<div className="range">
      <input className='inprange' type="range" name="" id="" min={0} max={1000} value={range} onChange={check2}/>
        <h2>Showing Result Below : $ {range}</h2>
  </div>
      <>
      <div className="cockcall">
      {arr.filter((e)=>{
        if(e.price<range){return e}
      }). map((e,idx)=>( 
      <div className="innercont" key={idx} onClick={()=>add(e)}>
          <img src={e.recipe.image} alt="" />
      <p>{e.recipe.label.substring(0,17)}</p>
      <h5 className="allprice">${e.price}</h5>
      </div>))}
      </div> 
      </>
      </>
  )
}}
export default Search;
