import { useEffect } from 'react';

function Pdf() {
  useEffect(() => {
    fetch("http://localhost:3000/pdf", { method: "GET", credentials: "include" })
      .then((res) => res.json())
      .then((res) => {
        console.log("pdf generated");
      })
      .catch((error) => {
        console.error("Error fetching PDF:", error);
      });
  }, []);

  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green background
    border: 'none', // Remove border
    color: 'white', // White text
    padding: '15px 32px', // Some padding
    textAlign: 'center', // Centered text
    textDecoration: 'none', // Remove underline
    display: 'inline-block', // Inline-block
    fontSize: '16px', // Increase font size
    margin: '4px 2px', // Some margin
    cursor: 'pointer', // Pointer/hand icon on hover
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Add shadow
    transition: '0.3s', // Animation for hover effect
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#45a049'; // Darker green on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4CAF50'; // Original green
  };

  return (
    <> 
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <button
        onClick={() => window.location.href="/creating"}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Go Back
      </button>
      <button
        onClick={() => window.location.reload()}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        GET PDF ( Click it two times if it is not working or not getting correct pdf )
      </button> 
      </div>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe src="./output.pdf" width="100%" height="100%" allowFullScreen />
      </div>
    </>
  );
}

export default Pdf;
