import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "component/Header";
import Footer from "component/Footer";
import MainContent from "component/MainContent";
import SearchContent from "component/SearchContent";
import requests from "assets/js/request";

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchContent fetchSearch={requests.fetchSearch} />
      <MainContent fetchUrl={requests.fetchBreeds} />
      <Footer />
    </div>
  );
}

export default App;
