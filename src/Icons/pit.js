import React from 'react';
import PropTypes from 'prop-types';

const PIT = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m330.554 59.408c-9.841 9.611-19.481 11.844-34.741 11.844l-101.938-.143-13.875 34.699c8.384 3.614 13.875 11.568 13.875 21.112v158.945c0 9.542-5.491 17.49-13.875 21.101l13.875 33.632h38.926l13.885-33.632c-8.385-3.471-13.885-11.71-13.885-21.101v-62.664l63.013.031c15.26 0 24.899 3.76 34.741 13.372 6.426-19.767 25.729-34.505 49.446-40.383-8.992-15.453-12.522-29.171-12.522-43.49 0-14.318 2.005-29.877 10.999-45.323-23.72-5.889-42.002-28.241-47.924-48.004v.005zm-97.558 45.205h80.68c12.78 0 20.784 8.055 20.784 18.728v48.046c0 11.209-6.331 17.324-20.784 17.324h-80.68z"
        fill="#fdb827"
      />
    </svg>
  );
};

PIT.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PIT.defaultProps = {
  size: '100'
};

export default PIT;
