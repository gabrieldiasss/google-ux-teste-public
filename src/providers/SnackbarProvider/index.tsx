import { Snackbar } from '@/components';
import { SnackbarProps } from '@/components/Snackbar';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { snackbarsWrapper } from './snackbars.css';

interface SnackbarContextType {
  addSnackbar: (snackbar: Omit<SnackbarProps, 'id'>) => void;
  removeSnackbar: (id: string) => void;
  notMountedSnackbar?: boolean;
}

const SnackbarContext = createContext<SnackbarContextType>({
  addSnackbar: () => {
    console.error('Must set the SnackbarProvider');
  },
  removeSnackbar: () => {
    console.error('Must set the SnackbarProvider');
  },
  notMountedSnackbar: true,
});

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (context.notMountedSnackbar) {
    console.error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackbars, setSnackbars] = useState<SnackbarProps[]>([]);

  const addSnackbar = (snackbar: Omit<SnackbarProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setSnackbars((prev) => [...prev, { ...snackbar, id }]);

    const duration = snackbar.duration || 5000;
    setTimeout(() => removeSnackbar(id), duration);
  };
  console.log('snackbars', snackbars);
  const removeSnackbar = (id: string) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  };

  return (
    <SnackbarContext.Provider value={{ addSnackbar, removeSnackbar }}>
      {children}
      {ReactDOM.createPortal(
        <div className={snackbarsWrapper}>
          {snackbars.map(({ id, ...props }) => (
            <Snackbar
              {...props}
              id={id}
              key={id}
              onClose={() => removeSnackbar(id)}
            />
          ))}
        </div>,
        document.body,
      )}
    </SnackbarContext.Provider>
  );
};
