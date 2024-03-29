import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header.jsx";
import Update from "./components/Update.jsx";
import Post from "./components/Post.jsx";
import SpotLight from "./components/SpotLight.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
  <div className=" bg-white w-full overflow-hidden ">
    <div className={`boxWidth pt-2 pl-2`}>
      <Navbar />
    </div>
    <Hero />
    <Header />
    <Update />
    <Post />
    <SpotLight />
    <GetStarted />
    <Footer />
  </div>
);

export default App;
library.add(fab, fas, far);
