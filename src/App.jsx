import "./App.css"
import Passos from "./components/passos.jsx";
import MenuCustom from "./components/menu.jsx";
import ExampleCard from "./components/conteudo.jsx";
import MyForm from "./components/funcionario.jsx";
import Formulario from "./components/funcionario.jsx";
import CadastroFuncionario from "./components/cadastro-de-funcionario.jsx";




function App() {
  return <div className={'principal'} >
      <MenuCustom />
      <div className={'container'}>
          <Passos/>

          <div className={"d-flex flex-row mt-5 conteudo-principal"}>
              <ExampleCard />
              <Formulario/>
              <CadastroFuncionario />
          </div>
      </div>
  </div>
}

/*<Switch>
                        <Route path="/">
                            <CadastroFuncionario/>
                        </Route>
                        <Route path="/formulario">
                            <Formulario/>
                        </Route>
                    </Switch>*/

export default App
