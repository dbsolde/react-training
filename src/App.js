import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Lists from './components/Lists'
import Button from './components/Button'
import TextInput from './components/TextInput'
import './styles/App.css';

const data = [
  {
    "id": 1,
    "name": "Go Shopping"
  },
  {
    "id": 2,
    "name": "Call the telephone Company"
  },
  {
    "id": 3,
    "name": "Call mother"
  },
  {
    "id": 4,
    "name": "learn react.js"
  },
  {
    "id": 5,
    "name": "get some eggs"
  },
]

class App extends Component {
  state = {
    items: data,
    currentItem: { id: 0, name: '' }
  }

  handleChange = e => {
    const value = e.target.value
    const currentItem = { id: Date.now(), name: value }
    this.setState({ currentItem })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { id: 0, name: ''}
      })
    }
    // console.log('added item', this.state.currentItem)
  }

  handleDeleteItem = id => {
    const filteredItems = this.state.items.filter( item => {
      return item.id !== id
    })
    this.setState({
      items: filteredItems
    })
    // console.log('deleted ID: ',id)
  }

  render() {
    const { items, currentItem } = this.state
    return (
      <div className="App">
        <Header />
          <div className="countTask">
            <p>TASKS</p>
            <span>My list ({items.length})</span>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
              <p>ADD TODO</p>
              <TextInput 
                value={currentItem.name}
                onChange={this.handleChange}
              />
              <Button name="Submit" />
          </form>
          <Lists data={items} deleteItem={this.handleDeleteItem} />
        <Footer />
      </div>
    );
  }
}

export default App;
