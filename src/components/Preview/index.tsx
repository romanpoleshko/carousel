import { BaseCard } from "../../types";

export const CardPreview = ({ image, title, description }: BaseCard) => (
  <>
    <img className="w-full h-[150px] bg-[#F4F4F5] rounded-[5px] border-0" src={image} />

    <div className="flex flex-col gap-[6px]">
      <span className="text-left font-medium text-[14px]">Title</span>
      <input
        disabled={true}
        className="rounded-[6px] border-[1px] border-[#D1D5D8] px-[12px] py-[8px] font-normal text-[14px] opacity-40"
        placeholder="Title your card here..."
        type="text"
        value={title}
      />
    </div>

    <div className="flex flex-col gap-[6px]">
      <span className="text-left font-medium text-[14px]">Description</span>
      <textarea
        disabled={true}
        className="rounded-[6px] border-[1px] border-[#D1D5D8] px-[12px] py-[8px] font-normal text-[14px] opacity-40"
        name="description"
        id="description"
        placeholder="Describe your card here..."
        rows={3}
        value={description}
      />
    </div>
  </>
)
