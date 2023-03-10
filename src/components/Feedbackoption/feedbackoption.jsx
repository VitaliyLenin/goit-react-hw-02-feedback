import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackoption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        className={css.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
