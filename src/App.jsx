import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employee-card.jsx';
import Container from '@mui/material/Container';
import Data from './data/data.js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(false)
console.log(showOnLeave);

const filteredData = showOnLeave ? Data.filter((employee) => employee.onLeave) : Data;

const toggleOnLeave = (event) => { if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true)};

  return (
    <Container fixed>
      <Box>
       <Typography variant="h4" component="h1"gutterBottom>
        Employee Dashboard
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center">
      <FormGroup>
      <FormControlLabel control={<Switch default onChange={toggleOnLeave}/>} label="On Leave" />
    </FormGroup>
    </Stack>
      <MediaCard data={filteredData} />
      </Box>
    </Container>
  )
}

export default App
