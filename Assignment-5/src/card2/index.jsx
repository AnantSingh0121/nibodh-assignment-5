import React from 'react';
import Card from 'D:/WEB/college/src/compnent/cards.jsx';
let array=
    [
        {
            src: "https://picsum.photos/200/300",           
            title:"CHIEF EXECUTIVE OFFICER",
            desc:"With a team of educators, David founded the Grow Network, an organization committed to making assessment results truly useful for teachers, parents and students. The Grow Network delivered or students.",
            val:50
        },
        {
            src: "https://picsum.photos/200/300",            
            title:"SENIOR VICE-PRESIDENT, COLLEGE AND CAREER ACCESS ",
            desc:"Steve is passionate about expanding access, equity, and excellence. A former classroom teacher, he led the CityBridge Foundation’s Breakthrough Schools: D.C. competition, which works with public schools.",
            val:18
        },
        {
            src: "https://picsum.photos/200/300",
            title:"PRESIDENT",
            desc:"Tracie has a Master of Business Administration from the University of Virginia’s Darden School of Business and a Bachelor of Science in Business Administration from George Mason University.",
            val:90
        }
    ]

export default function card2() {
    return (
        <div className="card3">
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6 text-black" > <strong>  How we're governed  ?  </strong></h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span" ></span>
            </div>
            <div className="card-para-2 text-center" >
            More than 6,000 two - and four-year colleges, universities, secondary schools and districts, higher education systems, and other nonprofit organizations compose College Board.  Each member appoints delegates to serve as a direct link between institutions and College Board.
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div style={{fontSize:"14px"}} className="col-12">
                    
                    <div  className="d-flex justify-content-evenly">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

