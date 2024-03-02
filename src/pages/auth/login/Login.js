import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Login.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut de l'envoi du formulaire
    
        // Envoyer les données du formulaire où vous en avez besoin, par exemple, à un serveur backend
        console.log('Password:', password);
        console.log('Email:', email);
        if (email === "admin@gmail.com" && password === "admin") {
            // Connexion réussie
            setMessage("Bienvenue !");
            setLoggedIn(true);
            alert("Bienvenue !");
          } else {
            // Connexion échouée
            setMessage("La connexion a échoué. Veuillez vérifier vos identifiants.");
            setLoggedIn(false);
          }    
      };
    return (
        <div>
            <main class="main-content mt-0">
            <section>
                <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row">
                    <div
                        class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"
                    >
                        <div class="card card-plain">
                        <div class="card-header pb-0 text-start">
                            <h4 class="font-weight-bolder">Connexion</h4>
                            <p class="mb-0">Entrer votre email et votre mot de passe pour la connexion</p>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <input
                                    type="email"
                                    class="form-control form-control-lg"
                                    placeholder="Email"
                                    aria-label="Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required="required"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    type="password"
                                    class="form-control form-control-lg"
                                    placeholder="mot de passe"
                                    aria-label="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required = "required"
                                    />
                                </div>
                                <div class="form-check form-switch">
                                    <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                    />
                                    <label class="form-check-label" for="rememberMe"
                                    >Se souvenir de moi</label
                                    >
                                </div>
                                <div class="text-center">
                                    <button
                                    type="submit"
                                    class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                                    >
                                        Connexion
                                    </button>
                                </div>
                                <p className={`mb-0 ${message ? 'err' : ''}`}>{message}</p>
                            </form>
                        </div>
                       
                        </div>
                    </div>
                    <div
                        class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
                    >
                        <div
                        class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden baground-cover"
                        >
                        <span class="mask bg-gradient-primary opacity-6"></span>
                        <h4 class="mt-5 text-white font-weight-bolder position-relative">
                            Chers responsables de la gestion des élections,
                        </h4>
                        <p class="text-white position-relative">
                        En tant que gardiens de l'intégrité et de la transparence de notre processus électoral, nous jouons un rôle essentiel dans le bon déroulement des élections. Notre travail a un impact direct sur la confiance que la population accorde à notre système démocratique.
                        Soyons attentifs aux préoccupations et aux besoins de tous les acteurs impliqués dans le processus électoral, en favorisant le dialogue et la coopération. Travaillons ensemble pour surmonter les défis et garantir l'intégrité de nos élections.
                        </p>
                        <p class="text-white position-relative">
                            Nous sommes heureux de notre dévouement et notre engagement envers la démocratie. Votre travail a un impact significatif sur l'avenir de notre nation.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </main>
        </div>
    )
}