import React, { Component } from "react"
import Todo from './Todo'
import axios from "axios"


const listStyle = {
  // border: '1px solid #f04',
  borderRadius: '4px',
  // width: '400px',
  height: '100%',
  backgroundColor: '#fff'
}

const itemStyle = {
  margin: '4px 0',
}

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.getAllTodes()
  }

  getAllTodes() {
    axios.get('/api/v1/todos')
      .then(res => {
        const list = res.data
        this.setState({ list })
      })
  }

  render() {
    const items = this.state.list.map(item => 
      <Todo
        style={ itemStyle }
        key={item.id}
        title={item.title}
      ></Todo>
    )

    return (
      <div style={ listStyle } >
        {items}
      </div>
    )
  }
}

export default TodoList