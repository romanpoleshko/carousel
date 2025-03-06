import { useMemo, useState } from "react";

type useCarouselController = {
  length: number;
}

export const useCarouselController = ({ length }: useCarouselController) => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const isLastItem = useMemo(() => activeItem === length, [activeItem, length]);
  const isFirstItem = useMemo(() => activeItem === 1, [activeItem]);

  const onNext = () => !isLastItem && setActiveItem((item) => item + 1);
  const onPrevious = () => !isFirstItem && setActiveItem((item) => item - 1);

  return {
    activeItem,
    onNext,
    onPrevious,
    isLastItem,
    isFirstItem,
    setActiveItem,
  };
};
