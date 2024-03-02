import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Master from './layouts/admin/Master/Master';
import Home from './pages/fronted/home/Home';
import PoserCandidature from './pages/fronted/poser-candidature/PoserCandidature';
import Geogimes from './pages/fronted/geogimes/Geogimes';
import RecensementElecteur from './pages/fronted/recensement-electeur/RecensementElecteur';
import ResultatPublie from './pages/fronted/resultat-publie/ResultatPublie';
import ElecteurAccueil from './pages/electeur/electeurAccueil/ElecteurAccueil';
import Candidat from './pages/electeur/candidat/Candidat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Home />} />
          <Route path='/gemonies' element={<Geogimes />} />
          <Route path='/poser-votre-candidature' element={<PoserCandidature />} />
          <Route path='/recensement-electeur' element={<RecensementElecteur />} />
          <Route path='/resultat-publie' element={<ResultatPublie />} />
          <Route path='/electeur/home' element={<ElecteurAccueil />} />
          <Route path='/electeur/:id/candidat' element={<Candidat />} />
          <Route path="/admin.connexion/collection-electorale" element={<Login />} />
          <Route path='/admin.dashboard/collection-electorale' element={<Master />}>
            <Route path='' element={<Dashboard />} />
          </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
