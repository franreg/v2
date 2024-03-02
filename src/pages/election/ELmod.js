import { ReactDOM,useState } from "react";
import React from "react";
import './Elpres.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Elmod()
{
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <main class="">
            <section class="f mou">
            <div className="row">
                <div class="container">
                    <h1 class="text-center">Création d'une élection</h1>
                    <div class="row">
                    <div
                        class=" d-flex flex-column mx-lg-0 mx-auto"
                    >
                        <div class="card card-plain">
                      
                        <div class="card-body">
                            <form >
                            <div class="card-header pb-0 text-start">
                            
                                 <p class="text-center">Campagne</p>
                             </div>
                                <div class="row">
                                <div class="col-md-6">
                                    
                                    <input
                                    type="date"
                                    class="form-control form-control-lg"
                                    placeholder="Date de début"
                                    aria-label="date_debut_c"
                                    required="required"
                                    />
                                    
                                </div>  
                                <div class="col-md-6">
                                    <input
                                    type="dagte"
                                    class="form-control form-control-lg"
                                    placeholder="Date de fin"
                                    aria-label="date_fin_c"
                                    required="required"
                                    />
                                </div>
                                </div>
                                <div class="card-header pb-0 text-start pu">
                            
                                 <p class="text-center">Scrutin</p>
                             </div>
                                <div class="row">
                                <div class="col-md-6">
                                    
                                    <input
                                    type="date"
                                    class="form-control form-control-lg"
                                    placeholder="Date de début"
                                    aria-label="date_debut_s"
                                    required="required"
                                    /> 
                                </div>
                                <div class="col-md-6">
                                    <input
                                    type="date"
                                    class="form-control form-control-lg"
                                    placeholder="Date de fin"
                                    aria-label="date_de_fin"
                                    required="required"
                                    />
                                </div>
                                </div>
                                
                                <div class="card-header pb-0 text-start pu">
                            
                            <p class="text-center ">Enrolement</p>
                        </div>
                           <div class="row">
                           <div class="col-md-6">
                               
                               <input
                               type="date"
                               class="form-control form-control-lg"
                               placeholder="Date de debut"
                               aria-label="date_de_debut_e"
                               required="required"
                               />
                               
                           </div>
                           <div class="col-md-6">
                               <input
                               type="date"
                               class="form-control form-control-lg"
                               placeholder="Date de fin"
                               aria-label="date_de_fin_e"
                               required="required"
                               />
                           </div>
                           </div>

                                <div class="text-center">
                                    <button
                                    type="submit"
                                    class="btn btn-lg btn-primary btn-lg  mt-4 mb-0"
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </form>
                        </div>
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
            
            </section>
        </main>
    )
    ;
}