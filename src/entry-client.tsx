import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-700.css'
import '@fontsource/fraunces/latin-600.css'
import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
