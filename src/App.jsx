import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employee-card.jsx';
import Container from '@mui/material/Container';
import Data from './data/data.js';
import Button from '@mui/material/Button';

function App() {
  const [onLeave, setLeave] = useState(true)
console.log(onLeave);
  return (
    <Container fixed>
    <Button variant="contained" sx={{ marginRight: 2 }}>Active</Button>
    <Button variant="outlined">On Leave</Button>
      <MediaCard data={Data} />
    </Container>
  )
}

export default App
