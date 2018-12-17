import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  }

  static defaultProps = {
    text: 'Loading',
    speed: 250,
  }

  state = {
    text: this.props.text,
    speed: this.props.speed,
  }

  componentDidMount() {
    const stopper = `${this.state.text}...`;
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text }))
        : this.setState((prevState) => ({ text: `${prevState.text}.` }))
    }, this.state.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='loading'>{this.state.text}</div>
    )
  }
}

export default Loading;
