import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Lists from './components/Lists'
import Button from './components/Button'
import TextInput from './components/TextInput'
import './styles/App.css';
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

class App extends Component {
  state = {
    items: [],
    title: ''
  }

  componentDidMount() {
    axios.get(`${url}/todos`)
      .then( result => {
        // console.log(result)
        // console.log(result.data)
        this.setState({ items: result.data })
      })
      .catch( err => {
        console.log(err)  // log the error
      })
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({ title: value })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    
    const newItem = {
      title: this.state.title,
      completed: false,
      userId: 1
    }

    if (newItem.title !== '') {
      axios.post(`${url}/todos`,  newItem )
      .then( res => {
        // console.log(res)
        // console.log(res.data)
        const items = [...this.state.items, res.data]
        this.setState({
          items: items,
          title: ''
        })
      })
      .catch( err => {
        console.log(err) // log the error
      })  
    }

  }

  handleDeleteItem = id => {
    const del_url = `${url}/todos/${id}`
    axios.delete(del_url)
      .then( res => {
        this.setState(previosState => {
          console.log(previosState,'previosState')
          return {
            items: previosState.items.filter( i => i.id !== id)
          }
        })
        // console.log(res)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)  // log the error
      })
  }

  render() {
    const { items, title } = this.state
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
                value={title}
                onChange={this.handleChange}
              />
              <Button name="Submit" />
          </form>
          {items && 
            <Lists data={items} deleteItem={this.handleDeleteItem} />
          }
        <Footer />
      </div>
    );
  }
}

export default App;
