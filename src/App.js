import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Master from './layouts/admin/Master/Master';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/admin.connexion/collection-electorale" element={<Login />} />
          <Route path='/admin.dashboard/collection-electorale' element={<Master />}>
            <Route path='' element={<Dashboard />} />
          </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
