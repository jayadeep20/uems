import React from 'react'
import { Link } from 'react-router-dom';
function Navlink(props){
    return(
        <li className="nav-item">
              <Link className="nav-link" to={props.o}>{props.name}</Link>
            </li>
    );
}
export default Navlink;




