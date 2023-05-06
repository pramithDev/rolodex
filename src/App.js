import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users}
      },
      () => {
        console.log(this.state);
      }
      ));
  }

  onSearchChange = (event) => { 
    console.log(event.target.value); 
    const searchField = event.target.value.toLowerCase();

    this.setState( () => {
      return { searchField }
    })
  }

  render() {
    // console.log('render from AppJS');

    const { monsters, searchField  } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })
    
    return (
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search monsters' 
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} anything={['a', 'b']} />
      </div>
    )
  }
}

export default App;
