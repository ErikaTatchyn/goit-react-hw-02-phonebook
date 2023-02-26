import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
  }

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      alert('Please enter a name and number');
      return;
    }

    this.props.onAddContact(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
