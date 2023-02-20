import "./App.scss";
import Card from "./Components/Card";
import { InputContextProvider } from "./Context/InputContext";
function App() {
  return (
    <div className="wrapper">
      <InputContextProvider>
        <Card></Card>
      </InputContextProvider>
    </div>
  );
}

export default App;
