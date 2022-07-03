import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <h1>Esto es lo que dicen nuestros alumnos de freeCodecamp</h1>
        <Testimonio
          nombre="Daniel Vazquez"
          pais="Mexico"
          imagen="fanny"
          cargo="Ingneiero de Software"
          empresa="Microsoft"
          testimonio="La ingeniería de software es una carrera de informática lucrativa, fácil de manejar y muy solicitada. Pero lo que la hace realmente única es que los ingenieros de software dedican más tiempo a aprender que otras profesiones. Esta dependencia del aprendizaje elimina la barrera tradicional de las licenciaturas en informática y abre la puerta a la ingeniería de software autodidacta."
        />
        <Testimonio
          nombre="Estefanny de la Torre"
          pais="España"
          imagen="daniel"
          cargo="Ingeniera de Software"
          empresa="Microsoft"
          testimonio="La ingeniería de software es una carrera de informática lucrativa, fácil de manejar y muy solicitada. Pero lo que la hace realmente única es que los ingenieros de software dedican más tiempo a aprender que otras profesiones. Esta dependencia del aprendizaje elimina la barrera tradicional de las licenciaturas en informática y abre la puerta a la ingeniería de software autodidacta."
        />
      </div>
    </div>
  );
}

export default App;
