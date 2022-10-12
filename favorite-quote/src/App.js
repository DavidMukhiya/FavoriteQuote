import "./App.css";
//import QuoteCard from "./components/QuoteCard";
//import {QUOTES} from "./QUOTES"
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteCardList from "./components/QuoteCardList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <QuoteCard/> */}
      <Header/>
      <QuoteCardList/>
      <Footer/>
    </div>
  );
}

export default App;
