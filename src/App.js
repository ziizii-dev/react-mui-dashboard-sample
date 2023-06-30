import React from 'react'
import SideNav from './components/SideNav'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Setting from './pages/Setting'
import Dashboard from './pages/Dashboard';
import Analytic from './pages/Analytic';
const App = () => {
  return (
    // <div>
    //   <SideNav/>
    // </div>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Dashboard/>}> </Route>
      <Route path="/home" exact element={<Home/>}> </Route>
      <Route path="/analytic" exact element={<Analytic/>}> </Route>
      <Route path="/product" exact element={<Product/>}> </Route>
      <Route path="/setting" exact element={<Setting/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App