import {useEffect, useState} from 'react'
import "./App.css"
import CustomSteps from "./components/passos.jsx";
import MenuCustom from "./components/menu.jsx";
import ExampleCard from "./components/conteudo.jsx";
import MyCheckboxFormGroup from "./components/funcionario.jsx";
import MyForm from "./components/funcionario.jsx";




function App() {
    const [pessoa, setPessoa] = useState();

    useEffect(() => {
        setPessoa({
            nome: 'Eduardo Sobreira',
            idade: 29
        })
    }, []);


  return <div className={'principal'} >
      <MenuCustom />
      <div>
          {pessoa?.nome}
          <CustomSteps/>
          <MyForm/>
          <ExampleCard />
      </div>
  </div>
}

export default App
