import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScroolToTop";
import Startseite from "./pages/Startseite/Startseite";

const MyMixx = lazy(() => import("./pages/Mymixx/MyMixx"));
const Essencial = lazy(() => import("./pages/Essencial/Essencial"));
const Targobank = lazy(() => import("./pages/Targobank/Targobank"));
const Caflex = lazy(() => import("./pages/Caflex/Caflex"));
const Praxis = lazy(() => import("./pages/Praxis/Praxis"));
const Mova = lazy(() => import("./pages/Mova/Mova"));
const Dabei = lazy(() => import("./pages/Dabei/Dabei"));
const Gleichklang = lazy(() => import("./pages/Gleichklang/Gleichklang"));

const Cv = lazy(() => import("./pages/Cv/Cv"));

function App() {

  return (
    <HashRouter>
      <ScrollToTop/>
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/MyMixx" element={<MyMixx />} />
        <Route path="/Essencial" element={<Essencial />} />
        <Route path="/Targobank" element={<Targobank />} />
        <Route path="/Praxis" element={<Praxis />} />
        <Route path="/Caflex" element={<Caflex />} />
        <Route path="/Mova" element={<Mova />} />
        <Route path="/Dabei" element={<Dabei />} />
        <Route path="/Gleichklang" element={<Gleichklang />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
