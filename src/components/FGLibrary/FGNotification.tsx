'use client';

import { useNotifications } from '@/data/stores/useNotifications';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

const FGNotification = () => {
  const toast = useRef<Toast>(null);
  const { noitification } = useNotifications();

  const showNotification = () => {
    if (!noitification) return;

    toast.current?.show(noitification);
  };

  useEffect(() => {
    if (noitification) {
      showNotification();
    }
  }, [noitification]);

  return <Toast ref={toast} />;
};

export default FGNotification;
