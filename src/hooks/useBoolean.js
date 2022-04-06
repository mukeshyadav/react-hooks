import { useState } from 'react';

const useBoolean = () => {
  const [state, setState] = useState();

  const handleTree = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTree,
      setFalse: handleFalse,
      setToggle: handleToggle
    }
  ];
};

export { useBoolean };
