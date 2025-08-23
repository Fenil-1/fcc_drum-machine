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
        gap: 3,
        padding: 4,
        minHeight: '100vh',
        background: `linear-gradient(135deg, #0f0c29, #302b63, #24243e)`, // nebula gradient
        color: '#E0E0E0',
        fontFamily: `'Orbitron', sans-serif`,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          background: 'linear-gradient(90deg, #ff6ec4, #7873f5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          letterSpacing: 3,
          textShadow: '0 0 20px rgba(255,110,196,0.7), 0 0 30px rgba(120,115,245,0.7)',
        }}
      >
       DRUMS
      </Typography>

      {/* Drum Pads */}
      <Paper
        elevation={12}
        sx={{
          padding: 3,
          width: '100%',
          maxWidth: 650,
          borderRadius: '20px',
          background: 'linear-gradient(145deg, #1e1e2f, #2e2e4d)',
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow:
            '0 0 20px rgba(120,115,245,0.7), 0 0 40px rgba(255,110,196,0.5), inset 0 0 15px rgba(255,255,255,0.05)',
        }}
      >
        <PadBank volume={volume} isOn={isOn} />
      </Paper>

      {/* Controls */}
      <Paper
        elevation={12}
        sx={{
          padding: 3,
          width: '100%',
          maxWidth: 650,
          borderRadius: '20px',
          background: 'linear-gradient(145deg, #2b2b40, #1c1c2c)',
          border: '2px solid rgba(255,255,255,0.1)',
          boxShadow:
            '0 0 25px rgba(120,200,255,0.6), 0 0 50px rgba(120,200,255,0.3), inset 0 0 15px rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #78c8ff, #9d50bb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textShadow: '0 0 15px rgba(120,200,255,0.7), 0 0 25px rgba(157,80,187,0.7)',
          }}
        >
          CONTROL PANEL
        </Typography>

        <BasicSwitch isOn={isOn} setIsOn={setIsOn} />
        <Volume onVolumeChange={setVolume} />
      </Paper>
    </Box>
  );
};

export default Drum;
