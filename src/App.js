import React from "react";
import TodoList from "./TodoList";

/*const Item1 ={
	id:Date.now(),
	text:"Item 1"
}
const Item2 ={
	id:Date.now(),
	text:"Item 2"
}
var itens =[Item1, Item2];
const root = ReactDom.createRoot(document.getElementyById('root'));
root.render(
	<TodoList itens={itens}</>
);*/


class App extends React.Component{
	constructor(props){
	  super(props);
		//add a propriedade itens que será o conj de onj e uma prop tbm chamada texto
		this.state = {
		  itens:[],
		  text:''
	  }
  }
	render(){
		return(
			<div>
				<h3>Tarefas</h3> 
				<TodoList itens={this.state.itens}/>
				< br/>
				<form onSubmit={this.handleSubmit}>
				  <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
					<button>Inserir</button>
				</form>
			</div>
		);
	}
  //o metodo change vai ser implementado para poder alterar a propriedade text conforme o usuario digitar
  handleChange=(e) =>{
    this.setState({text: e.target.value})
  }
  //usar o preventDefault p/ n exec o submit e interromper o processo de recarregar a pg
  //o if im0pede do usuario inserir itens null
  //criar constante que é o que o usuario digita no imput
  //altera o state concatenandoitens inserindo e limpa o conteudo na trext
  handleSubmit=(e) =>{
    //interrompe processo de regarregar a pg
    e.preventDefault();

    //impede que o usuario insira itens null
    if(!this.state.text.length)
    {
      return;
    }

    //cria o item com o conteudo digitado pelo usuario
    const item={
      id:Date.now(),
      text:this.state.text
    }
    //muda o estado do app concatenando o item com itens
    //limpa o text
    this.setState(state=>({
      itens:state.itens.concat(item),
      text:''
    }))

  }
}	
export default App;