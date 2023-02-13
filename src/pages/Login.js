 import Navbar from "./navbar/Navbar";
 import Form from './form';
 function Login(){
     var userIsRegistered = true;
    return(
        <div>
        <Navbar myArray={[{name:"Home"},{name:"Events"},{name:"Contactus"}]}/>
        <Form isRegistered={userIsRegistered} />
        </div>
    );
 }
 export default Login