import React from "react";
import logo from '../images/FINDER.jpg'

export default function Header1() {
    return (
        <div>
            <div class="lalala"> 
            <div className="row">
                <div className="col-12 text-center">
                <img src={logo} className="Anant2"/ >
                </div>

                <div className="col-12">
                    <h1 className="custom-misc-h1-1 text-secondary text-center">
                        <span>50,00,000</span> Numbers of Scholarships Given Till Now...
                    </h1>
                </div>

                {/*line */}
                <span className="line2"></span>
            </div>

            {/* <img src={logo2} alt="" className=" custom-logo img-thumbnail"  /> */}
        </div>
        </div>
    );
}
