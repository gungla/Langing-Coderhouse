import React from 'react'
import { Link } from "react-router-dom"
import Exp1 from '../../assets/images/expertos/e1.png'
import Exp2 from '../../assets/images/expertos/e2.png'
import Exp3 from '../../assets/images/expertos/e3.png'
import Exp4 from '../../assets/images/expertos/e4.png'
import Exp5 from '../../assets/images/expertos/e5.png'


function Slide() {

    return (
        <div>            
            <div id="customers-testimonials" className="owl-carousel">
                <Link to="/Exp">
                <div className="item">
                    <div className="shadow-effect">
                        <img className="img-circle" src={Exp1} alt="" />
                        <p>LU CORDERO</p>
                    </div>
                </div>
                </Link>
                <Link to="/Exp">
                <div className="item">
                    <div className="shadow-effect">
                    <img className="img-circle" src={Exp2} alt="" />
                    <p>
                        CHRIS LOPEZ
                    </p>
                    </div>
                </div>
                </Link>
                <Link to="/Exp">
                <div className="item">
                    <div className="shadow-effect">
                    <img className="img-circle" src={Exp3} alt="" />
                    <p>
                        SANDRA PEREZ
                    </p>
                    </div>
                </div>
                </Link>
                <Link to="/Exp">
                <div className="item">
                    <div className="shadow-effect">
                    <img className="img-circle" src={Exp4} alt="" />
                    <p>
                        LARA FUENTES
                    </p>
                    </div>
                </div>
                </Link>
                <Link to="/Exp">
                <div className="item">
                    <div className="shadow-effect">
                    <img className="img-circle" src={Exp5} alt="" />
                    <p>
                        PEDRO GONZALEZ
                    </p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Slide
