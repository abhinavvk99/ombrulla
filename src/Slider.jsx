import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Style.css'
import ship from './img/shipcom.ee1ba5d2_o18LH.webp'
import green from './img/green-palmes.41a0af47_Z1Mo497.webp'
import terranz from './img/terranz-other.fe41f67d_Z1IrlCC.webp'

function Responsive() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
            }
        ]
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={green} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={ship} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={terranz} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={green} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={terranz} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={ship} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={terranz} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="p-7">
                            <h1 className="font-semibold text-blue-600 text-6xl">"</h1>
                            <span className=" font-sans">Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</span>
                        </div>
                        <div>
                            <div className=" flex flex-wrap bg-gray-400 p-7">
                                <img src={green} alt="ship" className=" w-28 rounded-full p-2" />
                                <div className=" pt-5">
                                    <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                                    <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
