import './App.css'
import Header from './modules/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './modules/Views/Index'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
