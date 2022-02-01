import "./App.css";
import Gentelman from "./componentes/Gentelan/Gentelman";
import Info from "./componentes/Info/Info";

function App() {
  let gentelman = Info();
  console.log(gentelman);

  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <p className="info">0 gentlemen pointing at you</p>
          <button className="button button--select">Select all</button>
        </section>
        <main className="main">
          <ul className="gentlemen">
            <Gentelman {...gentelman}></Gentelman>
            <Gentelman {...gentelman}></Gentelman>
            <Gentelman {...gentelman}></Gentelman>
            <Gentelman {...gentelman}></Gentelman>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
