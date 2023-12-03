import { useState } from "react";
import { BsCalendar2Week } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
console.log(sidebarOpen)
  const handleOpenSidebar = () => {
    setSidebarOpen(true); // Toggle sidebar state to open
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName === selectedItem ? null : itemName);
  };

  const renderSidebarItem = (icon, text, itemName) => (
    <li
      key={itemName}
      className={`flex gap-5 items-center text-xl cursor-pointer ${
        itemName === selectedItem
          ? "text-secondary font-semibold"
          : "text-primaryDark"
      }`}
      onClick={() => handleItemClick(itemName)}
    >
      {icon} {text}
    </li>
  );

  return (
    <> 
    <div className="md:hidden flex cursor-pointer text-white text-4xl items-center pl-4 bg-secondary">
    <IoMenu onClick={handleOpenSidebar} />
  </div>

    <aside className='bg-white w-[300px] min-h-screen shadow-lg hidden md:block'>
      <h1 className="text-secondary text-3xl font-bold mt-14 mx-14 text-center font-k2d">
        TASKBAN
      </h1>

      <div className="flex flex-col mx-16 text-center font-normal gap-[50px] mt-[87px]">
        {renderSidebarItem(<MdDashboard />, "Quadro", "dashboard")}
        {renderSidebarItem(<IoCalendarOutline />, "Lista", "Lista")}
        {renderSidebarItem(<MdOutlineFormatListBulleted />, "Timeline", "timeline")}
        {renderSidebarItem(<BsCalendar2Week />, "Calendário", "calendar")}
      </div>
    </aside>
    </>
  );
}
