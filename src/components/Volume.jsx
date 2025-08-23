import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function VolumeSlider({ onVolumeChange }) {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onVolumeChange) {
      onVolumeChange(newValue / 100);
      console.log("new volume : ", newValue);
    }
  };

  return (
    <Box sx={{ width: 220 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <VolumeDown sx={{ color: "#888" }} />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
          sx={{
            color: "#7873f5", // single theme color (purple-blue)
            "& .MuiSlider-thumb": {
              width: 18,
              height: 18,
              backgroundColor: "#fff",
              border: "2px solid #7873f5",
            },
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: "#ccc",
            },
          }}
        />
        <VolumeUp sx={{ color: "#7873f5" }} />
        <div style={{ color:'#ffffff' , minWidth: "32px", textAlign: "center", fontWeight: "bold" }}>
          {value}
        </div>
      </Stack>
    </Box>
  );
}
