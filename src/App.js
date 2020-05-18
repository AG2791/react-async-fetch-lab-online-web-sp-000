// create your App component here

class App extends component {
  state = {
    peepleInSpace: = []
  }
  
  render() {
    <div>
    {this.state.peopleInSpace.map((person, id) => <h1 key ={id}>{person.name}<h1)>
  }
}