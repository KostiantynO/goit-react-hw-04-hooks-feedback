import { PropTypes } from 'common';
import { NotificationStyled } from './Notification.styled';

export const Notification = ({ message }) => (
  <NotificationStyled>
    <span>{message}</span>
  </NotificationStyled>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
