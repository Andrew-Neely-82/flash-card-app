import { Menu, Title, Topics } from "./components/export";
import "./App.scss";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Title />
      <main>
        <Menu />
        <Topics />
        <div className="card-container">
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
