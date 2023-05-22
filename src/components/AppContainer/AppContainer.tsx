/* eslint-disable import/no-unresolved */
import React, { ReactNode } from 'react';

// Hooks
import { useFlags } from 'flagsmith/react';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: React.FunctionComponent<AppContainerProps> = ({
  children,
}): JSX.Element => {
  const flags = useFlags(['application_layout_update_v2']);

  if (flags.application_layout_update_v2.enabled)
    return (
      <div className="rounded-md bg-gradient-to-b from-neutral-800 to-neutral-900 p-8">
        {children}
      </div>
    );

  return <div className="rounded-md bg-red-100 p-4">{children}</div>;
};

export default AppContainer;
