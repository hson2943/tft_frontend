import React from "react";
import styles from './app.module.css'
import HomePage from "./pages/homePage/HomePage";
function App() {
  return (
    <div className={styles.app}>
      <HomePage />
    </div>
  );
}

export default App;
