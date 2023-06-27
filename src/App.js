import React from 'react'
import SideNav from './components/SideNav'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
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
      <Route path="/about" exact element={<About/>}> </Route>
      <Route path="/setting" exact element={<Setting/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App