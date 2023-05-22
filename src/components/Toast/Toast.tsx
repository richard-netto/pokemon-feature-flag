/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

// Hooks
import { useFlags } from 'flagsmith/react';

// State
import useAppStore from '../../state/useAppStore';

const Toast: React.FunctionComponent = (): JSX.Element => {
  const { errorMessage, showError, setError } = useAppStore();
  const flags = useFlags(['application_layout_update_v2']);

  useEffect(() => {
    let timeoutHandler: NodeJS.Timeout;
    if (showError) timeoutHandler = setTimeout(() => setError('', false), 5000);

    return () => clearTimeout(timeoutHandler);
  }, [showError]);

  if (flags.application_layout_update_v2.enabled)
    return (
      <div className="absolute right-1 top-1">
        {showError && (
          <div className="min-w-[200px] rounded-md bg-red-600 px-8 py-2 font-bold text-white">
            {errorMessage}
          </div>
        )}
      </div>
    );

  return (
    <div className="absolute right-1 top-1">
      {showError && !flags.application_layout_update_v2.enabled && (
        <div className="min-w-[200px] bg-white px-8 py-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default Toast;
