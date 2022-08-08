import React from 'react';
import './Footer.css';
import Logo from './Logo.png';
import Twitter from './Twitter.png';
import Github from './Github.png';


const NavBar = () => {
    return(
        <div className="Footer">
            <div className="LeftFooterContainer">
                <div className="FooterTitle"><img src={Logo} alt="MediCare Logo"/> MediCare</div>
                <div className="FooterTagLine">
                    "Take your doctor home"
                    <br/>
                    Created for Hack-O-Heist Hackathon.
                </div>
            </div>
            <div className="RightFooterContainer">
                <div className="TeamMembers">
                    <div className="Kunal">
                        <div className="Name">Kunal Keshan</div>
                        <div className="Twitter"><a href="https://twitter.com/_kunalkeshan_"><img src={Twitter} alt="Twitter Logo"/></a></div>
                        <div className="Github"><a href="https://github.com/kunalkeshan"><img src={Github} alt="Github Logo"/></a></div>
                    </div>

                    <div className="Kevin">
                        <div className="Name">Kevin Paul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className="Twitter"><a href="https://twitter.com/it_aint_kevin"><img src={Twitter} alt="Twitter Logo"/></a></div>
                        <div className="Github"><a href="https://github.com/itaintkevin"><img src={Github} alt="Github Logo"/></a></div>
                    </div>

                    <div className="Arnav">
                        <div className="Name">Arnav Shukla</div>
                        <div className="Twitter"><a href="https://twitter.com/iamlordzeus"><img src={Twitter} alt="Twitter Logo"/></a></div>
                        <div className="Github"><a href="https://github.com/thelordzeus"><img src={Github} alt="Github Logo"/></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;