import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/home/home';
import Stars from './components/stars';
import { motion, useMotionValue } from 'framer-motion'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const handleMovement = ({ screenX, screenY }) => {

    x.set(Math.ceil(screenX / 100))
    y.set(Math.ceil(screenY / 100))
  }
  return (
    <Router>
      <motion.div initial={{ opacity: 0.5 }} onPointerMove={handleMovement}
        animate={{ opacity: 1 }} className='root-el'>
        <Home />
        <Stars {...{ x, y }} />
      </motion.div>
    </Router>
  );
}

export default App;
