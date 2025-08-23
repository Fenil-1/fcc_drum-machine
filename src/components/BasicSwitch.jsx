import * as React from 'react';
import Switch from '@mui/material/Switch';

const BasicSwitch = ({ isOn, setIsOn }) => {
  const handleChange = () => {
    setIsOn(!isOn);
  };

  return (
    <Switch
      checked={isOn}
      onChange={handleChange}
      sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#7873f5', // thumb color when ON
          '&:hover': {
            backgroundColor: 'rgba(120,115,245,0.1)', // light hover
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#7873f5', // track color when ON
        },
        '& .MuiSwitch-track': {
          backgroundColor: '#ccc', // track color when OFF
        },
      }}
    />
  );
};

export default BasicSwitch;
