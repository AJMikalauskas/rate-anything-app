//import styles from "./App.styles";

// Better way to Import CSS Styles?
import styles from "./App.module.css";
import RatedItemsList from "./components/RatedItemsList/RatedItemsList";

function App() {
  return (
    <div className={styles.app}>
      {/* Test */}
      <RatedItemsList/>
    </div>
  );
}

export default App;
