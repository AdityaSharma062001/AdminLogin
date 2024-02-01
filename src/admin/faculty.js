import { useState } from "react";

export default function Faculty(props) {
  var Facultybox = undefined;
  var emailbox = undefined;
  var mobilebox = undefined;
  var passbox = undefined;


     const [msg,setmsg]=useState("")
  var bearer = "Bearer " + props.authtoken

  var addfaculty = (event) => {
              setmsg("")
    const data = {

      f_name: Facultybox.value,
      email: emailbox.value,
      mobile: mobilebox.value,
      password: passbox.value,



    }
    console.log(data)
    console.log(props.authtoken)
    fetch("http://localhost:8989/auth/admin/faculty_reg", {

      method: "post",
      headers: {

        Authorization: bearer,
        "Content-Type": 'application/json',


      },
       body: JSON.stringify(data)







    }).then(respones => respones.json())
      .then(factydata => {
                   
          if(factydata.status){
                setmsg(" faculty is successfuily add")
          }
          else
           setmsg("")

      })


      event.target.value=" "
      event.preventDefault()

  }


  return <>
  <div className="addfaculty">
    <h1 >Add Faculty</h1>
    </div>
    <div className="factly">
      <form onSubmit={addfaculty}>

        <div className="row mt-3">
          <div className="col-6">
            <label style={{ marginLeft: 300 }} >CounsellerName</label><br></br>
            <input style={{ marginLeft: 300 }} type="text" className="form form-control" ref={ob => Facultybox = ob} required></input>
          </div>

          <div className="col-6">
            <label>Email</label><br></br>
            <input type="email" className="form form-control" ref={ob =>emailbox=ob} required></input>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <label style={{ marginLeft: 300 }} >Mobile</label><br></br>
            <input style={{ marginLeft: 300 }} type="number" className="form form-control" ref={ob => mobilebox = ob} required></input>
          </div>

          <div className="col-6">
            <label>Password</label><br></br>
            <input type="password" className="form form-control" ref={ob=> passbox=ob} required></input><br></br>
          </div>
        </div>
        <button style={{ marginLeft: 500 }} className="btn btn-success">Add Faculty</button> &nbsp; &nbsp;
       
         <b style={{color:"blue"}}>{(msg)}</b>
              <hr></hr>




      </form>
    </div>

  </>

}
