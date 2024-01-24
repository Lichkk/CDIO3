// Notification.js
import React from "react";

const Notification = ({ type, message }) => {
  let bgColor, textColor;

  // Xác định màu sắc dựa trên loại thông báo
  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      textColor = "text-white";
      break;
    case "error":
      bgColor = "bg-red-500";
      textColor = "text-white";
      break;
    default:
      bgColor = "bg-blue-500";
      textColor = "text-white";
  }

  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor} ${textColor}`}>
      <p className="font-semibold">
        {type.charAt(0).toUpperCase() + type.slice(1)}:
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
