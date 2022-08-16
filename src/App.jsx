import './App.css'
import Header from './modules/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './modules/Views/Index'
import Footer from './modules/Footer/Footer'
import { AppContext } from './Context/AppContext'
import { useContext } from 'react'

function App() {
  const { clicked } = useContext(AppContext) || {}

  console.log(clicked);
  const setOverflowHidden = () => {
    if(clicked) {
      return 'menu-open'
    }
  }
  let isClicked = setOverflowHidden()
  return (

    <div className={`App ${isClicked}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Index />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
