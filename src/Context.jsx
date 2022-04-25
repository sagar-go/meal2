import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const MainContext= createContext();

function Context({children}){

const[rand,setrand]= useState([])
const [cat,setcat]= useState([])
const[inspire,setinspire]= useState([]);
const [id,setid] =useState("");
const[cocktail,setcocktail]= useState([])
const [categ,setcateg] = useState();
const[alcat,setalcat]= useState();
const[src,setsrc] = useState("");
const [sub,setsub] = useState("");
const[shop,setshop] =useState([]);
const[count,setcount]= useState("1");
const[check,setcheck]=useState(false);

  return (
   <MainContext.Provider value={{count,check,setcheck,setcount,sub,setsub,shop,setshop,rand,setrand,cat,setcat,inspire,src,setsrc,setinspire,id,setid,cocktail,setcocktail,categ,setcateg,alcat,setalcat}}>
       {children}
   </MainContext.Provider>
  )
}

export default Context
