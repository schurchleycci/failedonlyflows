import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StartPage from './StartPage';
import LanguagePage1 from './LanguagePage1';
import LanguagePage2 from './LanguagePage2';
import LanguagePage3 from './LanguagePage3';
import LanguagePage4 from './LanguagePage4';
import TestRunnerCLIScriptPage from './TestRunnerCLIScriptPage'
import TestRunnerPage1 from './TestRunnerPage1'
import TestRunnerPage2 from './TestRunnerPage2'
import PkgManagerPage from './PkgManagerPage'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import TestCommandPage from './TestCommandPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    
    <Route index element={<StartPage />} />
          <Route path="instructions" element={<App />} />
          <Route path="language1" element={<LanguagePage1 />} />
          <Route path="language2" element={<LanguagePage2 />} />
          <Route path="language3" element={<LanguagePage3 />} />
          <Route path="language4" element={<LanguagePage4 />} />
          <Route path="testRunnerCLIScript" element={<TestRunnerCLIScriptPage />} />
          <Route path="testRunner1" element={<TestRunnerPage1 />} />
          <Route path="testRunner2" element={<TestRunnerPage2 />} />
          <Route path="pkgManager" element={<PkgManagerPage />} />
          <Route path="testCommand" element={<TestCommandPage />} />
          <Route path="start" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
