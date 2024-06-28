import React, { Component } from 'react';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.feedback === '') {
      alert('El campo de feedback no puede estar vacío.');
    } else {
      // Aquí puedes manejar el envío del feedback (por ejemplo, enviarlo a una API o actualizar el estado de un componente padre)
      this.setState({ feedback: '' }); // Limpia el campo de feedback después de enviarlo
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.feedback}
          onChange={this.handleInputChange}
          placeholder="Redacta un feedback..."
          required
        />
        <button type="submit" style={{ float: 'right' }}>Enviar</button>
      </form>
    );
  }
}

export default FeedbackForm;