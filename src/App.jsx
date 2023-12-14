import { useState } from 'react'
import LandingPage from './LandingPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import InputUrl from './InputUrl'
import ResultPage from './ResultPage.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    
      <Header />
      
      <Routes>
      <Route path='/' element={<InputUrl/>} />
      <Route path="/result" element={<ResultPage/>} />
        
      </Routes>
      
    </BrowserRouter>





  )
}

export default App
