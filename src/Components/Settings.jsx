import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import "./styles.css"; 
=======
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa

const Settings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
    
=======
    // Retrieve user details from localStorage
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handleLogout = () => {
<<<<<<< HEAD
    
    localStorage.removeItem("userDetails");

    
=======
    localStorage.removeItem("userDetails");

>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    navigate("/login");
  };

  const handleSave = () => {
<<<<<<< HEAD
    
=======
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    navigate("/");
  };

  return (
    <div className="settings-container">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: 500, margin: "0 auto" }}
      >
        <TextField
          label="Name"
          value={userDetails.name}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }} 
        />
        <TextField
          label="Email"
          value={userDetails.email}
          variant="outlined"
          fullWidth
          margin="normal"
<<<<<<< HEAD
          InputProps={{ readOnly: true }} 
=======
          InputProps={{ readOnly: true }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
        />
        <TextField
          label="Phone Number"
          value={userDetails.phone}
          variant="outlined"
          fullWidth
          margin="normal"
<<<<<<< HEAD
          InputProps={{ readOnly: true }} 
=======
          InputProps={{ readOnly: true }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
        />
        <TextField
          label="Password"
          type="password"
          value={userDetails.password}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }} 
        />
        <div className="password-options">
          <Button variant="text" color="primary">
            Forgot Password
          </Button>
          <Button variant="text" color="primary">
            Reset using Email
          </Button>
        </div>
        <Button
          variant="contained"
<<<<<<< HEAD
          onClick={handleSave}
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#43a047", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388e3c", 
            },
          }}
=======
          color="secondary"
          onClick={handleSave}
          fullWidth
          sx={{ marginTop: 2 }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
        >
          Save
        </Button>
        <Button
          variant="contained"
<<<<<<< HEAD
          onClick={handleLogout}
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#43a047", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388e3c", 
            },
          }}
=======
          color="secondary"
          onClick={handleLogout}
          fullWidth
          sx={{ marginTop: 2 }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default Settings;
