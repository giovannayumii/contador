import React from "react";
//para gerar listas dinamicas
//add div metodo render uma lista, e os itens serão mapeadas de um array
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
            text: ''
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>

            </div>
        );
    }
}
export default TodoList;
