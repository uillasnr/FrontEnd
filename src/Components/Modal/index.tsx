import React from "react";
import Modal from "react-modal";
import { DatePicker } from "../Datepicker";
import { InputPriority } from "../InputPriority";

Modal.setAppElement("#root");

export function CustomModal({ isOpen, onRequestClose }) {
  const customModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "682px",
      height: "463px",
      flexShrink: 0,
      borderRadius: "10px",
      background: "#FFF",
      boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.05)",
      margin: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} 
      contentLabel="Exemplo de Modal"
      style={customModalStyle}
    >
      <div className="p-7">
        <h1 className="text-2xl font-semibold text-secondary mb-[34px]">
          Novo Card
        </h1>

        <div className="gap-8">
          <label className="text-xs font-normal rounded-md text-primaryDark pl-[10px]">
            Título da Task
            <input
              className="h-10 w-full rounded-md border-primaryDark font-semibold text-base pl-[10px] pr-[5px]  focus:border-primary "
              placeholder="Digite aqui o título da task"
            />
          </label>

          <label className="text-xs font-normal rounded-md text-primaryDark pl-[10px] ">
            Descrição
            <input
              className="h-10 w-full rounded-md border-primaryDark font-semibold text-base pl-[10px] pr-[5px]  focus:border-primary"
              placeholder="Digite a descrição"
            />
          </label>
        </div>

        <div className="flex items-center gap-20">
          <DatePicker />

          <InputPriority />
        </div>

        <div className="flex gap-7 justify-end mt-10">
          <button className="border-solid border-2 border-error text-error font-medium text-sm w-44 h-9 rounded-full">
            CANCELAR
          </button>
          <button className="bg-secondary text-white font-medium text-sm w-44 h-9 rounded-full">
            Criar
          </button>
        </div>
        {/*  <button onClick={onRequestClose}>Fechar Modal</button> */}
      </div>
    </Modal>
  );
}
