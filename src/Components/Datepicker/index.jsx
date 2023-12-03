export const DatePicker = ({ onDateChange }) => {
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    onDateChange(newDate);
  };

  return (
    <div className="flex flex-col">
      <label className="text-xs pl-[10px] font-normal rounded-md text-primaryDark">Data final</label>
      <input
        type="date"
        className="border-2 w-[280px] border-primaryDark p-2 rounded-md focus:outline-none focus:border-primary"
        placeholder="Selecione a data de entrega"
        onChange={handleDateChange}
      />
      
    </div>
  );
};
