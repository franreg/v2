import React from "react";
import './Home.css'
import Navbar from "../../../layouts/fronted/navbar/Navbar";
import { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import VT1 from '../../../assets/vit1.jpg'
import VT2 from '../../../assets/vit2.jpg'
import VT3 from '../../../assets/vt3.png'
import VT4 from '../../../assets/vt4.jpg'
import VT5 from '../../../assets/vit5.jpg'


export default function Home() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(true);
        }, /* 1 * 60 * 1000 */1 * 60 * 1000); // 1 minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Unis dans la diversité, ensemble pour une démocratie pacifique.</h1>
                        <p>
                        En cette période cruciale d'élections, il est essentiel de maintenir un environnement calme et paisible. Les élections sont une occasion importante pour exprimer notre voix et participer au processus démocratique de notre pays.
                        </p>
                        <p>
                        Soyons des exemples de civisme et de respect, même dans nos désaccords. Encourageons un débat démocratique respectueux et évitons toute forme de violence, d'intimidation ou de discours de haine.
                        </p>
                        <p>
                        Rappelons-nous que notre unité en tant que nation est plus forte que nos différences. En restant calmes et respectueux les uns envers les autres, nous contribuons à la préservation de notre démocratie et au bien-être de notre société.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={VT2} className="d-block w-100" alt="First slide" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} className="modal_bg">
                <Modal.Header closeButton>
                    <Modal.Title className="text-white">Election présidentielle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Le pays se prépare pour une nouvelle élection présidentielle qui aura lieu le [date de l'élection]. Cette élection est une occasion importante pour les citoyens de choisir leur prochain dirigeant et de définir l'avenir du pays.
                    </p>
                    <strong>Qualifications requises pour les candidats</strong>
                    <span>Pour être éligible à la présidence, les candidats doivent :</span>
                    <ul>
                        <li>Être un citoyen du pays</li>
                        <li>Ne pas avoir été condamné pour un crime grave</li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => navigate("/poser-votre-candidature")}>Poser votre candidature</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Annuler
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
