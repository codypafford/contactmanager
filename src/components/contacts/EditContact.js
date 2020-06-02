import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import { v4 as uuid } from "uuid";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    //name of the param must match the name of the param that was passed into the URL
    const { id } = this.props.match.params;

    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
    console.log(res);
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // prevent from going to another page
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;

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

    const editedContact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };

    dispatch({ type: "EDIT_CONTACT", id: id, payload: editedContact });

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
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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

export default EditContact;
