import "./App.css";
import DataContextProvider from "./context/DataContext";
import AppRouter from "./routing/AppRouter";

function App() {
  return (
    <DataContextProvider>
      <AppRouter />
    </DataContextProvider>
  );
}

export default App;
