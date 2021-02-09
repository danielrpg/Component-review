import './App.css';
import { Component } from 'react';
import ComponentA from './componentA';
import ComponentB from './componentB';

class App extends Component {
  constructor() {
    super()
    this.state = {
      flag: true
  }

   // this.handleChange = this.handleChange.bind(this);
   // this.useConditionalRendering = this.useConditionalRendering.bind(this);
  }

  useConditionalRendering = (flag) => {
    if(flag) 
      return <ComponentA />
    return <ComponentB />
  }

  handleChange = (newFlag) => {
    console.log('Changing');
    this.setState({ flag: newFlag})
  }

  render() {
      // const conditionalRendering = 
      //         this.state.flag 
      //         ? <ComponentA /> 
      //         : <ComponentB /> 

      return (
        <div className="App">
          {/* { this.useConditionalRendering(this.state.flag) } */}
          { this.state.flag ?  <ComponentA /> : <ComponentB /> }
          <button onClick={() => this.handleChange(!this.state.flag)}> 
            Change Component
          </button>
        </div>
      )
    };
}

export default App;
