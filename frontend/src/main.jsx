import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import App from './App.jsx'
import './styles/app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme
      appearance="light"
      accentColor="green"
      grayColor="sage"
      radius="large"
      scaling="100%"
    >
      <App />
    </Theme>
  </StrictMode>,
)
