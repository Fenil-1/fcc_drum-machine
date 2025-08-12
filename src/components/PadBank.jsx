import { useEffect, useState } from "react";
const Heater_1 = "/audio/Heater_1.mp3";
const Heater_2 = "/audio/Heater_2.mp3";
const Heater_3 = "/audio/Heater_3.mp3";
const Heater_4 = "/audio/Heater_4.mp3";
const clap = "/audio/clap.mp3";
const Open_HH = "/audio/Open_HH.mp3";
const Kicks = "/audio/Kick.mp3";
const Kick_n_Hat = "/audio/Kick_n_Hat.mp3";
const Closed_HH = "/audio/Closed_HH.mp3";

import { Box, Button, Typography, Grid, Paper } from "@mui/material";

const PadBank = ({ volume, isOn }) => {
  const [show, setShow] = useState("");

  const playSound = (key,naam) => {
    if (isOn) {
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play();
        setShow(naam);
      }
    }
  };

  useEffect(() => {
    console.log("padbank : ", volume);
    const handlekey = (e) => {
      const key = e.key.toUpperCase();
      const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      if (validKeys.includes(key)) {
        const pad = pads.find((p) => p.key === key);
        if (pad) {
          playSound(key, pad.name);
        }
      }
    };

    window.addEventListener("keydown", handlekey);
    return () => {
      window.removeEventListener("keydown", handlekey);
    };
  }, [volume, isOn]);

  const pads = [
    { key: "Q", name:'Heater_1' , src: Heater_1 },
    { key: "W", name:'Heater_2' , src: Heater_2 },
    { key: "E", name:'Heater_3' , src: Heater_3 },
    { key: "A", name:'Heater_4' , src: Heater_4 },
    { key: "S", name:'Clap' , src: clap },
    { key: "D", name:'Open_HH' , src: Open_HH },
    { key: "Z", name:'Kick N Hat' , src: Kick_n_Hat },
    { key: "X", name:'Kicks' , src: Kicks },
    { key: "C", name:'Closed_HH' , src: Closed_HH },
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center" id="pad-bank">
        {pads.map(({ key, src ,name}) => (
          <Grid item xs={4} key={key}>
            <Button
              id={src}
              className="drum-pad"
              variant="contained"
              fullWidth
              sx={{ height: 80, fontSize: 20 }}
              onClick={() => playSound(key,name)}
            >
              {key}
            <audio className="clip" id={key} src={src}></audio>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Typography variant="h6" id="display">
          {isOn
            ? show || "Press a key or click a button"
            : "Power on the machine"}
          {/* {show || 'Press a key or click a button'} */}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PadBank;
