import React from 'react'
import './App.css'
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {

        const {monsters, searchField} = this.state

        const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))

        // const valueToPass = this.state.monsters

        const handleSearchString = (e) => {
            this.setState({searchField: e.target.value}, () => console.log(this.state))
        }

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox placeholder={'Search monters'} handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App

