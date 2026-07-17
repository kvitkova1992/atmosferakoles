/* cache-bust-2025-06-28-v2 */
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BitrixWidget from "./components/BitrixWidget";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import UslugiPage from "./pages/UslugiPage";
import PartneramPage from "./pages/PartneramPage";
import PrivacyPage from "./pages/PrivacyPage";
import PricePage from "./pages/PricePage";
import { useState } from "react";

/* v2025-06-27-cache-bust-1 */
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/portfolio" element={<PortfolioPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/uslugi" element={<UslugiPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/partneram" element={<PartneramPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/price" element={<PricePage onOpenModal={() => setModalOpen(true)} />} />
        </Routes>
        <Footer />
        <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
        <ScrollToTopButton />
        <BitrixWidget onOpenModal={() => setModalOpen(true)} />
      </div>
    </HashRouter>
  );
}

export default App;
/* force rebuild 1782380956 */
/* rebuild 1782381372 */
