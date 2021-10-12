import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo'

function Hero() {
    return (
        <div>
            <section id="Banner">
                <Logo/>
                <div className="container content-wrap text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1>
                                ENTREMOS JUNTOS A ESTA NUEVA DIMNENSIÓN
                            </h1>
                            <a className="btn btn-primary btn-xl smooth-scroll" href="#Contact">
                                ¡Inscribite!
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 mt-4">
                            <Link className="btn btn-info" to="/Exp">Exponentes</Link>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 mt-2">
                            <Link className="btn btn-info" to="/Regresiva">Countdown</Link>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
        </div>
    )
}

export default Hero
