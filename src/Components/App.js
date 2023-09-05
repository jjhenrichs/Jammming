import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";

function App() {
  return (
    <div className={styles.container}>
      <h1>Jammming</h1>
      <p>`${process.env.REACT_APP_CLIENT_ID}`</p>
      <SearchBar />
      <div>
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
