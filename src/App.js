import React from 'react'
let URL =  'http://api.open-notify.org/astros.json'
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      space: []
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        space: data.people
      })

    })
  }

  render(){
    return(
      <div>{this.state.space.map((person,index)=>{
        return <h2 key={index}> {person.name}</h2>
      })}</div>
    )
  }
}
