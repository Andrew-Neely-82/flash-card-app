import { Menu, Title } from "./components/export";
import "./App.scss";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Title />
      <main>
        <Menu />
        <Card />
      </main>
    </>
  );
}

export default App;
