import { useState } from 'react';

import Container from './components/Container/Container';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';


export default function App ()  {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
    
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
};
  
return (
      <Container>
        <FeedbackCard>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={addFeedback}
            ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {countTotalFeedback() === 0 ? (
              <Notification message="No one reported yet"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            )}
          </Section>
        </FeedbackCard>
      </Container>
    );
}
