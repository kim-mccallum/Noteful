import React from 'react'

class BrokenComponent extends React.Component {

  state = {
    string: "Broken Component"
  }

  breakComponent = () => {
    this.setState({
      string: 12345.00
    })
  }

  render() {
    return (
      <p className="page">
        {this.state.string.toUpperCase()}
        <br/>
        <br/>
        <button onClick={this.breakComponent}>Break this Component</button>
      </p>
    );
  }

}

export default BrokenComponent