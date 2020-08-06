import { useState } from 'react';

const useModal = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);
  const handleToggleModal = () => setOpen(!open);

  return {
    open,
    handleCloseModal,
    handleOpenModal,
    handleToggleModal,
  };
}

export default useModal;