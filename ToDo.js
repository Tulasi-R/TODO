import React, { Component } from "react"
import Output from './output'
import './todo.css'

class Input extends Component {
    constructor() {
        super();

        this.state = {
            data: '',
            todoList: [],
            edit: false
        };
    }

    handleOnChange = e => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: String(value)
        });
        console.log(value, name)
    }


    handleResult = e => {
        const item = {
            id: Date.now(),
            name: this.state.data
        }
        const todoList = [...this.state.todoList, item]
        this.setState({
            todoList: todoList,
            data: ''

        });
        console.log(todoList)
    }

    delete = (id) => {
        // alert(id);
        const filteredData = this.state.todoList.filter(i => i.id !== id);
        this.setState({
            todoList: filteredData
        })
    }

    edit = (id) => {
        const selected = this.state.todoList.find(item => item.id === id);
        const name = selected.name;
        this.setState({
            edit: true,
            selectedItem: id,
            data: name
        })
    }

    editValue = () => {
        const changedValue = this.state.todoList.map(item => {
            if (item.id === this.state.selectedItem) {
                item.name = this.state.data
            }
            return item
        });

        this.setState({
            todoList: changedValue,
            data: '',
            edit: false
        })
    }

    render() {
        return (
            <div>
                <div className="in-field">
                    <input onChange={this.handleOnChange} name="data" type="text" value={this.state.data} />
                    <button onClick={this.handleResult}
                        style={{
                            display: this.state.edit ? 'none' : 'block',backgroundColor:'silver'
                        }}
                    >add</button>
                    <button onClick={this.editValue}
                        style={{
                            display: this.state.edit ? 'block' : 'none',backgroundColor:'chartreuse'
                        }}
                    >Edit</button>

                </div> 
                <div className="table-content">
                    <Output datavalue={this.state.todoList} delete={this.delete} edit={this.edit}></Output>
                </div>
            </div>
        );
    }
}

export default Input;