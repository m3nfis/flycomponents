import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string.isRequired
  };

  render() {
    const { className, id, name, label, ...otherProps } = this.props;

    return (
      <label htmlFor={id || name} className={classNames('Switch', className)}>
        <input
          name={name}
          id={id || name}
          className="Switch-input"
          type="checkbox"
          {...otherProps}
        />
        <span className="Switch-label">{label}</span>
      </label>
    );
  }
}

export default Switch;