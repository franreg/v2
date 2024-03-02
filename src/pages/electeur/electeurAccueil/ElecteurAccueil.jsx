import React from "react";
import Navbar from "../../../layouts/electeur/navbar/Navbar";
import { Link } from 'react-router-dom'

export default function ElecteurAccueil() {
    const truncate = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + '...';
        }
    };
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title">Soyez la voix du changement !</h1>
                        <p>Choisissez le candidat qui vous inspire et qui incarne vos valeurs.</p>
                        <small style={{fontStyle: 'italic'}}>Votre voix compte, faites-la entendre !</small>
                        <div className="d-flex flex-wrap">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center me-2">
                                        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                            className="rounded-circle" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Koffi boris</p>
                                            <p className="text-muted mb-0">boris@gmail</p>
                                        </div>
                                    </div>
                                    <p style={{marginBottom: -1, fontStyle: 'italic'}}>
                                        <strong>Parti politique: </strong> <small style={{fontStyle: 'italic'}}>RHDP</small>
                                    </p>
                                    <p>
                                        {truncate("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus corrupti soluta, quisquam rem odit quia, voluptate sunt accusamus ipsum sed expedita, eos perferendis nobis asperiores illo error tenetur repellendus.", 50)}
                                    </p> 
                                    <Link to="/electeur/boris/candidat" className="btn btn-primary">En savoir plus</Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center me-2">
                                        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                            className="rounded-circle" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Koffi boris</p>
                                            <p className="text-muted mb-0">boris@gmail</p>
                                        </div>
                                    </div>
                                    <p>
                                        {truncate("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus corrupti soluta, quisquam rem odit quia, voluptate sunt accusamus ipsum sed expedita, eos perferendis nobis asperiores illo error tenetur repellendus.", 50)}
                                    </p> 
                                    <button className="btn btn-primary">En savoir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}