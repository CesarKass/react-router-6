import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error404 } from "./pages/Error404";
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ServicesHome } from './pages/ServicesHome';
import { ServicesList } from './pages/ServicesList';
import { ServicesPolitic } from './pages/ServicesPolitic';
import { Services } from './pages/Services';
import { Service } from './pages/Service';

function App() {

  const [productsArr, setProducts] = useState([
    {id: 1, name: "P - 1", price: 10.50},
    {id: 2, name: "P - 2", price: 20.50},
    {id: 3, name: "P - 3", price: 30.50},
    {id: 4, name: "P - 4", price: 40.50},
    {id: 5, name: "P - 5", price: 50.50}
  ]);
  const [ServoceArr, setService] = useState([
      {id: 1, name: "S - 1", price: 100.50},
      {id: 2, name: "S - 2", price: 200.50},
      {id: 3, name: "S - 3", price: 300.50},
      {id: 4, name: "S - 4", price: 400.50},
      {id: 5, name: "S - 5", price: 500.50}
  ]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/redirigir' element={<Navigate to="/about" />} />
          <Route path='/products' element={<Products productsArr={productsArr}/>} />
          <Route path='/products/:id' element={<Product productsArr={productsArr}/>} />
          <Route path='*' element={<Error404 />} /> 
          <Route path='/services' element={<Services />}>
            <Route index element={<ServicesHome/>}/>
            <Route path='list' element={<ServicesList ServoceArr={ServoceArr}/>}/>
            <Route path='politic' element={<ServicesPolitic />}/>
            <Route path=':id' element={
              <>
              <ServicesList ServoceArr={ServoceArr}/>
              <Service ServoceArr={ServoceArr}/>
              </>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
