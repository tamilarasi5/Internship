import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Arts from './Components/Arts'
import Internship from './Components/Internship'
import ArtsDrawingForm from './Components/Arts'
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import About from './Components/about'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="" element={<Header/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Arts" element={<ArtsDrawingForm/>}/>
    <Route path="/Internship" element={<Internship/>}/>
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
