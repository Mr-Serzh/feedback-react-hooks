import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const items = Object.keys(options);

  return (
    <div className={s.buttonBox}>
      {items.map(item => (
        <button
          key={uuidv4()}
          className={s.button}
          type="button"
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {`${item.slice(0, 1).toUpperCase()}${item.slice(1).toLowerCase()}`}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
