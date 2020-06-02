import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import { v4 as uuid } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // prevent from going to another page
    const { name, email, phone } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone,
    };

    // try {
    //   axios
    //     .post("http://jsonplaceholder.typicode.com/users", newContact) // post will return the newly created contact as an object. access with .data
    //     .then((res) => dispatch({ type: "ADD_CONTACT", payload: res.data }));
    // } catch (e) {
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    // }

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    // redirect to another part of the application
    this.props.history.push("/");
  };

  onChange = (inputName, e) => this.setState({ [inputName]: e.target.value });

  testChange = () => {
    //  console.log(e.target.value);
    console.log("hhhhh");
    //  console.log(this.state);
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={(e) => this.onSubmit(dispatch, e)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={(e) => this.onChange("name", e)}
                    error={errors.name}
                  ></TextInputGroup>

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange.bind(this, "email")}
                    error={errors.email}
                  ></TextInputGroup>

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange.bind(this, "phone")}
                    error={errors.phone}
                  ></TextInputGroup>

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                  <input type="text" onChange={this.testChange}></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
