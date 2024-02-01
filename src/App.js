import { Route, Routes } from "react-router-dom";
import SideBar from "./sidebar";
import Home from "./home";
import Brand from "./brand";
import Cat from "./catagory";
import  Pro from "./product"
import { useEffect, useState } from "react";

export default function App (){

   var change=(user)=>{setuser(user)}

  var [user,setuser]=useState({loging:false,token:undefined})

     
   
  
  return<>
  
  <SideBar log={user.loging}   chg={change}/>
     <div className="app-1 ">
     <main className="tm-main">
   {user.loging? <><Routes>
    <Route path="/" element={<Home log={user.loging} chg={change}/>}></Route>
    <Route path="/cat" element={<Cat token={user.token}/>}></Route>
    <Route path="/brd" element={<Brand token={user.token}/>}></Route>
    <Route path="pro" element={<Pro token={user.token}/>}></Route>

    
   

     </Routes></>:<><Routes>
    <Route path="/" element={<Home log={user.loging} chg={change}/>}></Route>
    <Route path="*" element={<Not/>}></Route>

     </Routes></>}
     </main>
     </div>
</>
}

function Not (){

  return<>

<img src="not.jpg" style={{width:"100%"}}></img>
</>

}