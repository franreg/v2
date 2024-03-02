import React from "react";
import { Link } from 'react-router-dom'
import './Login.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
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
                            <form>
                                <div class="mb-3">
                                    <input
                                    type="email"
                                    class="form-control form-control-lg"
                                    placeholder="Email"
                                    aria-label="Email"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    type="email"
                                    class="form-control form-control-lg"
                                    placeholder="mot de passe"
                                    aria-label="Password"
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
                                    type="button"
                                    class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                                    >
                                        Connexion
                                    </button>
                                </div>
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
                            "Attention is the new currency"
                        </h4>
                        <p class="text-white position-relative">
                            The more effortless the writing looks, the more effort the
                            writer actually put into the process.
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