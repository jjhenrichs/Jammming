import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";

function App() {
  return (
    <div className={styles.container}>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      {/* <p>`${process.env.REACT_APP_CLIENT_ID}`</p> */}
      <SearchBar />
      <div className={styles.dataContainer}>
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
