import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
