import PropTypes from 'prop-types';

export function Notification({ message }) {
  return (
    <>
      <h3>{message}</h3>
    </>
  );
}

StaticRange.PropTypes = {
  message: PropTypes.string,
};
