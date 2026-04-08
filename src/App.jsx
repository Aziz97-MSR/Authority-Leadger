
import './App.css'
import Fourth from './Components/Contact/Fourth'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import Second from './Components/Services/Second,'
import Third from './Components/Testomony/Third'

function App() {

  return (
    <main className='bg-[#F7F9FB]'>
      <Nav></Nav>
      <Home></Home>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Footer></Footer>
    </main>
  )
}

export default App
