import React from 'react';
class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="name" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default RegistrationForm;
