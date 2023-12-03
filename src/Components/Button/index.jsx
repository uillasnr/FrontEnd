
import  { useState } from 'react';
import { CustomModal } from '../Modal';

export function Button() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-primary rounded-lg w-[147px] h-[58px] text-white font-medium text-center 
        hover:opacity-75 opacity-74 transition-opacity duration-300 mr-[90px] text-lg"
        onClick={openModal}
      >
        + Novo Card
      </button>
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
}
