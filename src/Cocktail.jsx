import React,{useEffect,useState, useContext} from 'react'
import { BsShop } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { MainContext } from './Context'

function Cocktail() {
    const {categ,setcateg,alcat,setalcat,shop,setshop} = useContext(MainContext)

        const fakebeer= [{
            name:"Beer",
            img :"https://2tona.ge/wp-content/uploads/2019/11/img-05.jpg"},
            {name:"Soft Drink",
            img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Bacardibreezer.jpg"},

                {name:"Cocktail",
                img:"https://www.acouplecooks.com/wp-content/uploads/2020/05/Clover-Club-Cocktail-006.jpg"},
                {name:"Ordinary Drink",
                img:"https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRyaW5rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
                {name:"Homemade Liqueur",
                img:"https://www.jimbeam.com/sites/default/files/2019-04/Jim%20Beam%20Bourbon.jpg"},
               
                ]

 const click= (e)=>{
    setcateg(e.name);
    console.log("clicked",e.name)
    setalcat(e.name);
    console.log("alcat", alcat)
 }
  return (
    <>
        <h2 className='featured'>Who doesn't like Drinks ?</h2>
        <div className='cocktail'>
       {fakebeer.map((e,idx)=>( 
       <div className="beercon" key={idx}onClick={()=>click(e)} > 
            <Link className='linkins'  to={{pathname: '/result1'}}>
            <img src={e.img} alt=""  />  
            <h3>{e.name} </h3> 
        </Link>
         
        </div>
        ))}
            
      </div>

      <div className="footer">
          <h3>Made with React Js</h3>
      </div>
      </>
  )
}

export default Cocktail
