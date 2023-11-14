
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import MyWorks from './pages/My Works/MyWorks'
import Navbar from './pages/Navbar/Navbar'



import './App.css'

function App() {

  return (
    <section className='main'>
      <Navbar/>
      <Home/>
      <div className='border-outer'>
        <div className="border-inner">
          <About/>
          <MyWorks/>          
          <Contact/>
          <Footer/>
        </div>
      </div>
    </section>
  )
}

export default App
