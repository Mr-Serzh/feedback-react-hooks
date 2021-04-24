import React, { Component } from 'react';

import Container from './components/Container/Container';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = item => {
    this.setState(PrevState => ({
      [item]: PrevState[item] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackCard>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="No one reported yet"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            )}
          </Section>
        </FeedbackCard>
      </Container>
    );
  }
}

export default App;
