import {useState} from "react"

import {GiHamburgerMenu} from 'react-icons/Gi'
import {GrClose} from 'react-icons/Gr'
import './Navbar.css'

function Navbar(){

    const [Nav, setNav] = useState(true);
    const setNavigation = () => {
        setNav(!Nav);
    };

    return(
        <>
            <div className="Nav-Bar">
                <div className="NavBar">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#MyWorks">My Works</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <GiHamburgerMenu className={`Menu ${Nav? "Active":""}`} onClick={setNavigation}/>
            <div className={Nav? "Nav-Bar-Mobile-View":"Nav-Bar-Mobile-View-Active"}>
                <GrClose className={`Close ${Nav? "":"Active"}`}  onClick={setNavigation}/>
                <div className="NavBar-Mobile-View">
                    <ul>
                        <li><a href="#Home" onClick={setNavigation}>Home</a></li>
                        <li><a href="#About" onClick={setNavigation}>About</a></li>
                        <li><a href="#MyWorks" onClick={setNavigation}>My Works</a></li>
                        <li><a href="#Contact" onClick={setNavigation}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar