import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LogtoConfig, LogtoProvider} from "@logto/react";
import {Callback} from "./pages/Callback";
import {Home} from "./pages/Home";

const config: LogtoConfig = {
  endpoint: 'https://api.logto.preinpost.in/',
  appId: '2y7nreegr4s4t0k0imlwu',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Router>
      <LogtoProvider config={config}>
        <Routes>
          <Route path="/callback" element={<Callback/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<App/>}/>
        </Routes>
      </LogtoProvider>
    </Router>

  </StrictMode>,
)
