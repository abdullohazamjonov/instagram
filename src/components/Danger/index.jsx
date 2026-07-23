import React from "react";

const Danger = ({ showModal, setShowModal, logout }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[340px] p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-center">
          Tizimdan chiqish
        </h2>
        <p className="text-center text-gray-500 mt-3">
          Haqiqatan ham tizimdan chiqmoqchimisiz?
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={logout} className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700">
            Ha
          </button>
          <button onClick={() => setShowModal(false)} className="bg-gray-200 px-8 py-2 rounded-lg hover:bg-gray-300">
            Yo'q
          </button>
        </div>
      </div>
    </div>
  );
};

export default Danger;