import { Link } from "react-router-dom";

export default function SideBar(props) {
  var change = () => {
    props.chg({ loging: false, token: undefined });
  };

  return (
    <>
      <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-house"></i>
          </button>
          <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
              
              <i class="fa fa-home fa-2x" aria-hidden="true"></i>
              
            </div>
            <h1 className="text-center"> Login Admin</h1>
          </div>
          {props.log ? (
            <>
              <nav className="tm-nav" id="tm-nav">
                <ul>
                  <li className="tm-nav-ite active">
                    
                    <Link to="/" className="slide-li"> HOME</Link>
                  </li>
                  <li className="tm-nav-ite">
                    
                    <Link to="cat" className="slide-li"> Catagory</Link>
                  </li>

                  <li className="tm-nav-ite">
                    
                    <Link to="brd"className="slide-li"> Brand</Link>
                  </li>

                  <li className="tm-nav-ite">
                    
                    <Link to="pro" className="slide-li">Product</Link>
                  </li>

                  <li className="tm-nav-ite">
                    
                      <b onClick={change} className="slide-li">Log-out</b>
                    
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <>
              <nav className="tm-nav" id="tm-nav">
                <ul>
                  <li className="tm-nav-item active">
                    <Link to="/"><b style={{color:"white",fontFamily:"inherit" ,cursor:"pointer"}}>LOGIN</b></Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
}
