import React from "react";

export default function bar() {

 var array1 = [
    { name: "TOKYO UNIVERSITY", val: 61 },
    { name: "BOSTON UNIVERSITY", val: 72 },
    { name: "OXFORD UNIVERSITY", val: 81 },
    { name: "YALE UNIVERSITY", val: 98 },
]

    return (
        <div>
            <div className="row custom-misc-2-con-chart">
                <div className="col-5">
                <h1> <strong> Want to study at one of the world's top 5 universities? </strong></h1>
                    <h3>Here’s a complete rundown of the world’s top 5 universities. </h3>
                    <ul style={{ color: "#5a4269" }}>
                        {["UK", "CANADA", "USA", "UAE", "CHINA"].map((data)=><li>{data}</li>)}
                    </ul>

                    <button className="btn btn-primary" style={{ backgroundColor: "#5a4269", borderRadius: "30px"  }} >
                        RESEARCH !!!
                    </button>
                </div>
                <div className="col-7 d-flex align-items-end justify-content-evenly">
                    <div className="heignt-creator"> 
                    <div className="h-100 d-flex justify-content-around">
                        {/* array of objects */}

                        {array1.map((data) => {
                            return (
                                <div className="con-chart d-flex">
                                    
                                    <div  style={{ height: `${data.val}%` }} className="bar-chart mx-5" >
                                    <div >{data.val }%</div>
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
