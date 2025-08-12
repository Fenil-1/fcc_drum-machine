import * as React from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BasicSwitch = ({isOn,setIsOn}) => {
  const handleChange = () => {
    setIsOn(!isOn);
  }

  return (

      <div>
        {/* {isOn ? `<div>ON</div>` : `<div>OFF</div>`} */}
        <Switch {...label} onChange={handleChange}/>
      </div>
    );
}

export default BasicSwitch