import { useId, useState } from 'react';
import { BaseCard } from '../../types';

type CardFormProps = {
  onSave: (card: BaseCard) => void;
};

const CardForm = ({ onSave }: CardFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const id = useId();

  return (
    <>
      <div className="flex flex-col gap-[6px]">
        <span className="text-left font-medium text-[14px]">Image</span>
        <input
          className="rounded-[6px] border-[1px] border-[#D1D5D8] px-[12px] py-[8px] font-normal text-[14px]"
          placeholder="Insert image url..."
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <span className="text-left font-medium text-[14px]">Title</span>
        <input
          className="rounded-[6px] border-[1px] border-[#D1D5D8] px-[12px] py-[8px] font-normal text-[14px]"
          placeholder="Title your card here..."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <span className="text-left font-medium text-[14px]">Description</span>
        <textarea
          className="rounded-[6px] border-[1px] border-[#D1D5D8] px-[12px] py-[8px] font-normal text-[14px]"
          name="description"
          id="description"
          placeholder="Describe your card here..."
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="w-max bg-amber-600 text-white rounded-[6px] m-auto px-[22px] py-[5px] cursor-pointer hover:bg-amber-700 transition-colors"
        onClick={() => onSave({ id, title, description, image: img })}
      >
        Save
      </button>
    </>
  );
};

export default CardForm;
