import React, { Component } from "react"

const boxStyle = {
  height: '24px',
  fontSize: '16px'
}

class Todo extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <div style={boxStyle}>
          {content}
        </div>
      </div>
    )
  }
}

export default Todo;