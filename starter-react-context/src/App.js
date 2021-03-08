import "./App.css";
import Main from "./main/Main";

const initialData = {
  nombre: "Jose",
  apellido: "Rivera",
};

function App() {
  const [info, setInfo] = useState(initialData);

  return (
    <DataContext.Provider value={[info, setInfo]}>
      <Main />
    </DataContext.Provider>
  );
}

export default App;
