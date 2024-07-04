// src/js/component/feedbackform.js
import React, { Component } from "react";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      email: "",
      message: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { feedback, email } = this.state;

    if (feedback === "" || email === "") {
      alert("Todos los campos son obligatorios.");
    } else {
      try {
        const response = await fetch("http://localhost:3001/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback, email }),
        });

        if (response.ok) {
          this.setState({ feedback: "", email: "", message: "Feedback enviado con éxito!" });
        } else {
          this.setState({ message: "Error al enviar el feedback." });
        }
      } catch (error) {
        this.setState({ message: "Error al enviar el feedback." });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <textarea
          name="feedback"
          value={this.state.feedback}
          onChange={this.handleInputChange}
          placeholder="Redacta un feedback..."
          required
          style={{ height: "100px" }}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Introduce tu email..."
          required
        />
        <button type="submit" style={{ width: "90px" }}>Enviar</button>
        {this.state.message && <p>{this.state.message}</p>}
      </form>
    );
  }
}

export default FeedbackForm;