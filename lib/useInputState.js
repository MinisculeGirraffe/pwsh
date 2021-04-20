import React from 'react';

export const useInputState = (initialValue = 'code here') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChange: setValue };
};