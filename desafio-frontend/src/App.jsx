import "./App.css"
import Passos from "./components/passos.jsx";
import MenuCustom from "./components/menu.jsx";
import ExampleCard from "./components/conteudo.jsx";
import MyForm from "./components/funcionario.jsx";




function App() {
  return <div className={'principal'} >
      <MenuCustom />
      <div>
          <Passos/>

          <div className={"d-flex flex-row mt-5"}>
              <ExampleCard />
              <MyForm/>
          </div>

      </div>
  </div>
}

export default App
