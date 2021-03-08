import "./App.css";
import DataContextProvider from "./context/DataContext";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <DataContextProvider>
      <AppRoutes />
    </DataContextProvider>
  );
}

export default App;
