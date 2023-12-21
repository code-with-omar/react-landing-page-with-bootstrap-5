import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Rating from './components/Rating/Rating.jsx';
import FitnessGoal from './components/FitnessGoal/FitnessGoal.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Rating></Rating>
      <FitnessGoal></FitnessGoal>
      <Footer></Footer>
    </>
  )
}

export default App
