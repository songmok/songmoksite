"use client";
import Link from "next/link";
import Modal from "react-modal";

export interface ICloneModal {
  RepEmb: string;
  RepUrl: string;
  title: string;
  siteUrl: string;
  closeModal: () => void;
  ModalOpen: boolean;
}
const CloneModal: React.FC<ICloneModal> = ({
  RepEmb,
  closeModal,
  ModalOpen,
  title,
  siteUrl,
  RepUrl,
}) => {
  return (
    <>
      {ModalOpen && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          className="fixed rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-16 rounded-8 flex flex-col items-center justify-center overflow-hidden border border-white w-8/12"
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center "
        >
          <button
            className="absolute top-2 right-2 text-red-500 text-2xl cursor-pointer transform hover:scale-125 transition-transform duration-200"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="flex w-10/12 justify-center mt-4">
            <iframe src={RepEmb} width="600" height="400" />
          </div>
          <div className="flex justify-around mt-12 w-full">
            <Link
              href={siteUrl}
              target="_blank"
              className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-500 dark:text-gray-100 block border hover:border-gray-300 dark:hover:text-gray-50 hover:text-gray-50 text-gray-100"
            >
              자세히 보기
            </Link>
            <Link
              href={RepUrl}
              target="_blank"
              className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-500 dark:text-gray-100 block border hover:border-gray-300 dark:hover:text-gray-50 hover:text-gray-50 text-gray-100"
            >
              사이트 바로가기
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CloneModal;
