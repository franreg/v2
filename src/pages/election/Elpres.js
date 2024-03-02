import { ReactDOM,useState } from "react";
import React from "react";
import './Elpres.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Elpres()
{
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <main class="">
            <section class="f">
            <div className="row fe">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <a href="#" onClick={handleShow}>
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Ajouter type élection</p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                                <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter type élection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="page-header min-vh-50 ">
                <div class="container">
                    <div class="row">
                    <div
                        class=" d-flex flex-column mx-lg-0 mx-auto"
                    >
                        <div class="card card-plain">
                        <div class="card-header pb-0 text-start">
                            
                            <p class="mb-0">Entrer l'intitule de du type de l'élection</p>
                        </div>
                        <div class="card-body">
                            <form >
                                <div class="mb-3">
                                    <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Election présidentielle"
                                    aria-label="intitule"
                                    required="required"
                                    />
                                </div>
                               
                                <div class="text-center">
                                    <button
                                    type="submit"
                                    class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                                    >
                                        Valider
                                    </button>
                                </div>
                            </form>
                        </div>
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
                
            </div>
            </section>
        </main>
    )
    ;
}