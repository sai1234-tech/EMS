import React, { useEffect, useState }  from 'react';
import './navbar.css'
import './navbar.css'
import toggle from '../../src/Components/Assests/togglebtn.png'
 import Emslogo from '../Components/Assests/emslogo.png'
import Toggle from '../Components/Assests/Toggle.png';
import Person from '../Components/Assests/Person.png'
import Polygon from '../Components/Assests/Polygon.png'
import Vector from '../Components/Assests/Vector.png'
// import togglebtn from '../Components/Assests/togglebtn'
function Navbar(){
    const [toggle, setToggle] = useState(true)
    

    
    useEffect(() => {
        const data = document.querySelector(".navbar-toggler-icon");
        const sideNavbar = document.querySelector(".sideNavbar");
        const navbar = document.querySelector(".pos-f-t");
        const fit = document.getElementById("fit");
        let navMove = ()=>{
            const isMoveElementClassExists = sideNavbar.classList.contains("moveElement");
            if(isMoveElementClassExists){
                sideNavbar.classList.remove("moveElement");
                navbar.classList.remove("incElement");
                sideNavbar.classList.add("reverseMoveElement");
                navbar.classList.add("reverseIncElement");

            }else{
                sideNavbar.classList.remove("reverseMoveElement");
                navbar.classList.remove("reverseIncElement");
                sideNavbar.classList.add("moveElement");
                navbar.classList.add("incElement");
            }
            
            // fit.classList.add("moveElement");
            
        }
        data?.addEventListener('click',navMove);
        return () => {
            data?.removeEventListener('click',navMove);
          }
    }, [])
    
    
    return (
    <>  
        
            <div className='sideNavbar'>
                {/* <ul>
                    <li>test data</li>
                    <li>test data</li>
                    <li>test data</li>
                    <li>test data</li>
                    <li>test data</li>

                </ul> */}
                  <div className='navbar_box_div '
                //    style={{marginLeft:toggled?'0%':'-17vw'}}
                  >
            <div class="sidebar-header">
                     <img class="ems" src={Emslogo} alt="Logo"  />
            </div>
            <ul class="list-unstyled components">
                    <li></li>
                    <hr class="news" />
                 
               
                        <li class="dash"> 
                         <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"

                            >Dashboard</a>

                            <li><img class="tg1" src={Toggle} size={"500px"}  alt="tog" /></li>

                        </li>
                        <hr class="new"/>

                        <li class="dash">

                            <a href="#">
                                Voters Data
                                </a>
                                <li><img class="tg2" src={Toggle} size={"500px"}  alt="tog" /></li>

                        </li>
                        <hr class="new" />
                        <li class="dash">
                            <a href="#">User-Management</a>
                            <li><img class="tg3" src={Toggle} size={"500px"}  alt="tog" /></li>

                        </li>
                        <hr class="new" />
                        <li class="dash"> <a href="#">E-Campaigns</a>
                        <li><img class="tg4" src={Toggle} size={"500px"}  alt="tog" /></li>

                         </li>

                        <hr class="new" />

                        <li class="dash"> <a href="#">Birthdays</a> 
                        <li><img class="tg5" src={Toggle} size={"500px"}  alt="tog" /></li>

                        </li>
                        <hr class="new" />

                        <li class="dash"> <a href="#">Settings</a>
                        <li><img class="tg6" src={Toggle} size={"500px"}  alt="tog" /></li>
 </li>     
                    <hr class="new" />



                    </ul>

            </div>

            </div>
            <div className="pos-f-t" id= "navcontainer">
                
                <nav className="navbar navbar-dark " id='fit'>
                    {/* <button className="navbar-toggler" type="button"  
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
                    >

                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <span className="navbar-toggler-icon"></span>

                    
                </nav>
                {/* <div id='place'>
                    <form class="form-inline my-2 my-lg-0" >
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div> */}

<div>
                {/* <span class="v2"></span> */}
                <span class="v2"></span>


                    <img class='user_img_top_nav' src={Person} alt='not visisble'/>
                    <h6 className="user_name">Admin</h6>
                    <img class='poly_img_top_nav' src={Polygon} alt='not visisble'/>
                    <span class="v1"></span>

                    <img class='lock_img_top_nav' src={Vector} alt='not visisble'/>



                </div>
            </div>
        

    </>
    )
}
export default Navbar;