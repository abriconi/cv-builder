import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }: DialogProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const navigate = useNavigate();

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
      navigate("/");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleBackgroundClick}>
      <div className="bg-white p-4 rounded-md shadow-md">
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
