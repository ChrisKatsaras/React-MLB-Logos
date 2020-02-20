import React from 'react';
import PropTypes from 'prop-types';

const CLE = props => {
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
        d="m228.93 337.004-48.931-48.931v-176.759l48.931-48.319h151.069v111.313h-64.833v-36.086l-10.398-11.009h-49.542l-10.398 11.009v123.547l10.398 10.398h49.542l10.398-10.398v-36.086h64.833v62.387l-48.931 48.931z"
        fill="#fff"
      />
      <path
        d="m326.795 325.381 41.591-41.591v-47.095h-41.591v29.969l-17.737 17.126h-58.717l-17.126-17.126v-133.336l17.126-17.126h58.717l17.737 17.126v29.969h41.591v-89.298h-41.591v9.787l-9.786-9.787h-83.794l-41.591 42.203v167.592l41.591 41.591 93.579-.004z"
        fill="#e31937"
      />
    </svg>
  );
};

CLE.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CLE.defaultProps = {
  size: '100'
};

export default CLE;
