import css from './feedback.module.css';
import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePositiveClick = () => {};

  handleNeutralClick = () => {};

  handleBadClick = () => {};

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
            <button className={css.button} type="button">
              neutral
            </button>
          </li>
          <li className={css.list_item}>
            <button className={css.button} type="button">
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
