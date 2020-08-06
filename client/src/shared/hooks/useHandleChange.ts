import { useState } from 'react';

export type ChangeEvent = {
  target: {
    name: string,
    value: string,
  },
};

const useHandleChange = 
  <T extends { [ key: string ]: any }>(dataInit: T): [T, ( event: ChangeEvent ) => any]=> {

  const [data, setData] = useState<T>(dataInit);

  const handleChange = ( event: ChangeEvent ) => {
    if ( !event.target ) {
      return;
    }

    const { name, value } = event.target;

    if ( data.hasOwnProperty( name ) ) {
      setData( {
        ...data,
        [ name ]: value,
      } );
    }
  };

  return [data, handleChange];
};

export default useHandleChange;
