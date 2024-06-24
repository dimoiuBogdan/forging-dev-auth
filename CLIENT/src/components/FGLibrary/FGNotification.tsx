'use client';

import { useNotifications } from '@/data/stores/useNotifications';
import { Toast } from 'primereact/toast';
import { FC, useCallback, useEffect, useRef } from 'react';

const FGNotification: FC = () => {
  const toast = useRef<Toast>(null);
  const { noitification } = useNotifications();

  const showNotification = useCallback(() => {
    if (!noitification) return;

    toast.current?.show(noitification);
  }, [noitification]);

  useEffect(() => {
    if (noitification) {
      showNotification();
    }
  }, [noitification, showNotification]);

  return <Toast ref={toast} />;
};

export default FGNotification;
