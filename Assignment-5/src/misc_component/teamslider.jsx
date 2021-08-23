import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
    const [Xyz, setXyz] = useState([9, "po", { Lk: "po" }]);
    console.log({ state: Xyz });
    const normal = () => {
        setXyz(56)
    }

    var arr2 = [
        { link: "https://sdg-migration-id.s3.amazonaws.com/thumbs_Interior-Design-HOK-California-Institute-of-Technology-Ronald-and-Maxine-Linde-Hall-of-Mathematics-and-Physics-lounge-11.18.770x0_q95.jpg"},
        { link: "https://sdg-migration-id.s3.amazonaws.com/Interior-Design-Clive-Wilkinson-Architects-Santa-Monica-College-Center-for-Media-and-Design-lobby-12.18.jpg"},
        { link: "https://sdg-migration-id.s3.amazonaws.com/ltl-architects-columbia-journalism-lecture-hall-0318.jpg" },
        { link: "https://sdg-migration-id.s3.amazonaws.com/moody_center_for_the_arts_michael_maltzan_architecture_exterior.jpg" },
        { link: "https://sdg-migration-id.s3.amazonaws.com/SCAD_HiveC_Interior.jpg" },
        { link: "https://sdg-migration-id.s3.amazonaws.com/Yale-University-school-of-management-New-Haven-01.jpg" },
        { link: "https://sdg-migration-id.s3.amazonaws.com/thumbs_harley_ellis_annenberg.770x0_q95.jpg" },
        { link: "https://sdg-migration-id.s3.amazonaws.com/Interior-Design-BoY-MdeAS-Architects-Alumni_Auditorium-Schaefer-Awards-Gallery-Columbia-University-Irving-Medical-Center-05-scaled.jpg" },
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows:true,
    };

    return (
        // dom html tags /components reacts components
        <div style={{backgroundColor: "Bisque", height: "320px"}} >

<br/>

            <div class="button9 onClick={normal}">VARIOUS CAMPUS</div>
            <br/>
            <br/>
            <br/>        

            <Slider arrows={true} {...settings}>
                {
                    arr2.map(data => {

                        return (<div>
                            <img className=" slider-image-team" src={data.link} alt="" />
                        </div>)
                    })
                }

            </Slider>
        </div>
    )
}
