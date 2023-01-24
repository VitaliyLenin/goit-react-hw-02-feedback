import React from 'react';
import css from './statistics.module.css';

const Statistics = props => {
  <div className={css.stat_wrap}>
    <span className={css.stat_title}>Statistics</span>
    <p className={css.stat_text}>Good: {props.good}</p>
    <p className={css.stat_text}>Neutral: {props.neutral}</p>
    <p className={css.stat_text}>Bad: {props.bad}</p>
    <p className={css.stat_text}>Total: {props.total}</p>
    <p className={css.stat_text}>Positive feedback: {props.percentage}%</p>
  </div>;
};

export default Statistics;
