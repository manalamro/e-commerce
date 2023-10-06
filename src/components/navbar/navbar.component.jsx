import "./navbar.css";
import {Link} from 'react-router-dom';
// import {FiAlignRight,FiXCircle,FiChevronDown,FiLogIn} from "react-icons/fi";
import logo4 from '../../assets/bb.webp';
import { useState } from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {VscClose} from "react-icons/vsc";
import {MdKeyboardArrowLeft} from 'react-icons/md';

const Navbar =()=>
{

    const [isResponsiveIconClose ,setIsResponsiveIconClose] = useState(true);
    const [isOuterMenuOpen ,setIsOuterMenuOpen] = useState(true);
    const [className,setClassNmae] = useState("outerUl");
    const toggleOuterMenuOpen=()=>{
        setIsOuterMenuOpen(!isOuterMenuOpen);
    }

    const toggleClass=()=>{
        setIsResponsiveIconClose(!isResponsiveIconClose);
        toggleOuterMenuOpen();
        if(isOuterMenuOpen===false){
            setClassNmae("outerUl");
        }
        else{
            setClassNmae("isShown");
        }
    }
 
    const ToggleClosedFromLi=()=>{
        setIsResponsiveIconClose(!isResponsiveIconClose);
        toggleOuterMenuOpen();
        if(isOuterMenuOpen===false){
            setClassNmae("outerUl");
        }
        else{
            setClassNmae("isShown");
        }
    }

    

return(
<div className="Navbar">

          {/* Responsive Menu Button */}
          {isResponsiveIconClose === true ? <> 
                        <span className="navIcon" style={{ display: 'none' }} onClick={toggleClass} > <RxHamburgerMenu />   </span>
                    </> : <> 
                        <span className="navIcon" style={{ display: 'none' }} onClick={toggleClass} > <VscClose />   </span>
                    </>}

<ul className={className}>
<li><Link to="/login" style={{color:"black",fontWeight:"bold",marginRight:"20px",whiteSpace:"nowrap"}} onClick={ToggleClosedFromLi}>Login as Admin</Link></li>
<hr className="outerUlHr"/>
    <li><Link to="/home" onClick={ToggleClosedFromLi}>one</Link></li>
    <span className="lineusingborder"></span>
    <hr className="outerUlHr"/>
    <li><Link to="/home" onClick={ToggleClosedFromLi}>two</Link></li>
    <span className="lineusingborder"></span>
    <hr className="outerUlHr"/>
    <li className="hoverdList" onClick={ToggleClosedFromLi}>
    <div>
        <span><Link to="/login" onClick={ToggleClosedFromLi}>login</Link> 
    <MdKeyboardArrowLeft className="subMenuIcon" /></span>
    <ul className="innerUl" >
        <li><Link to="/home" onClick={ToggleClosedFromLi}>login 1</Link></li>
        <hr className="innerUlHr"/>
        <li><Link to="/login" onClick={ToggleClosedFromLi}>login 2</Link></li>
        <hr className="innerUlHr"/>
        <li><Link to="/home" onClick={ToggleClosedFromLi}>login 3</Link></li>
    </ul>
      </div>
        </li>
   
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li>
    <span className="lineusingborder"></span>
    <hr className="outerUlHr"/>
    <li onClick={ToggleClosedFromLi}><Link to="/home">four</Link></li>
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">five</Link></li>
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">six</Link></li>
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li>
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li> <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li> <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li>
    <hr className="outerUlHr"/>
    <span className="lineusingborder"></span>
    <li onClick={ToggleClosedFromLi}><Link to="/home">three</Link></li>
</ul>

<Link to="/">
<img src={logo4} title="Milano Smart Living" alt="Milano Smart Living"></img>
</Link>

</div>

);
}

export default Navbar;