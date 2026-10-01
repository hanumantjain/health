import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { DoctorsDirectory } from './pages/DoctorsDirectory';
import { HospitalsDirectory } from './pages/HospitalsDirectory';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { DataHandlingNotice } from './pages/DataHandlingNotice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doctors" element={<DoctorsDirectory />} />
          <Route path="hospitals" element={<HospitalsDirectory />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="data-handling-notice" element={<DataHandlingNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
