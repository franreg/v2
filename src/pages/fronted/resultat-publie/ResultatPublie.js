import React from "react";
import Navbar from "../../../layouts/fronted/navbar/Navbar";
import './ResultatPublie.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="text-center">
                        <h2>Suivez les résultats en direct des élections !</h2>
                    </div>
                    <h5>Totalisation des voix par ville et Annonce du candidat victorieux</h5>
                    <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="pourcentage">
                                <div>
                                    <div className="d-flex align-items-center me-2">
                                        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                            className="rounded-circle" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Koffi boris</p>
                                            <p className="text-muted mb-0">boris@gmail</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{marginBottom: -3}}>Nmbre Total de vote: <strong>4</strong></p>
                                        <small>Soit un pourcentage de 0.8</small>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center me-2">
                                        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                            className="rounded-circle" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Koffi boris</p>
                                            <p className="text-muted mb-0">boris@gmail</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{marginBottom: -3}}>Nmbre Total de vote: <strong>4</strong></p>
                                        <small>Soit un pourcentage de 0.8</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <h5>Découvrez le nombre de voix par ville</h5>
                    <div className="d-flex flex-wrap">
                        <div className="card">
                            <div className="card-body">
                                    <i className="icon fa-regular fa-calendar-check"></i>
                                    <h5 className="card-title"><strong>Ville: </strong>Abidjan</h5>
                                    <div className="pourcentage">
                                        <div>
                                            <div className="d-flex align-items-center me-2">
                                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                    className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Koffi boris</p>
                                                    <p className="text-muted mb-0">boris@gmail</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                                <small>Soit un pourcentage de 0.8</small>
                                            </div>
                                        </div>
                                        <div>
                                        <div className="d-flex align-items-center me-2">
                                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                className="rounded-circle" />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Koffi boris</p>
                                                <p className="text-muted mb-0">boris@gmail</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                            <small>Soit un pourcentage de 0.8</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                    <i className="icon fa-regular fa-calendar-check"></i>
                                    <h5 className="card-title"><strong>Ville: </strong>Bouaké</h5>
                                    <div className="pourcentage">
                                        <div>
                                            <div className="d-flex align-items-center me-2">
                                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                    className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Koffi boris</p>
                                                    <p className="text-muted mb-0">boris@gmail</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                                <small>Soit un pourcentage de 0.8</small>
                                            </div>
                                        </div>
                                        <div>
                                        <div className="d-flex align-items-center me-2">
                                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                className="rounded-circle" />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Koffi boris</p>
                                                <p className="text-muted mb-0">boris@gmail</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                            <small>Soit un pourcentage de 0.8</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                    <i className="icon fa-regular fa-calendar-check"></i>
                                    <h5 className="card-title"><strong>Ville: </strong>Yamoussoukro</h5>
                                    <div className="pourcentage">
                                        <div>
                                            <div className="d-flex align-items-center me-2">
                                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                    className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Koffi boris</p>
                                                    <p className="text-muted mb-0">boris@gmail</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                                <small>Soit un pourcentage de 0.8</small>
                                            </div>
                                        </div>
                                        <div>
                                        <div className="d-flex align-items-center me-2">
                                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{"width": 45, "height": 45}}
                                                className="rounded-circle" />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Koffi boris</p>
                                                <p className="text-muted mb-0">boris@gmail</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{marginBottom: -3}}>Nmbre de vote: <strong>4</strong></p>
                                            <small>Soit un pourcentage de 0.8</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}