import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonBox}>
      {options.map(option => (
        <button
          key={uuidv4()}
          className={s.button}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {`${option.slice(0, 1).toUpperCase()}${option
            .slice(1)
            .toLowerCase()}`}
        </button>
      ))}
    </div>
  );
}

// FeedbackOptions.propTypes = {
//   options: PropTypes.objectOf(PropTypes.number).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
