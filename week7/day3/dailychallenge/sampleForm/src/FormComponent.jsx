import React from 'react'

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsAllergy: false,
      lactoseFree: false,
      vegan: false
    };
  }

  handleChange(event) {
    const { name, type, checked, value } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  const { firstName, lastName, age, gender, destination, nutsAllergy, lactoseFree, vegan } = this.state;
  window.location.href = `?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&nutsAllergy=${nutsAllergy}&lactoseFree=${lactoseFree}&vegan=${vegan}`;
  }

  render() {
    return (
      <>
        <div>
          <h2>Sample form</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => this.handleChange(e)}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => this.handleChange(e)}
          /> Female
          <label><b>Select your destination</b></label>
          <select
            name="destination"
            onChange={(e) => this.handleChange(e)}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
          </select>
          <label><b>Dietary restrictions:</b></label>
          <br />
          <input
            type="checkbox"
            name="nutsAllergy"
            onChange={(e) => this.handleChange(e)}
          /> Nuts free
          <br />
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={(e) => this.handleChange(e)}
          /> Lactose free
          <br />
          <input
            type="checkbox"
            name="vegan"
            onChange={(e) => this.handleChange(e)}
          /> Vegan
          <br />
         <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
        <div>
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>**Nuts free : {this.state.nutsAllergy ? 'Yes' : 'No'}</p>
          <p>**Lactose free : {this.state.lactoseFree ? 'Yes' : 'No'}</p>
          <p>**Vegan meal : {this.state.vegan ? 'Yes' : 'No'}</p>
        </div>
      </>
    );
  }
}

export default FormComponent