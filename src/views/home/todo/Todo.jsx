import React, { Component } from "react"

const boxStyle = {
  height: '24px',
  fontSize: '16px',
  backgroundColor: '#ddd',
}

class Todo extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { title } = this.props;
    return (
      <div style={{...this.props.style, ...boxStyle}}>
        {title}
      </div>
    )
  }
  fetchData() {
    
  }
  componentDidMount() {
    this.fetchData()
  }
}

export default Todo;