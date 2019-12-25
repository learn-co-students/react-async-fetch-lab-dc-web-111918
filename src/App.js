// create your App component here
import React from 'react'

class App extends React.Component {
  state={
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(obj => {
      this.setState({
        astronauts: obj.people
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Astronauts:</h1>
        {this.state.astronauts.map((astronaut) => {
            return <ul>
                      <li key={astronaut.name}>
                        {astronaut.name}
                      </li>
                    </ul>
          })
        }
      </div>
    )
  }
}

export default App
