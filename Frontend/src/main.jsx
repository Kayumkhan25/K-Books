import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="bg-white text-slate-900 dark:bg-[#000814] dark:text-white">
        <App />
      </div>
    </AuthProvider>
    <Toaster
      toastOptions={{
        // Define default options
        className: '',
        duration: 4000,
      }}/>
  </BrowserRouter>
)
