import React, { PureComponent, Component } from "react";
import logo from './logo.svg';
import './App.css';
import Employee from './Components/UI/employee/Employee'
import axios from 'axios';


class App extends Component {

  state = {
    renderItem:2,
    employee: [],
  }
  constructor(props) {
    super(props);
   
  }
  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
    var url = "http://dummy.restapiexample.com/api/v1/employees"
    // get data and deep copy to set state
    axios.get(url)
            .then(response => {
               response.data.data.map((data, index) => {
                this.setState({
                  employee: [...this.state.employee, data],
                })
               })

            console.log(this.state.employee)
            })
            .catch(err => {
              console.log(err)
            });

  }

  render() {

    
    return (
      <div>
    <Employee
       employees = {this.state.employee}/>
      <br/>
       <Employee
       employees = {this.state.employee}/>
      </div>
      
    )

  }
}


export default App;
