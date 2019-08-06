import React, { Component } from 'react'
import { Button } from 'antd'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  componentWillUpdate(){
    let timer;
    // if(!timer) return
    clearInterval(timer)
    timer = setInterval(() => {
      this.handlClick()
    }, 1000);
  }

  handlClick = e => { 

    this.setState({
      num: this.state.num + 1
    })
  }

  render() {
    return (
      <div>
        test lhh
        <Button type="primary" onClick={this.handlClick} >+++</Button>
        <Button type="danger" onClick={this.handlClick} >+++</Button>
        <p>{this.state.num}</p>

      </div>
    )
  }
}
