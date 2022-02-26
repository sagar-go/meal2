import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { MainContext } from './Context';

function Cocktail_call() {
    const {categ,setcateg,shop,setshop} = useContext(MainContext);
    const[ arr,setarr,alcat,setalcat] = useState([]);
    const[range,setrange]= useState(1000)

      useEffect(()=>{
          call();
      },[])  

        const call= async ()=>{
        const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categ}`);
        const data =await resp.json(); 
        // setarr([data][0].drinks)
        let temp = [data][0].drinks;
        let temp2 = temp.map((e)=>{
            return {...e, counts:1, id:Math.floor(Math.random()*1000), price:Math.floor(Math.random()*200) }
        })
        setarr(temp2);
            }
        console.log("drinks", arr);

        const add=(e)=>{
          setshop([...shop,e])
          window.alert("Your Order has been placed...")
        }

        const check2=(e)=>{
            setrange(e.target.value)
        }
           
  return (<>
        <div className="range">
      <input className='inprange' type="range" name="" id="" min={0} max={1000} value={range} onChange={check2}/>
        <h2>Showing Result Below : $ {range}</h2>
  </div>
    <div className='cockcall2'>
      {arr.filter((ele)=>{
        if(ele.price<range){
          return ele
        }
      }).
      map((e)=>( 
      <div className="innercont" onClick={()=>add(e)}>
            <img src={e.strDrinkThumb} alt="" />
            <p>{e.strDrink} </p> 
            <h4 className='allprice'>${e.price}</h4>
            
                </div>))}
     
    </div>
    </>
  )
}

export default Cocktail_call
