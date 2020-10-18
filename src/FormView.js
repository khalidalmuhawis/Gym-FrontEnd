import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

class FormView extends Component {
  state = {
    name: "",
      openningtime: "",
      closingtime: "",
      image: "",
  };

  componentDidMount() {
    if (this.props.gym) {
      const { name, openningtime, closingtime, image } = this.props.gym;
      this.setState({ name, openningtime, closingtime, image });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGym = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/gyms/", this.state).then(() => {
      //this.props.resetState();
      this.props.toggle();
    });
  };

  editGym = e => {
    e.preventDefault();
    axios.put("http://127.0.0.1:8000/gyms/" + this.state.id, this.state).then(() => {
      //this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.gym ? this.editGym : this.createGym}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="openningtime">openning time:</Label>
          <Input
            type="text"
            name="openningtime"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.openningtime)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="closingtime">closing time:</Label>
          <Input
            type="text"
            name="closingtime"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.closingtime)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">image:</Label>
          <Input
            type="text"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default FormView;
/*
import $ from 'jquery';

import '../stylesheets/FormView.css';

class FormView extends Component {
  constructor(props){
    super();
    this.state = {
      name: "",
      openningtime: "",
      closingtime: 1,
      image: 1,
    }
  }

  componentDidMount(){
    $.ajax({
      url: `/categories`, //TODO: update request URL
      type: "GET",
      success: (result) => {
        this.setState({ categories: result.categories })
        return;
      },
      error: (error) => {
        alert('Unable to load categories. Please try your request again')
        return;
      }
    })
  }


  submitQuestion = (event) => {
    event.preventDefault();
    $.ajax({
      url: '/questions', //TODO: update request URL
      type: "POST",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        question: this.state.question,
        answer: this.state.answer,
        difficulty: this.state.difficulty,
        category: this.state.category
      }),
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: (result) => {
        document.getElementById("add-question-form").reset();
        return;
      },
      error: (error) => {
        alert('Unable to add question. Please try your request again')
        return;
      }
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div id="add-form">
        <h2>Add a New Trivia Question</h2>
        <form className="form-view" id="add-question-form" onSubmit={this.submitQuestion}>
          <label>
            Question
            <input type="text" name="question" onChange={this.handleChange}/>
          </label>
          <label>
            Answer
            <input type="text" name="answer" onChange={this.handleChange}/>
          </label>
          <label>
            Difficulty
            <select name="difficulty" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            Category
            <select name="category" onChange={this.handleChange}>
              {Object.keys(this.state.categories).map(id => {
                  return (
                    <option key={id} value={id}>{this.state.categories[id]}</option>
                  )
                })}
            </select>
          </label>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormView;
*/