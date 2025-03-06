import Modal from "react-modal";

import { CardPreview } from "../Preview";
import CardForm from "../Form";
import { BaseCard } from "../../types";
import { useId, useState } from 'react';

type CardProps = {
  data: BaseCard | undefined;
  index: number;
  total: number;
  onAdd: () => void;
  onSave: (card: BaseCard) => void;
  onDelete: (id: string) => void;
};

const customStyles = {
  content: {
    width: '420px',
    border: '1px solid #E2E8F0',
    boxShadow: '0px 4px 6px 0px #00000017',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

export const Card = ({
  data,
  index = 0,
  total = 0,
  onAdd,
  onSave,
  onDelete,
}: CardProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete(data?.id as string)
    closeModal();
  };

  const newId = useId();

  const handleDuplicate = () => {
    onSave({
      ...data,
      id: newId,
    } as BaseCard);
    closeModal();
  };

  const isViewMode = !!data;

  return (
    <div className="flex flex-col relative gap-[20px] w-[350px] border-[1px] border-[#D4D4D8] rounded-[10px] py-[50px] px-[40px]">
      {isViewMode ? (
        <div
          className="flex flex-row gap-[5px] w-max absolute top-[50px] right-[-36px] rotate-270 border-[1px] bg-white border-[#000000] rounded-[6px] px-[13px] py-[7px] leading-3 cursor-pointer"
          onClick={onAdd}
        >
          <span>+</span>
          <span>Card</span>
        </div>
      ) : null}

      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center gap-[8px]">
          <img src="public/icon-bot.svg" alt="icon-bot" />
          <span className="font-medium text-[14px]">Bot says</span>
        </div>
        <div className="flex flex-row items-center gap-[8px]">
          <span className="font-medium text-[14px]">{`${index}/${total}`}</span>
          {isViewMode ? (
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              src="public/more-horizontal.png"
              alt="icon-more"
              onClick={openModal}
            />
          ) : null}
        </div>
      </div>

      {isViewMode ? (
        <CardPreview {...data} />
      ) : (
        <CardForm onSave={onSave} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <span className="font-medium text-[16px]">Edit Card</span>
        <p className="text-[#94A3B8] text-[14px] mt-[8px]">Want to delete or duplicate or delete this card? Here you can. Caution though... this is irreversible.</p>
        <div className="flex flex-col gap-[8px] mt-[16px]">
          <button
            onClick={handleDuplicate}
            className="bg-black text-white rounded-[6px] py-[8px] cursor-pointer"
          >
            Duplicate Card
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#EF4444] text-white rounded-[6px] py-[8px] cursor-pointer"
          >
            Delete Card
          </button>
        </div>
      </Modal>
    </div>
  );
};
