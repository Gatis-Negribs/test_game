import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Generate" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('app'));