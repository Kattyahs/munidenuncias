import './App.css';
import { BrowserRouter, Navigate, Route, Routes,Switch } from 'react-router-dom';
import { useState } from 'react';


//importamos los comp creados
import Anuncio from './components/anuncio';
import HomeMuni from './components/home_muni';
import NavBarMuni from './layouts/navbar_muni';
import DenunciasMuni from './components/denunciasMuni';
import DenunciasDet from './components/denunciaDet';
import Denunciar from './components/denunciar';
import DenunciasVecino from './components/mis_denuncias';
import Home from './components/home';
import NavBarExample from './layouts/navbar_vec';





function App() {
  const [denuncias, setDenuncias] = useState([
    {tipo: 'Sin Revisar', num:3301, problematica:"Corte de luz", sector:"Recreo", direccion:"Arturo Pratt 320", fecha:'14 de noviembre', hora:'18:03', imagen: 'urlimagen'},
    {tipo: 'Sin Revisar', num:2001, problematica:"Pavimentación Calle", sector:"Centro de viña", direccion:"Alvarez con Traslaviña", fecha:'14 de octubre', hora:'18:03', imagen: 'urlimagen'},
    {tipo: 'En Proceso', num:2019, problematica:"Semáforo apagado", sector:"Centro de viña", direccion:"Alvarez con Traslaviña", fecha:'14 de octubre', hora:'18:03', imagen: 'urlimagen'},
    {tipo: 'En Proceso', num:1509, problematica:"Corte de Luz", sector:"Forestal", direccion:"Av. Blanca Vergara 1852", fecha:'14 de octubre', hora:'18:03', imagen: 'urlimagen'},
    {tipo: 'Terminada', num:1801, problematica:"Poste Caido", sector:"Miraflores", direccion:"Los Olmos 10", fecha:'2 de octubre', hora:'16:23', imagen: 'urlimagen'}
    
    ]);
    const [misdenuncias, setMisDenuncias] = useState([
      {estado: 'Sin Revisar', num:3301, problematica:"Corte de luz", descripcion: 'Se cortó la luz en toda la cuadra' ,sector:"Recreo", direccion:"Arturo Pratt 320", fecha:'14 de noviembre', hora:'18:03', imagen: 'urlimagen'},
    {estado: 'Terminada', num:2001, problematica:"Pavimentación Calle", descripcion:'Se necesita pavimentar la calle', sector:"Centro de viña", direccion:"Alvarez con Traslaviña", fecha:'14 de octubre', hora:'18:03', imagen: 'urlimagen'},
    {estado: 'En Proceso', num:2019, problematica:"Semáforo apagado", descripcion:'El semaforo no está funcionando puede generar accidente', sector:"Centro de viña", direccion:"Alvarez con Traslaviña", fecha:'14 de octubre', hora:'18:03', imagen: 'urlimagen'},
    ])
  
   
  
  return (
    <div className="App">







<BrowserRouter basename='/munidenuncias'>
<Routes>
  <Route path='vecino' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='denunciar' element={ <Denunciar /> } />
    <Route path='mis_denuncias' element={ <DenunciasVecino misdenuncias={misdenuncias} /> } />
    <Route path='*' element={ <Navigate replace to="/vecino"/> }/>
  </Route>


  <Route path='muni' element={ <NavBarMuni /> }>
    <Route index element={ <HomeMuni /> } />
    <Route path='anuncio' element={ <Anuncio/> } />
    <Route path= 'denuncia/:estado'>
      <Route index element={ <DenunciasMuni denuncias={denuncias} />} />
      <Route path=':num' element={<DenunciasDet denuncias = {denuncias} setDenuncias = {setDenuncias} />} />   
      <Route path='*' element={ <Navigate replace to="/"/> }/>
    </Route>
    <Route path='*' element={ <Navigate replace to="/muni"/> }/>
  </Route>
</Routes> 
</BrowserRouter>


    </div>
  );
}

export default App;
