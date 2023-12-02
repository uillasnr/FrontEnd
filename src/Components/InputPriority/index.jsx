export  const InputPriority = () => {
    return (
        <div className="gap-2 mt-8">
        <label className="text-xs font-normal rounded-md text-primaryDark ">Priority</label>

        <div className="flex gap-4 mt-2"> 
          <button className="bg-error w-16 h-6 rounded-full text-white text-xs font-semibold">
            HIGH
          </button>
          <button className="bg-warning w-16 h-6 rounded-full text-white text-xs font-semibold">
            MEDIUM
          </button>
          <button className="bg-success w-16 h-6 rounded-full text-white text-xs font-semibold">
            LOW
          </button>
          </div>
        </div>
    );
  };
  