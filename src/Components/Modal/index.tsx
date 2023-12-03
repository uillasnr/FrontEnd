import React, { useState } from "react";
import Modal from "react-modal";
import { DatePicker } from "../Datepicker";
import { InputPriority } from "../InputPriority";
import * as yup from "yup";
//import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

export function CustomModal({ isOpen, onRequestClose }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
  };

  const schema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    description: yup.string().required("O description é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    /*   resolver: yupResolver(schema), */
  });

  const onSubmit = async (formData) => {
    console.log("Dados do formulário:", formData);
    onRequestClose(); // Fechar o modal após o envio
  };

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
      <div className="p-3">
        <h1 className="text-2xl font-semibold text-secondary mb-5">
          Novo Card
        </h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xs font-normal rounded-md text-primaryDark pl-[10px] ">
            Título da Task
            <input
              type="text"
              id="title"
              {...register("title")}
              className="h-10 w-full rounded-md border-primaryDark font-semibold text-base pl-[10px]
               pr-[5px] mb-5 focus:outline-none focus:border-primary"
              placeholder="Digite aqui o título da task"
            />
          </label>

          <label className="text-xs font-normal rounded-md text-primaryDark pl-[10px]">
            Descrição
            <textarea
              type="description"
              id="description"
              {...register("description")}
              className="h-20 w-full rounded-md border-primaryDark font-semibold text-base 
              pl-[10px] pr-[5px] mb-5 focus:outline-none focus:border-primary"
              placeholder="Digite a descrição"
            />
          </label>

          <div className="flex items-center gap-16 ">
            <DatePicker onDateChange={handleDateChange} />

            <InputPriority onPriorityChange={handlePriorityChange} />
          </div>

          <div className="flex gap-7 justify-end mt-7">
            <button
              className="border-solid border-2 border-error text-error  hover:text-white
           hover:bg-error font-medium text-sm w-44 h-9 rounded-full"
              onClick={onRequestClose}
            >
              CANCELAR
            </button>
            <button
              type="submit"
              className="bg-secondary text-white font-medium text-sm w-44 h-9 rounded-full 
           hover:opacity-75 opacity-74 transition-opacity duration-300"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
