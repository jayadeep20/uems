import logo from './logo.png';
import Navelement from './Navelement';
import {Link} from 'react-router-dom';
function Navbar(props){  
    return(
      <nav className="navbar navbar-expand-lg bgj ">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:"black"}} href="#">
          <img src={logo} alt="" />
          Event Management Club
        </a>
        <button
          className="navbar-toggler btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">            
          {props.navs.map((e, i) => {
              return <Navelement key={i} to={e.to} value={e.value} />;
            })}
          </ul>
          
        <span className="pe-md-5">
            <i
              className="fa fa-user-circle icon me-sm-3"
              aria-hidden="true"
            ></i>
            {props.usertype}
          </span>
          <form className="d-flex">
            <Link
              className="btn btn-success"
              type="button"
              to="/"
              onClick={() => localStorage.removeItem("token")}
            >
              Logout
            </Link>
          </form>
        </div>
      </div>
    </nav>
    );

}
export default Navbar;


// import React from 'react';

// const Navbar = ({myArray}) => {
//   if(Array.isArray(myArray)){
//     return (
//       <div>
//         {myArray.map((item, index) => (
//           <p key={index}>{item}</p>
//         ))}
//       </div>
//     )
//   }else{
//     return <p> myArray prop is not an array</p>
//   }
// }

// export default Navbar;
