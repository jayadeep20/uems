import logo from './logo.png';
import Navlink from './Navlink';
import {Link} from 'react-router-dom';
function Navbar({myArray}){  
    return(
      <nav className="navbar navbar-expand-lg bgj ">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:"black"}} href="#">
          <img src={logo} alt="" />
          Event Management Club
        </a>
        <button
          className="navbar-toggler"
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
            {myArray.map((item, index) => (<Navlink key={index} name={item.name} o={item.path}/> ))}
          </ul>
          <Link className="btn btn-outline-success" type="submit" to='/login'>Login</Link>
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
