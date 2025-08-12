import PadBank from './PadBank';
import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Volume from './Volume';
import BasicSwitch from './BasicSwitch';

const Drum = () => {
  const [isOn, setIsOn] = useState(false);
  const [volume, setVolume] = useState(0.3);
  return (
    <Box
      id="drum-machine"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: 4,
        bgcolor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Drum Machine
      </Typography>

      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
        <PadBank volume={volume} isOn={isOn}/>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
        <BasicSwitch isOn={isOn} setIsOn={setIsOn} />  
        <Volume onVolumeChange={setVolume} />
      </Paper>
    </Box>
  );
};

export default Drum;
