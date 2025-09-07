import React from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { logo } from "@/utils/icons";

type ComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

const ComingSoonModal = ({
  isOpen,
  onClose,
  title = "Coming Soon!",
//   message = "This feature is coming soon. Stay tuned!",
}: ComingSoonModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-4 items-center text-center mt-3">
          <div className="h-14 w-14 border-4 border-black rounded-full">
                <Image src={logo} alt="logo" />
            </div>
          <h2 className="text-2xl font-bold font-body mb-2">{title}</h2>
          <button
            onClick={onClose}
            className="bg-[#FF6900] text-white font-bold py-3 px-6 rounded-full"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
