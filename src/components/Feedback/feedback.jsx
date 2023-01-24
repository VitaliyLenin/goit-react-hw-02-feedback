// import css from './feedback.module.css';
// import React from 'react';
// // import Statistics from 'components/Statistics/statistics';

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handlePositiveClick = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleNeutralClick = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleBadClick = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     if (total === 0) {
//       return 0;
//     }
//     return Math.floor((this.state.good / total) * 100);
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.feedback_wrap}>
//         <span className={css.feedback_title}> Please leave feedback</span>
//         <ul className={css.btnlist}>
//           <li className={css.list_item}>
//             <button
//               className={css.button}
//               type="button"
//               onClick={this.handlePositiveClick}
//             >
//               good
//             </button>
//           </li>
//           <li className={css.list_item}>
//             {' '}
//             <button
//               className={css.button}
//               type="button"
//               onClick={this.handleNeutralClick}
//             >
//               neutral
//             </button>
//           </li>
//           <li className={css.list_item}>
//             <button
//               className={css.button}
//               type="button"
//               onClick={this.handleBadClick}
//             >
//               bad
//             </button>
//           </li>
//         </ul>
//         <div className={css.stat_wrap}>
//           <span className={css.stat_title}>Statistics</span>
//           <p className={css.stat_text}>Good: {this.state.good}</p>
//           <p className={css.stat_text}>Neutral: {this.state.neutral}</p>
//           <p className={css.stat_text}>Bad: {this.state.bad}</p>
//           <p className={css.stat_text}>Total: {total}</p>
//           <p className={css.stat_text}>Positive feedback: {percentage}%</p>
//         </div>
//         {/* <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={total}
//           percentage={percentage}
//         /> */}
//       </div>
//     );
//   }
// }

// export default Feedback;
