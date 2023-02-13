import Navbar from './navbar/Navbar';
import Events from './events';
import Box from './box';
import { useState } from 'react';
function Home(){
    const [myArray, setMyArray] = useState([{name:"Home"},{name:"Events"},{name:"Contactus"}])

    return (
    <div>
    <Navbar myArray={myArray}/>
    <br/><br/>
    <Box />
    <br/>
    <Events />
    </div>
    );
}
export default Home;
