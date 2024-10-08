import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
<<<<<<< HEAD
    axios
      .post("/api/auth/login", { email, password })
      .then((response) => {
        alert(response.data);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error Response:", error.response.data);
          alert("Login failed: " + error.response.data);
        } else if (error.request) {
          console.log("Error Request:", error.request);
          alert("Login failed: No response from server");
        } else {
          console.log("Error Message:", error.message);
          alert("Login failed: " + error.message);
        }
      });
  };
=======
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        alert(response.data);
        navigate('/home'); 
      })
      .catch(error => {
        if (error.response) {
          console.log('Error Response:', error.response.data);
          alert('Login failed: ' + error.response.data);
        } else if (error.request) {

          console.log('Error Request:', error.request);
          alert('Login failed: No response from server');
        } else {
          
          console.log('Error Message:', error.message);
          alert('Login failed: ' + error.message);
        }
      });
  };  
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
      zIndex: 1,
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    icon: {
      width: "30px",
      height: "30px",
      margin: "0 10px",
      cursor: "pointer",
    },
    signUpText: {
<<<<<<< HEAD
      color: "#4CAF50",
=======
      color: "#4a3929",
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source
          src="https://videos.pexels.com/video-files/4457089/4457089-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Box style={styles.container}>
        <Typography variant="h5">Login to Pet Care and Adoption</Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          fullWidth
          style={{
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
          }}
        >
          Login
        </Button>
        <Box style={styles.iconContainer}>
          <IconButton
            style={{ color: "#DB4437" }}
            onClick={() => alert("Login with Google")}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
<<<<<<< HEAD
            style={{ color: "#4CAF50" }}
=======
            style={{ color: "#4a3929" }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
            onClick={() => alert("Login with Microsoft")}
          >
            <MicrosoftIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} style={styles.signUpText}>
            SignUp!
          </span>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;
