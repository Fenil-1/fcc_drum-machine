import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function VolumeSlider({ onVolumeChange }) {
  const [value, setValue] = React.useState(30); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onVolumeChange) {
      onVolumeChange(newValue / 100);
      console.log("new volume : ", value);
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
        />
        <VolumeUp />
        <div>{value}</div>
      </Stack>  
    </Box>
  );
}
