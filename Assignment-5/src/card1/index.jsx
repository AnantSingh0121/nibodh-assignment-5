import React from 'react'
import Img from "D:/WEB/college/src/images/Mission.jpg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
                <div className="col-6 custom-card-img">
                    <img src={Img} alt="" className="img-fluid" />

                </div>
                <div className="col-6" style={{ backgroundColor: "Pink" }}>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-black text-center"><strong> WHO ARE WE ?</strong></h1>
                        </div>
                        <br />
                        <br />
                        <div className="col-12">
                            <p className="text-black text-center">We’re a mission-driven, not-for-profit organization that promotes excellence and equity in education. Our mission—to connect students to college success and opportunity—is at the heart of everything we do. We support students as they build the skills they’ll need in college and work to remove barriers that can stand in the way of higher education.</p>
                        </div>
                        <div className="col-12 text-center">

                            <button className="btn4 btn-primary custom-card-btn" > Meet The People Behind This Mission</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
