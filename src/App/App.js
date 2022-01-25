import { useState } from 'react';
import { Container } from 'common';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { AppStyled } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Btn = {
    GOOD: 'good',
    NEUTRAL: 'neutral',
    BAD: 'bad',
  };

  const addOne = n => n + 1;

  const leaveFeedback = e => {
    const { name } = e.currentTarget;

    return {
      [Btn.GOOD]: () => setGood(addOne),
      [Btn.NEUTRAL]: () => setNeutral(addOne),
      [Btn.BAD]: () => setBad(addOne),
    }[name](name);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return !total ? 0 : ((good * 100) / total).toFixed(0);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const statisticsProps = { good, neutral, bad, total, positivePercentage };

  return (
    <AppStyled>
      <Section title="Please review our ☕">
        <Container>
          <FeedbackOptions
            options={[Btn.GOOD, Btn.NEUTRAL, Btn.BAD]}
            onLeaveFeedback={leaveFeedback}
          />
        </Container>
      </Section>

      <Section title="Statistics">
        <Container>
          {total > 0 ? (
            <Statistics {...statisticsProps} />
          ) : (
            <Notification message="Be the first to review 🚀!" />
          )}
        </Container>
      </Section>
    </AppStyled>
  );
};
