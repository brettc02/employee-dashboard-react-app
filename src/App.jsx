import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employee-card.jsx';
import Container from '@mui/material/Container';
import Data from './data/data.js';


function App() {
  const [count, setCount] = useState(0)
  console.log(Data);

  return (
    <Container Fixed>
<MediaCard />
    </Container>
  )
}

export default App
