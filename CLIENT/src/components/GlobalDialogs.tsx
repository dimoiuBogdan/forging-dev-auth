import { FC } from 'react';
import FGBackgroundDialog from './FGLibrary/FGDialogs/FGBackgroundDialog';
import FGConfirmationDialog from './FGLibrary/FGDialogs/FGConfirmationDialog';

const GlobalDialogs: FC = () => {
  return (
    <>
      <FGBackgroundDialog />
      <FGConfirmationDialog />
    </>
  );
};

export default GlobalDialogs;
