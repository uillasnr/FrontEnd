

export const InputPriority = ({ onPriorityChange }) => {
  const handlePrioritySelection = (priority) => {
    onPriorityChange(priority);
  };

  return (
    <div className="gap-2">
      <label className="text-xs font-normal rounded-md text-primaryDark">Priority</label>

      <div className="flex gap-4 mt-2">
      <button 
  onClick={() => handlePrioritySelection("HIGH")}
  className="border-solid border border-error w-16 h-6 rounded-full text-error hover:text-white text-xs font-semibold hover:bg-error">
    HIGH
</button>
<button 
  onClick={() => handlePrioritySelection("MEDIUM")}
  className="border-solid border border-warning w-16 h-6 rounded-full text-warning hover:text-white text-xs font-semibold hover:bg-warning">
    MEDIUM
</button>
<button 
  onClick={() => handlePrioritySelection("LOW")}
  className="border-solid border border-success w-16 h-6 rounded-full text-success hover:text-white text-xs font-semibold hover:bg-success">
    LOW
</button>

      </div>
    </div>
  );
};
