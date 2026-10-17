import { Navigate, Route, Routes } from 'react-router'
import { BrasaDeleteAccount } from './pages/BrasaDeleteAccount'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/brasa/delete-account" element={<BrasaDeleteAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
