import { useEffect, useState } from "react"

export default function  Cat  (props){

  var catebox=undefined;
  const [catagorys,setcatagorys]=useState([])
  var [loddata,setloddata]=useState(true)
  
    useEffect(()=>{
                setloddata(false)

       fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/category/list",{
       
        headers:{

               "content-type" :'application/json',
               authorization :"Bearer "+props.token



        }
        
      }).then(respones=>respones.json()).then(data=>{

           setcatagorys(data)


       })
    
  },[])
var save=(event)=>{

     const data={
             cate_name:catebox.value
            }
           
            fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/category/save",{
               method:"post",
                headers:{ authorization:"Bearer "+props.token,
                     "Content-type" :'application/json'


 },
             body:JSON.stringify(data)
             


            }).then(respones=>respones.json()).then(rspdata=>{
              console.log(rspdata)
                // if(rspdata.status){
                //   setcatagorys([...catagorys,rspdata.category])
                // }
            
            })
  event.preventDefault()
}
  
console.log(catagorys)
    
         
  

  return<>
   <h1 className="alert-warning text-center"> All Catagory</h1>
   <form onSubmit={save}>
   
    <div className="cat-div">
      <div>
   
    <input type="text" className="form-control input-cat" ref={ob=>catebox=ob} placeholder="enter your catogary"></input>
    </div>

    
    <div>
    <button className="btn btn-warning btn-cat" > save</button> &nbsp;&nbsp;
    {loddata?<button className="text text-warning btn-cat" > data is loding</button>:""}
    </div>
    </div>
    


   </form>

       <table className=" table table-warning table-cat">
       <thead>
       <tr>
        <th>SO.NO</th>
        <th>Catagory_Name</th>
       </tr>



       </thead>
        <tbody>
        {catagorys.map((ob,i)=><tr>
          <td>{i+1}</td>  
          <td>{ob.cate_name}</td>
         


        </tr>)}


        </tbody>


       </table>




  </>






}