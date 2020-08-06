import React from 'react';

const useStopPropagation = () => 
  (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
  }

export default useStopPropagation;