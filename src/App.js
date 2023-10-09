
import './App.css';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Layout from './Components/Layout/Layout';
import Website from './Pages/Website';


function App() {
 
const queryClient = new QueryClient()




return (
 
  <QueryClientProvider client={queryClient}>
  <Router> 
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
              <Route element={<Layout />}>
                <Route path="/library" element={<Website />} />
              </Route>
    </Routes>
    </React.Suspense>
  </Router>
  <ToastContainer />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>

)





}

export default App;
