/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

// State
import useAppStore from '../../state/useAppStore';

const Toast: React.FunctionComponent = (): JSX.Element => {
  const { errorMessage, showError, setError } = useAppStore();

  useEffect(() => {
    let timeoutHandler: NodeJS.Timeout;
    if (showError) timeoutHandler = setTimeout(() => setError('', false), 5000);

    return () => clearTimeout(timeoutHandler);
  }, [showError]);

  return (
    <div className="absolute right-1 top-1">
      {showError && (
        <div className="min-w-[200px] rounded-md bg-red-600 px-8 py-2 font-bold text-white">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Toast;
