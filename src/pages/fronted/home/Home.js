import React from "react";
import './Home.css'
import Navbar from "../../../layouts/fronted/navbar/Navbar";
import { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
        setShow(true);
        }, /* 1 * 60 * 1000 */1 * 60 * 1000); // 1 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />
            <Modal show={show} onHide={() => setShow(false)} className="modal_bg">
                <Modal.Header closeButton>
                    <Modal.Title className="text-white">Election presentielle</Modal.Title>
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
                    <button className="btn btn-primary" onClick={() => navigate("/poser-votre-candidature")}>Poser votre candidacture</button>
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