import "./App.css";
//import QuoteCard from "./components/QuoteCard";
//import {QUOTES} from "./QUOTES"

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuote from "./components/AddQuote";
import ListQuoteComponent from "./components/ListQuoteComponent";

function App() {
  return (
    <div>
      {/* <QuoteCard/> */}
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<ListQuoteComponent/>}></Route>
        <Route path="addquote" element={<AddQuote/>}></Route>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
