import React from 'react'

//criar classe  que vai conter a propriedade segundos, que iniciara em 0
class Contador extends React.Component{
	constructor(props){
		super(props);
		this.state = {segundos:0}
	}
    render(){
        return(
            <div><p>Segundos:{this.state.segundos}</p></div>
        );
    }
    
    //metodo tick que addd um ao state segundos
    tick(){
        this.setState({segundos:this.state.segundos + 1})
    }
    
    //utilizar o ciclo de vida do react
    //pelo metodo componentDidMount para chamar o metodo tick a cada segundo
    
    componentDidMount(){
        this.interval =setInterval(()=>this.tick(),1000)
    }
    //BOAS PRATICAS
    //remover o intervalo quando o componente estiver prestes a ser desmontado
}
export default Contador;

//adicionar metodo render que vai conter is segundos
