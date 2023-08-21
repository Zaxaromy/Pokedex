const LoadingScreen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <img src="./slowpoke.png" alt="Loading image" className="loading-img" />
  </div>
);

export default LoadingScreen;
