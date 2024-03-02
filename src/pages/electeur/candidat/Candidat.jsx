import React from "react";
import Navbar from "../../../layouts/electeur/navbar/Navbar";

export default function Candidat() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4 vote-candidat">
                <div className="row">
                    <div className="col-md-9">
                        <div class="row justify-content-center mb-2">
                            <div class="col-md-6 col-lg-7 justify-content-start col-sm-12">
                                <h2 className="title">A propos du candidat</h2>
                                <h4>Koffi boris</h4>
                                <p style={{fontSize: 'italic'}}>
                                    <strong>Parti politique: RHDP</strong>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, odit rem ab tenetur deserunt laborum voluptate consequuntur provident atque? Assumenda cumque inventore velit numquam. Beatae alias modi natus perspiciatis quo!
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-5 justify-content-start col-sm-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <p>Nombre de vote actuel: <strong>1</strong></p>
                                <button className="btn btn-primary btn-voter">Voter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}