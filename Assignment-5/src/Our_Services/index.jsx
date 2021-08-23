import React from "react";

export default function ServiceInfo() {
    return (
        <div className="service-conatiner">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="circle-div-container">
                        <div className="circular-div cr1">
                            <span>
                            <i class="fab fa-teamspeak"></i>
                                <br />
                                CAREER GUIDANCE
                            </span>
                        </div>
                        <div className="circular-div cr2">
                            <span>
                            <i class="far fa-bell"></i>
                                <br />
                                ADMISSION ALERT
                            </span>
                        </div>
                        <div className="circular-div cr3">
                            <span>
                            <i class="fas fa-user-graduate"></i>
                                <br />
                                PG COUNSELLING
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center text-secondary">
                    <p>
                        <i> "Be a part of this Journey that has helped lakhs of Students Realise their Dreams" </i>
                    </p>
                </div>
                <div className="col-12 service-info-btn-con">
                    <button className="btn btn-outline-secondary">SEMINAR </button>
                    <button className="btn btn-outline-secondary"> CLASSES </button>
                    <button className="btn btn-outline-secondary"> EXAMS </button>
                </div>
            </div>
        </div>
    );
}
