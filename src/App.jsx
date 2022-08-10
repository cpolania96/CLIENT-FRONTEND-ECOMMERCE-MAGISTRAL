import './App.css'
import Header from './modules/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './modules/Views/Index'
import Footer from './modules/Footer/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Index />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
