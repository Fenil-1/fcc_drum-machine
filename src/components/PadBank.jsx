import { useEffect, useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";

const Heater_1 = "/audio/Heater_1.mp3";
const Heater_2 = "/audio/Heater_2.mp3";
const Heater_3 = "/audio/Heater_3.mp3";
const Heater_4 = "/audio/Heater_4.mp3";
const clap = "/audio/clap.mp3";
const Open_HH = "/audio/Open_HH.mp3";
const Kicks = "/audio/Kick.mp3";
const Kick_n_Hat = "/audio/Kick_n_Hat.mp3";
const Closed_HH = "/audio/Closed_HH.mp3";

const PadBank = ({ volume, isOn }) => {
  const [show, setShow] = useState("");
  const [activePad, setActivePad] = useState(null);

  const pads = [
    { key: "Q", name: "Heater_1", src: Heater_1 },
    { key: "W", name: "Heater_2", src: Heater_2 },
    { key: "E", name: "Heater_3", src: Heater_3 },
    { key: "A", name: "Heater_4", src: Heater_4 },
    { key: "S", name: "Clap", src: clap },
    { key: "D", name: "Open_HH", src: Open_HH },
    { key: "Z", name: "Kick N Hat", src: Kick_n_Hat },
    { key: "X", name: "Kicks", src: Kicks },
    { key: "C", name: "Closed_HH", src: Closed_HH },
  ];

  const playSound = (key, naam) => {
    if (isOn) {
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play();
        setShow(naam);
        setActivePad(key);
        setTimeout(() => setActivePad(null), 200); // reset highlight after press
      }
    }
  };

  useEffect(() => {
    const handlekey = (e) => {
      const key = e.key.toUpperCase();
      const pad = pads.find((p) => p.key === key);
      if (pad) playSound(key, pad.name);
    };

    window.addEventListener("keydown", handlekey);
    return () => window.removeEventListener("keydown", handlekey);
  }, [volume, isOn]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center" id="pad-bank">
        {pads.map(({ key, src, name }) => (
          <Grid item xs={4} key={key}>
            <Button
              id={src}
              className="drum-pad"
              variant="contained"
              fullWidth
              onClick={() => playSound(key, name)}
              sx={{
                height: 90,
                fontSize: 22,
                fontWeight: "bold",
                borderRadius: "16px",
                transition: "all 0.2s ease-in-out",
                background:
                  activePad === key
                    ? "linear-gradient(145deg, #ff6ec4, #7873f5)"
                    : "linear-gradient(145deg, #1e1e2f, #2e2e4d)",
                boxShadow:
                  activePad === key
                    ? "0 0 25px #ff6ec4, 0 0 45px #7873f5"
                    : "0 0 12px rgba(255,255,255,0.1)",
                "&:hover": {
                  background: "linear-gradient(145deg, #2b2b40, #1c1c2c)",
                  boxShadow: "0 0 25px #78c8ff, 0 0 45px #9d50bb",
                },
              }}
            >
              {key}
              <audio className="clip" id={key} src={src}></audio>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={6}
        sx={{
          mt: 4,
          p: 2,
          borderRadius: "12px",
          background: "linear-gradient(145deg, #2b2b40, #1c1c2c)",
          color: "#E0E0E0",
          boxShadow: "0 0 20px rgba(120,200,255,0.4)",
        }}
      >
        <Typography variant="h6" id="display">
          {isOn
            ? show || "Press a key or click a button"
            : "⚡ Power on the machine"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PadBank;
