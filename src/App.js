import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Exchange from './pages/Exchange';
import LaunchPad from './pages/LaunchPad';
import SecurityAudit from './pages/SecurityAudit';
import MarketMaker from './pages/MarketMaker';
import Aggregator from './pages/Aggregator';
import Kols from './pages/Kols';
import Press from './pages/Press';
import Accelerator from './pages/Accelerator';
import { exchangeData, dexData, launchpads, securityFirms, marketMakingFirms, kols, pressRelease, aggregator } from './store';
import DetailsPage from './pages/DetailsPage';
import Grant from './pages/Grant';

function App() {
  return (
    <BrowserRouter>
      {/* Outer div for maximum width */}
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        {/* Main content area with max width and centered */}
        <div className="w-full max-w-[1440px] mx-auto px-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home exchangeData={exchangeData} />} />
            <Route path="/exchange" element={<Exchange exchangeData={exchangeData} dexData={dexData} />} />
            <Route path="/launchpad" element={<LaunchPad launchpads={launchpads} />} />
            <Route path="/securityaudit" element={<SecurityAudit securityFirms={securityFirms} />} />
            <Route path="/marketmaker" element={<MarketMaker marketMakingFirms={marketMakingFirms} />} />
            <Route path="/indexer" element={<Aggregator aggregator={aggregator} />} />
            <Route path="/kols" element={<Kols kols={kols} />} />
            <Route path="/pressrelease" element={<Press pressRelease={pressRelease} />} />
            <Route path="/accelerator" element={<Accelerator />} />
            <Route path="/grant" element={<Grant />} />
            <Route path="/:type/:name" element={<DetailsPage />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
