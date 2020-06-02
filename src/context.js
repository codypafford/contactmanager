import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  console.log(action.payload.id);
  switch (action.type) {
    case "DELETE_CONTACT":
      console.log(`action id is  + ${action.payload}`);
      return {
        //  ...state, //take the existing state
        contacts: state.contacts.filter(
          (contacts) => contacts.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      let newArray = state.contacts.slice(); // get the current contacts array
      newArray.push(action.payload); //push on the new contact
      return {
        //  ...state, //take the existing state...probably not needed though...
        contacts: newArray,
      };
    case "EDIT_CONTACT":
      //let editedArray = state.contacts.slice(); // get the current contacts array
      //  newArray.push(action.payload); //push on the new contact
      console.log(`action id is.....  + ${action.id}`);
      console.log(` the payload is .... + ${action.payload.name}`);
      console.log(state.contacts);

      return {
        //  ...state, //take the existing state...probably not needed though...
        contacts: state.contacts.map((contact) =>
          contact.id == action.id ? (contact = action.payload) : contact
        ),
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  // this is basically our global state dfdf

  state = {
    contacts: [],
    dispatch: (action) => {
      //  this.setState((state) => reducer(state, action));

      // another way to do the above arrow function
      const returned = reducer(this.state, action);
      this.setState(returned);
    },
  };

  async componentDidMount() {
    // set the state with the contacts
    // await is important
    const res = await axios.get("http://jsonplaceholder.typicode.com/users");

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
