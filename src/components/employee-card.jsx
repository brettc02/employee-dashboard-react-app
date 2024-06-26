import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({ data }) {
  /* console.log(data); */
  return (
    <>
      {data.map((item, index) => (
        <Card sx={{ maxWidth: 345, padding: 2, marginTop: 2}}>
      <Box>
      <CardMedia
        sx={{ height: 240, width: 240, backgroundSize: "contain", margin: "auto"}}
        image={`/employee-dashboard-react-app/${item.image}`}
        title="profile image"
      />
      </Box>
      
      <CardContent>
      <PetsIcon />
        <Typography gutterBottom variant="h5" component="div">
          {item.firstName} {item.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department: UX/UI Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: UI Designer
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: "center", direction: "row", flexWrap: "wrap"}}>
     {item.skills.map((skill, skillIndex) => (
      <Chip key={skillIndex} label={skill} style={{ marginTop: "10px"}}/>  
      ))}
    </Stack>
      </CardContent>
      <Stack direction="row" spacing={1} sx={{justifyContent: "center"}}>
      <Chip 
      label={item.onLeave ? "Inactive" : "Active"} 
      variant={item.onLeave ? "outlined" : ""}
      />
      <Chip label={`Hours: ${item.hoursLoggedThisWeek}`} variant="outlined" />
    </Stack>
    </Card>


      ))}
    </>
  );
}