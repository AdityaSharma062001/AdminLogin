import { Link } from "react-router-dom";

export default  function Adminsidebar(props){
  var logout=()=>{

      props.funtoken({login:false,token:undefined})

  }

return<>
<div className=" Adminsidebar">
<h5 style={{marginLeft:20,color:'#ffc200'}}>Welcome Admin</h5>
<ol className="adminlist">


<Link to='/counseller'><li> Counseller</li></Link>
<Link to='/addcourse'><li> Addcourse</li></Link>
<Link to="/faculty"><li> Faculty</li></Link>
<Link to="/updatefess"><li> Updatefess</li></Link>



</ol>
<b className="btn2" onClick={logout}>LogOut</b>

</div>


</>











}