import React from 'react'
import axios from 'axios'

export default class App extends React.Component {

  state = {
    name:"",
    breed:"",
    species:"",
    age:""
  }

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addAnimal = async () => {
    let res = await axios.post('http://localhost:8888/animals', {
      "name": this.state.name,
      "breed": this.state.breed,
      "species": this.state.species,
      "age": this.state.age
    })
    console.log(res.data);
  }
  

  render() {
    return (
      <div className="App">
        <div>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.updateFormField}/>
        </div>
        <div>
          <label>Breed</label>
          <input type="text" name="breed" value={this.state.breed} onChange={this.updateFormField}/>
        </div>
        <div>
          <label>Species</label>
          <input type="text" name="species" value={this.state.species} onChange={this.updateFormField}/>
        </div>
        <div>
          <label>Age</label>
          <input type="text" name="age" value={this.state.age} onChange={this.updateFormField}/>
        </div>
        <button onClick={this.addAnimal}>Submit</button>
      </div>
    );
  }

}

