import { Component, Container } from 'common';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { AppStyled } from './App.styled';

// import PropTypes from 'prop-types'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total === 0 ? 0 : ((good * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const statisticsProps = { good, neutral, bad, total, positivePercentage };

    return (
      <AppStyled>
        <Section title="Please review our ☕">
          <Container>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.leaveFeedback}
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
  }
}
