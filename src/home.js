import { useState } from "react"

export default function  Home (props){
   var emailbox=undefined
   var passbox= undefined

   var[msg, setmsg]=useState()
   var [isloding,setlodind]=useState(true)

 var save=(event)=>{
      
        const data={ 

                  user:emailbox.value,
                  password:passbox.value


        }
        fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/adminlogin",{
            method:'POST',
          headers:{

                "Content-Type": 'application/json'

          },
          body:JSON.stringify(data)
          


        }).then(respones=>respones.json()).then(resdata=>{
            // console.log(resdata)
             setmsg(resdata.msg)
           if(resdata.status){
                props.chg({loging:true, token:resdata.token})

           }
           else
           props.chg({loging:false, token:undefined})
            


        })
        


    event.preventDefault()

 }
  


  return<>
{props.log?<>
<div className="div-home-1"><h1 className="alert-warning text-center h1-home">Welcome Home </h1>
<img className="hom-img" src="4962879.jpg"></img>
</div>
</>:<>

 <form onSubmit={save}>
 <div className="div-home-first">
  
 
 <div className="div-home-input inpu-home-11">

<input type="email" className=" form-control"  ref={ob=>emailbox=ob} placeholder="enter your email"></input>

</div>
<div className="div-home-input-1 inpu-home-11">


<input type="password"  className=" form-control"   ref={ob=> passbox=ob} placeholder="enter your password"></input>

</div>


    
<div className="btn-home">

 <button className="btn btn-warning btn-lg btn-home-1"> login</button>
 <b className="text text-danger">{msg}</b> 
 


</div>
<div className=" col-6">

</div>





</div>
</form></>}

  </>






}


  
  






