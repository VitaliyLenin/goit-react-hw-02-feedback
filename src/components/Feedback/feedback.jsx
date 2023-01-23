import css from './feedback.module.css';

export const Feedback = () => {
  return (
    <div className={css.feedback}>
      <span className={css.title}> Please leave feedback</span>

      <button className={css.button} type="button">
        good
      </button>

      <button className={css.button} type="button">
        neutral
      </button>

      <button className={css.button} type="button">
        bad
      </button>
    </div>
  );
};
