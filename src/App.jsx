import { Outlet } from "react-router-dom";

//import Zauberschule from "./pages/zauberschule.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* 
        
        HIER KOMMT ZAUBERHAUS REIN ALS START 
        LEITET DANN WEITER ZU HOMEPAGE mit /home
        
        Hüseyin: Kannst du dafür sorgen, dass die Zauberschule sofort verschwindet, sobald homepage angezeigt wird? mit display = "none"?

        */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
