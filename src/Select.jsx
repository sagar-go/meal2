import React, { useContext, useState ,useEffect} from 'react'
import { MainContext } from './Context'

function Select() {
    const{id,setid,shop,setshop}= useContext(MainContext);
    const[sel,setsel]=useState([]);
  const[range,setrange]= useState(1000)


    useEffect(()=>{
       selcall();
        },[id]);
        
        const selcall= async ()=>{
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        const data =await resp.json();

       let temp = [data][0].meals;
       let temp2 = temp.map((e)=>{
           return {...e, counts:1, id:Math.floor(Math.random()*1000), price:Math.floor(Math.random()*200) }
       })
       setsel(temp2);

        }

        console.log("sel",sel);

const add=(e)=>{

  setshop([...shop,e]);
  window.alert("Your Order has been placed...");
}

const check2=(e)=>{
  setrange(e.target.value);
  console.log("range is", e.target.value)
}

  return (<>
  <div className="range">
      <input className='inprange' type="range" name="" id="" min={0} max={1000} value={range} onChange={check2}/>
        <h2>Showing Result Below : $ {range}</h2>
  </div>
    <div className='cockcall'>
      {sel.filter((e)=>{
        if(range === "100"){
          return e
        }else if(e.price < range){
          return e
        }

      }). map((e,idx)=>( 
        <div className="innercont" key={idx} onClick={()=>add(e)}>
      <img src={e.strMealThumb} alt="" />
      <p>{e.strMeal.substring(0,17)}</p>
      <h5 className="allprice">${e.price}</h5>
      </div> ))}
    </div>
    </>
  )
}


export default Select
