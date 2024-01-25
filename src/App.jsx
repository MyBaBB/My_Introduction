// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './components/Header'
import ContactButton from './components/ContactButton'
import TopSection from './components/TopSection'
import SecondSection from './components/SecondSection'
import CopyRight from './components/Copyright'
import ThirdSection from './components/ThirdSection'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='relative flex justify-center items-center w-screen h-full p-2 '>
      <div>
      <Header />  
      <ContactButton />
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
      <CopyRight />
      </div>
    </div>
  )
}

export default App
