
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from "./components/Banner/Banner";
import Developers from "./components/Developers/Developers";
import Features from "./components/Features/Features";

import Header from "./components/global/Header/Header";
import NFTMinting from "./components/NFTMinting/NFTMinting";
import Dapps from "./components/Dapps/Dapps";
import Gaming from "./components/Gaming/Gaming";
import Bitcoin from "./components/Bitcoin/Bitcoin";
import Miner from "./components/Miner/Miner";
import BuildPowerful from "./components/BuildPowerful/BuildPowerful";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/global/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Features/>
      <NFTMinting/>
      <Developers/>
      <Dapps/>
      <Gaming/>
      <Bitcoin/>
      <Miner/>
      <BuildPowerful/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
