import React, { Component } from "react"

class CheckIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          names: [],
          loading: true
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ name: event.target.value });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        this.setState({
          loading: true,
        })
        await fetch('http://localhost:5000/test/' + this.state.name, {
          method: 'POST'
        });
        // this.getNames()
      }
    
    
      getNames() {
        fetch('/getnames/')
          .then(response => response.json())
          .then(json => {
            this.setState({
              name: '',
              names: json,
              loading: false
            })
          })
      }
    
      componentDidMount() {
        this.getNames();
      }
    
      render() {
        return (
          <div className="App">
            <header className="App-header">
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name="newName"
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        placeholder="New Name"
                        autoFocus
                        autoComplete='off'
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
            </header>
          </div>
        );
      }
}
export default CheckIn;