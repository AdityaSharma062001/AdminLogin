import { Component } from "react";


export default function Login(props) {

        var emailbox=undefined;
        var passbox=undefined;

      var login=(event)=>{


          const data={
                  email:emailbox.value,
                  password:passbox.value,



          }

            fetch("http://localhost:8989/browse/admin_login",{
                
             method:"post",

               headers:{

                        "content-type":'Application/json'




               },
               body:JSON.stringify(data)


                }).then(respones=>respones.json())
                .then(admin=>{
                    console.log(admin.data.token)
                    if(admin.status){
                      props.funtoken({login:true,token:admin.data.token})



                    }
                     else
                    
                     props.funtoken({login:false,token:undefined})
                
                
                
                })

            event.preventDefault()
      }



    return <>
    <div style={{marginLeft:400}} className="frm">
        <form onSubmit={login}>
            <div className="row">
                <div className="col-lg-6">
                    <input type="email" className="form-control" ref={ob=>emailbox=ob}  placeholder="Enter your email" />
                </div>
                <div  style={{marginLeft:-180,}} className="col-lg-6"><br></br><br></br>
                    <input type="password"   className="form-control" name="password" ref={ob=>passbox=ob} placeholder="Password"  />
                </div>
                
                <div style={{marginRight:870}} className="ml-lg-auto col-lg-5 col-12"><br></br>
                    <button  className="btn" value="Send Button">Login</button>
                </div>
            </div>
        </form>
        </div>
    </>
}