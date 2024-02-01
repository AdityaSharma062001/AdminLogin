import { useState } from "react";

export default function Admincourse(props){
   var coursebox=undefined;
    var durationbox=undefined;
    var fessbox= undefined;
  var imagebox=undefined;
    var syllabus=undefined;
    var [msg,setmsg] =useState("")

   var addcourse=(event)=>{
           
          const data={
            crs_name:coursebox.value,
            crs_duration:durationbox.value,
            crs_fees:fessbox.value,

            crs_image:imagebox.value,
            syllabus:syllabus.value



          }
                console.log(data)
                console.log(props.authtoken)

                fetch("http://localhost:8989/auth/admin/add_course",{

                  method:'post',

                  headers:{
                    Authorization:"Bearer " + props.authtoken,
                    "Content-Type": 'application/json',
                  },
                  body:JSON.stringify(data)

                }).then(respones=>respones.json())
                .then(addcourse=>{
                    console.log(addcourse)
                    if(addcourse.status){

                         setmsg("course is successfuly add")
                    }


                }),
                event.preventDefault()

   }

    
    return<>
   <h1 className="admincourse"> Add Course </h1>

    <form onSubmit={addcourse}>
    <div className="row">
    <div className="col-6">
    <label style={{marginLeft:400}}>Addcourse</label>
     <input style={{marginLeft:400}} type="text" className=" form-control" ref={ob=>coursebox=ob}></input>
     </div>
     <div className="col-6">
    <label style={{marginLeft:180}}>Durations</label>
     <input style={{marginLeft:180}} type="text" className=" form-control" ref={ob=>durationbox=ob}></input>
     </div>
     </div>

     <div className="row">
    <div className="col-6">
    <label style={{marginLeft:400}}>AddFess</label>
     <input style={{marginLeft:400}} type="text" className=" form-control" ref={ob=>fessbox=ob}></input>
     </div>
     <div className="col-6">
    <label style={{marginLeft:180}}>Images</label>
     <input style={{marginLeft:180}} type="text" className=" form-control" ref={ob=> imagebox=ob}></input>
     </div>
     </div>

     <div className="row">
    <div className="col-6">
    <label style={{marginLeft:400}}> syllabus</label>
     <input style={{marginLeft:400}} type="text" className=" form-control" ref={ob=> syllabus=ob}></input>
     </div><br></br>
     <div className="col-6">
     <button   className="btn3"> Add course</button> &nbsp; &nbsp; 
     <b style={{color:"blue"}}>{(msg)}</b>
     
     </div>
     </div>


    </form>

  



    </>







}