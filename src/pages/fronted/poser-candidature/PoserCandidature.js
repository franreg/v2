import React from "react";
import { useState } from "react";
import './PaserCandidature.css'
import { useEffect } from "react";
import axios from "axios";

const ProgressBar = ({ activeStep }) => {
    const steps = ['Informations générales', 'Informations sur la candidature', 'Expérience et qualifications', 'Terminer'];
  
    return (
      <ul id="progressbar" className="mt-6">
        {steps.map((step, index) => (
          <li key={index} className={index + 1 === activeStep ? 'active' : ''}>
            <strong>{step}</strong>
          </li>
        ))}
      </ul>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
            setCountries(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);

        const selectedCountryData = countries.find(country => country.country === selectedCountry);
        if (selectedCountryData) {
        setCities(selectedCountryData.cities);
        } else {
        setCities([]);
        }
    };

    const renderStep = () => {
        switch (step) {
        case 1:
            return (
            <fieldset>
                <div className="container">
                <div className="d-flex">
                    <div className="col-md-10">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Nom </label>
                                    <input type="text" className="form-control" placeholder="ecole" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Prenom </label>
                                    <input type="text" className="form-control" placeholder="ecole" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Sexe</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>----</option>
                                        <option value="maxulin">Maxulin</option>
                                        <option value="feminin">Féminin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Photo de profil</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Adresse Email</label>
                                    <input type="text" className="form-control" placeholder="Abidjan" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Mot de passe</label>
                                    <input type="text" className="form-control" placeholder="07-07-07-07" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Pays</label>
                                    <select id="countrySelect" onChange={handleCountryChange} className="form-control">
                                        <option value="">Sélectionner un pays</option>
                                        {countries.map(country => (
                                            <option key={country.country} value={country.country}>{country.country}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {selectedCountry && (
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="citySelect">Choisir une ville:</label>
                                        <select id="citySelect" className="form-control">
                                            <option value="">Sélectionner une ville</option>
                                            {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-flex ">
                    <div className="col-md-8">
                    <button type="button" className="next action-button" onClick={nextStep}>
                        Continuer
                    </button>
                    </div>
                </div>
                </div>
            </fieldset>
            );

        case 2:
            return (
            <fieldset>
                <div className="container">
                <div className="d-flex">
                    <div className="col-md-10">
                        <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Parti politique</label>
                                        <input type="text" className="form-control" placeholder="M.koffi" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Durée de résidence dans la circonscription</label>
                                        <input type="number" className="form-control" placeholder="123" />
                                    </div>
                                </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label htmlFor="">Objectifs et Motivation(de la candidature)</label>
                                    <textarea name="" className="form-control" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="d-flex">
                    <div className="col-md-8">
                    <button type="button" className="previous action-button-previous" onClick={prevStep}>
                        Revenir
                    </button>
                    <button type="button" className="next action-button" onClick={nextStep}>
                        Continuer
                    </button>
                    </div>
                </div>
            </fieldset>
            );

        case 3:
            return (
            <fieldset>
                <div className="container">
                <div className="d-flex">
                    <div className="col-md-10">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="formFile" className="form-label">Expérience politique antérieure</label>
                                <input className="form-control" type="text" id="formFile" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Expérience professionnelle pertinente </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-md-8">
                    <button type="button" className="previous action-button-previous" onClick={prevStep}>
                        Revenir
                    </button>
                    <button type="button" className="next action-button" /* onClick={nextStep} */>
                        Soumettre
                    </button>
                    </div>
                </div>
                </div>
            </fieldset>
            );

            case 4:
                return (
                <fieldset>
                    <div className="form-card">
                    <h2 className="fs-title text-center">Success !</h2>
                    </div>
                </fieldset>
                );

        default:
            return null;
        }
    };


    return(
        <div className="main-content">
            <div className="row">
                <div className="col-2">
                    <div className="bg-color"></div>
                </div>
                <div className="col-10">
                    <h3 className="text-center mt-4 titre mb-3">Formulaire pour poser votre candidature</h3>
                    <ProgressBar activeStep={step} />
                    <form id="msform">{renderStep()}</form>
                </div>
            </div>
        </div>
    )
}