import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		console.log('App.js componentDidMount()')
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }))
	}

	componentDidUpdate() {
		console.log('App.js componentDidUpdate()')
	}

	handleInput = (event) => {
		this.setState({
			searchField: event.target.value
		}, () => console.log(`searchField został ustawiony: ${this.state.searchField}`));
		console.log(`Wartosc w handleInput po lini wyzwalajacej setState: ${this.state.searchField}`)
	}

	render() {
		console.log(`App.js render()`);

		const { monsters, searchField } = this.state;
		let searchedMonster = monsters.filter(monster => (
			monster.name.toLowerCase().includes(searchField.toLowerCase())))
		console.log(searchedMonster);
		console.log('abcde'.includes(''));

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder='Search monster' handleChange={this.handleInput} />
				<CardList monsters={searchedMonster} />
			</div>
		);
	}
}

export default App;
