import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoList from "./components/AddTodoList";
import List from "./components/List";

class App extends Component {
    
    state = {
        listArray:[]
    }
    
    AddToList=(val)=>{
//        console.log('ADD TO THE LIST ' +val);
        let {listArray} = this.state;
        listArray.push(val);
        this.setState({listArray:listArray});
    }
    
    deleteFromList=(id)=>{
        console.log('>>>>>>>>>>> '+id)
        let {listArray}=this.state;
        listArray.splice(id, 1);
        this.setState({listArray:listArray});
//        {this.state.listArray.map(this.listSetup)}
    }
    
    listSetup=(vals,i)=>{
        return (
            <List key={i} value={vals} id={i} noteDelete={this.deleteFromList} />
        )
    }
    
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
            <h3>This is a React TODO list</h3>
            <AddTodoList addTo={this.AddToList}/>
            
          </div>
        {this.state.listArray.map(this.listSetup)}
      </div>
    );
  }
}

export default App;
