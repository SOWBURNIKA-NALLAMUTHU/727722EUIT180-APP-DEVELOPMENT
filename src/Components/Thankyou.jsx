import React from "react";

const Thankyou = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Thank You!</h2>
      <p style={styles.paragraph}>
        Your form has been successfully submitted. We will get back to you soon.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
<<<<<<< HEAD
    justifyContent: "center", 
    height: "100vh",
=======
    justifyContent: "center",
    height: "100vh", 
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    boxSizing: "border-box",
<<<<<<< HEAD
    backgroundImage:
      'url("https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg")',
    backgroundSize: "contain", // Ensures the image is clear and not distorted
    backgroundPosition: "center", // Centers the background image
=======
    backgroundImage: 'url("https://www.livinghouse.ca/shared/media/blog/46/image-1683906941.jpg")', // URL of the background image
    backgroundSize: "cover", 
    backgroundPosition: "center", 
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    backgroundRepeat: "no-repeat",
  },
  heading: {
    color: "black",
    marginBottom: "20px",
    fontSize: "36px",
  },
  paragraph: {
    color: "black",
<<<<<<< HEAD
    fontSize: "24px",
=======
    fontSize: "24px", 
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
  },
};

export default Thankyou;
