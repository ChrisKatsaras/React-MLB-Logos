import React from 'react';
import PropTypes from 'prop-types';

const PHI = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      strokeMiterlimit="3.8636"
      viewBox="0 0 420 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m126.75 66.75h166.5v166.5h-166.5z" fill="#e81828" />
      <path
        d="m246.326 111.198c-1.424-12.3-8.76-18.077-21.794-17.201l-3.364.229v41.793l4.273-.801c13.969-2.613 22.159-12.041 20.885-24.02m-58.582 7.233s-4.349 26.663-25.268 17.311c-12.591-5.645-13.887-27.585 5.742-46.841 29.161-28.419 101.364-21.478 98.493 23.698-1.57 25.734-20.365 36.013-46.192 45.362v47.489c0 14.441-14.903 24.441-27.215 22.311-13.145-2.317-13.516-17.962 2.22-34.531v-94.888c-12.129 4.997-20.086 20.368-7.78 20.089z"
        fill="#fff"
        fillRule="nonzero"
      />
      <path
        d="m246.326 111.198c-1.424-12.3-8.76-18.077-21.794-17.201l-3.364.229v41.793l4.273-.801c13.969-2.613 22.159-12.041 20.885-24.02zm-58.582 7.233s-4.349 26.663-25.268 17.311c-12.591-5.645-13.887-27.585 5.742-46.841 29.161-28.419 101.364-21.478 98.493 23.698-1.57 25.734-20.365 36.013-46.192 45.362v47.489c0 14.441-14.903 24.441-27.215 22.311-13.145-2.317-13.516-17.962 2.22-34.531v-94.888c-12.129 4.997-20.086 20.368-7.78 20.089z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.49"
      />
    </svg>
  );
};

PHI.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PHI.defaultProps = {
  size: '100'
};

export default PHI;
