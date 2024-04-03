import React from 'react'
import Header from './components/Header'
import Campus from './components/Campus'
import CollegeDetails from './components/CollegeDetails'
import { CustomProvider } from './components/contextApi';
import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <CustomProvider>
    <div >
      <Header/>
      <Campus/>
      <CollegeDetails/>
      <ToastContainer />
    </div>
    </CustomProvider>
  )
}
