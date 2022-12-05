import "./App.css";
//import QuoteCard from "./components/QuoteCard";
//import {QUOTES} from "./QUOTES"

import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteCardList from "./components/QuoteCardList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuote from "./components/AddQuote";

function App() {
  return (
    <div>
      {/* <QuoteCard/> */}
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuoteCardList/>}></Route>
        <Route path="addquote" element={<AddQuote/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
