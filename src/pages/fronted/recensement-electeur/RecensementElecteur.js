import React from "react";
import Navbar from "../../../layouts/fronted/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RecensementElecteur() {
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
    return (
        <div>
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Soyez la voix qui compte !</h1>
                        <p>
                            Participez aux prochaines élections en vous inscrivant sur la liste électorale.
                        </p>
                        <p>
                            C'est simple, rapide et sécurisé
                        </p>
                        <p>
                            <strong>En quelques clics seulement: </strong>
                        </p>
                        <ul>
                            <li>Renseignez vos informations personnelles.</li>
                            <li>Vérifiez votre adresse.</li>
                            <li>Soumettez votre demande.</li>
                        </ul>
                        <h3>Pourquoi s'inscrire ?</h3>
                        <ul>
                            <li>Voter est un droit et un devoir civique.</li>
                            <li>C'est votre chance de faire entendre votre voix et de choisir vos représentants.</li>
                            <li>Le recensement est obligatoire pour pouvoir voter.</li>
                        </ul>
                        <strong>Ne manquez pas l'occasion de participer à l'avenir de votre pays !</strong>
                    </div>
                    <div className="col-md-5">
                        <h4>Inscrivez-vous dès aujourd'hui !</h4>
                        <form>
                            <div className="row">
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
                                        <label htmlFor="" className="form-label">Date de naissance</label>
                                        <input type="date" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Nom</label>
                                        <input type="text" className="form-control" placeholder="koffi" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Prénom</label>
                                        <input type="text" className="form-control" placeholder="boris" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Nom</label>
                                        <input type="text" className="form-control" placeholder="koffi" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Prénom</label>
                                        <input type="text" className="form-control" placeholder="boris" />
                                    </div>
                                </div>
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
                            <button className="btn btn-primary">S'enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
