import css from './feedback.module.css';
import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePositiveClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.feedback_wrap}>
        <span className={css.feedback_title}> Please leave feedback</span>
        <ul className={css.btnlist}>
          <li className={css.list_item}>
            <button
              className={css.button}
              type="button"
              onClick={this.handlePositiveClick}
            >
              good
            </button>
          </li>
          <li className={css.list_item}>
            {' '}
            <button
              className={css.button}
              type="button"
              onClick={this.handleNeutralClick}
            >
              neutral
            </button>
          </li>
          <li className={css.list_item}>
            <button
              className={css.button}
              type="button"
              onClick={this.handleBadClick}
            >
              bad
            </button>
          </li>
        </ul>
        <div className={css.stat_wrap}>
          <span className={css.stat_title}>Statistics</span>
          <p className={css.stat_text}>Good: {this.state.good}</p>
          <p className={css.stat_text}>Neutral: {this.state.neutral}</p>
          <p className={css.stat_text}>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
