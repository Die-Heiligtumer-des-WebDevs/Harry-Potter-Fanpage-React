import { Outlet } from "react-router-dom";

//import Zauberschule from "./pages/zauberschule.jsx";

function App() {
  return (
    <>
         {/* <Header /> */}
      <main>
        {/* 
        
        HIER KOMMT ZAUBERHAUS REIN ALS START 
        LEITET DANN WEITER ZU HOMEPAGE mit /home
        
        Hüseyin: Kannst du dafür sorgen, dass die Zauberschule sofort verschwindet, sobald homepage angezeigt wird? mit display = "none"?

        */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
