import { useEffect, useState } from "react";



 export default function Brand (props){
      var brandbox= undefined;
    var [brand, setbrand]= useState([])

  useEffect(()=>{

      fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/brand/list",{   
      
        headers:{
                 authorization :"Bearer "+props.token,
                     "content-type" : 'application/json',




        },
        


      }).then(respones=>respones.json())
        .then(data=>

              setbrand(data)


        )



  },[])

     var save=(event)=>{
      const data={ brand_name:brandbox.value,





                  
      }

              fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/brand/save",{

                  method:"post",
                   headers:{ authorization:"Bearer "+props.token,
                             "content-type":'application/json'
                              },
                            body:JSON.stringify(data)


                    }).then(respones=>respones.json())
                     .then(rdata=>{
                             console.log(rdata)
                      if(rdata.status){
                          setbrand([...brand,rdata.brand])

                      }


                     })


     event.preventDefault()

     }
  
   return<>
   <h1 className="alert-warning text-center"> All Brand</h1>
   <form onSubmit={save}>


   <div className="cat-div">
      <div>
   
   <input type="text"  className="form form-control input-cat" placeholder="enter your brand"  ref={ob=>brandbox=ob}></input>

</div>

<div>

   <button className="btn btn-success btn-cat"> submit</button>
   </div>
   </div>


   



    </form>

    <table className="table table-warning table-cat">
   <thead>
    <th>s no</th>
    <th>Brand_Name</th>




   </thead>
   <tbody>
    {brand.map((ob,i)=><tr>
    <td>{i+1}</td>
    <td>{ob.brand_name}</td>

    </tr>




    )}


   </tbody>




    </table>





   </>




}







        
    
  






