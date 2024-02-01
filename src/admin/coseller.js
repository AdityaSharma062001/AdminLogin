import { useState } from "react";

export default function Counseller(props) {

  // const stringysafe= require('json-stringify-safe')

  var Counsellerbox = undefined;
  var emailbox = undefined;
  var mobilebox = undefined;
  var passbox = undefined;
  var [addcoun, setcoun] = useState([])
  var [msg, setmsg] = useState([])

  var bearer = "Bearer " + props.authtoken

  var addcoun = (event) => {

    const data = {

      co_name: Counsellerbox.value,
      email: emailbox.value,

      mobile: mobilebox.value,

      password: passbox.value,

    }
    console.log(data)
    // console.log(props.authtoken)


    fetch("http://localhost:8989/auth/admin/counsellor_reg", {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": 'application/json'

      },
      body: JSON.stringify(data)
    })
      .then(respones => respones.json())
      .then(condata => {
        if (condata.status) {

          setmsg("counseller is add")
        }

      })
    event.preventDefault()
  }

  return <>

    <h1 style={{ color: "blue", marginLeft: 600, marginTop: -750 }}> Add counseller</h1>

    <div className="counselerform">
      <form onSubmit={addcoun}>
        <div className="row mt-3">
          <div className="col-6">
            <label>CounsellerName</label><br></br>
            <input type="text" className="form form-control" ref={ob => Counsellerbox = ob} required></input>
          </div>

          <div className="col-6">
            <label>Email</label><br></br>
            <input type="email" className="form form-control" ref={ob => emailbox=ob} required></input>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <label>Mobile</label><br></br>
            <input type="number" className="form form-control" ref={ob => mobilebox=ob} required></input>
          </div>

          <div className="col-6">
            <label>Password</label><br></br>
            <input type="password" className="form form-control" ref={ob => passbox=ob} required></input>
          </div>
        </div>
        <button className="btn btn-success">Add Counseller</button> &nbsp; &nbsp;
        <b className="text-success">{(msg)}</b>
      </form>

    </div>


  </>
}