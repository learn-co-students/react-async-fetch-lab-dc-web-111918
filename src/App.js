import React, {Component} from 'react'

class App extends Component {
    state = {
        people: []
    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(res => res.json())
        .then(data => {
            debugger
            this.setState({people: data.people})
        })
    }

    render(){
        return (
        <div>
            {this.state.people.map((person, index) => <div key={index}>{person.name}</div>)}
        </div>
        )
    }
}

export default App