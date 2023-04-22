/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ResetCSS from './styles';

const withResetCss = (Children) => function ({ ...props }) {
  return (
    <>
      <ResetCSS />
      <Children {...props} />
    </>
  );
};

export default withResetCss;
