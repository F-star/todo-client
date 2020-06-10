import React, { Component } from "react"

const boxStyle = {
  height: '24px',
  fontSize: '16px',
  backgroundColor: '#ddd',
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
  fetchData() {
    fetch('https://api.douban.com/v2/movie/imdb/tt0111161?apikey=0df993c66c0c636e29ecbb5344252a4a')
      .then(res => {
        console.log(res)
      })
      .catch(err => (
        console.log(err)
      ))
  }
  componentDidMount() {
    this.fetchData()
  }
}

export default Todo;