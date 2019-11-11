import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import minus from 'public/minus-solid.svg';
// import plus from 'public/plus-solid.svg';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div>
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div>
            {!isOpen && <span>+</span>}
            {isOpen && <span>-</span>}
          </div>
        </div>
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;