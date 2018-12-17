import React from 'react';

class SearchForm extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState(() => ({ value }));
  }

  render() {
    return (
      <form className='form-search' action='/search'>
        <input className='input-search'
          name='q'
          type='search'
          placeholder='Search Reddit'
          autoComplete='off'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SearchForm;
