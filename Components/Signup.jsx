// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
// import MicrosoftIcon from "@mui/icons-material/Microsoft";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/users", {
//         name,
//         email,
//         phone,
//         password,
//       });

//       if (response.status === 201) {
//         localStorage.setItem(
//           "userDetails",
//           JSON.stringify({ name, email, phone, password })
//         );
//         navigate("/settings");
//       }
//     } catch (error) {
//       console.error("There was an error signing up!", error);
//     }
//   };

//   const styles = {
//     page: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       textAlign: "center",
//       position: "relative",
//       overflow: "hidden",
//     },
//     video: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       zIndex: -1,
//     },
//     container: {
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       padding: "20px",
//       borderRadius: "8px",
//       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//       width: "300px",
//       zIndex: 1,
//     },
//     iconContainer: {
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "20px",
//     },
//     icon: {
//       width: "30px",
//       height: "30px",
//       margin: "0 10px",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <video autoPlay muted loop style={styles.video}>
//         <source
//           src="https://videos.pexels.com/video-files/10211383/10211383-uhd_2732_1440_30fps.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//       <Box style={styles.container}>
//         <Typography variant="h5">Sign Up for Pet Care and Adoption</Typography>
//         <TextField
//           label="Name"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Phone Number"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSignup}
//           fullWidth
//           style={{ marginTop: "20px", backgroundColor: "#4CAF50" }}
//         >
//           Sign Up
//         </Button>
//         <Box style={styles.iconContainer}>
//           <IconButton
//             style={{ color: "#DB4437" }}
//             onClick={() => alert("Sign up with Google")}
//           >
//             <GoogleIcon />
//           </IconButton>
//           <IconButton
//             style={{ color: "#4CAF50" }}
//             onClick={() => alert("Sign up with Microsoft")}
//           >
//             <MicrosoftIcon />
//           </IconButton>
//         </Box>
//         <Typography variant="body2" style={{ marginTop: "20px" }}>
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             style={{ color: "#4CAF50", cursor: "pointer" }}
//           >
//             Login here
//           </span>
//         </Typography>
//       </Box>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users", {
        name,
        email,
        phone,
        password,
      });

      if (response.status === 201) {
<<<<<<< HEAD
        alert("Signed up successfully!");
      } else {
        alert(`Signup failed with status: ${response.status}`);
=======
        localStorage.setItem("userDetails", JSON.stringify({ name, email, phone, password }));
        navigate("/settings");
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
      }
    } catch (error) {
      console.error("There was an error signing up!", error);
      alert("Signup failed. Please check the console for details.");
    }
  };

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
  };

  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source
          src="https://www.pexels.com/video/hummingbirds-drinking-on-water-feeder-4414504/"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Box style={styles.container}>
        <Typography variant="h5">Sign Up for Pet Care and Adoption</Typography>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
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
          label="Phone Number"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          color="primary"
          onClick={handleSignup}
          fullWidth
          style={{ marginTop: "20px", backgroundColor: "#059212" }}
        >
          Sign Up
        </Button>
        <Box style={styles.iconContainer}>
          <IconButton
            style={{ color: "#DB4437" }}
            onClick={() => alert("Sign up with Google")}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
<<<<<<< HEAD
            style={{ color: "#059212" }}
=======
            style={{ color: "#4a3929" }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
            onClick={() => alert("Sign up with Microsoft")}
          >
            <MicrosoftIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
<<<<<<< HEAD
            style={{ color: "#059212", cursor: "pointer" }}
=======
            style={{ color: "#4a3929", cursor: "pointer" }}
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
          >
            Login here
          </span>
        </Typography>
      </Box>
    </div>
  );
}

export default Signup;
