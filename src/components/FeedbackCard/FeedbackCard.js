import PropTypes from 'prop-types';
import s from './FeedbackCard.module.css';

export default function FeedbackCard({ children }) {
  return <div className={s.container}>{children}</div>;
}

FeedbackCard.propTypes = {
  children: PropTypes.node,
};
