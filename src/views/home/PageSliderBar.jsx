import React, { Component } from "react"
import { Link } from "react-router-dom"

import TodoList from "./todo/TodoList";

const headerStyle = {
  width: '120px',
  height: '100%',
  backgroundColor: '#904',
}

class PageSliderBar extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div style={headerStyle}>
        <ul>
          <li>
            <Link to='/todos'>全部</Link>
          </li>
          <li>
            <Link to='/today'>今日</Link>
          </li>
        </ul>
      </div>
    );
  }

}
export default PageSliderBar