import { useEffect, useState } from "react";

import { Card } from "./components/Card";
import { useCarouselController } from "./hooks/useCarouselController";
import { useCardDataFetcher } from "./hooks/useCardDataFetcher";
import { BaseCard } from "./types";

import "./App.css";

function App() {
  const [cards, setCards] = useState<(BaseCard | undefined)[]>([]);

  const initialCards = useCardDataFetcher();

  const {
    activeItem,
    onNext,
    onPrevious,
    isFirstItem,
    isLastItem,
    setActiveItem,
  } = useCarouselController({
    length: cards.length,
  });

  const shouldShowArrows = cards[activeItem - 1];

  const onAddCard = () => {
    const newCards = [...cards, undefined];

    setCards(newCards);
    setActiveItem(newCards.length);
  };

  const onSaveCard = (card: BaseCard) => {
    setCards((prevCards) => [...prevCards.filter(Boolean), card]);
  };

  const onDeleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card?.id !== id));

    setActiveItem(1);
  };

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  return (
    <div className="flex flex-row gap-[20px] h-full justify-center items-center">
      {shouldShowArrows && <span className={`cursor-pointer ${isFirstItem && 'opacity-40'} `} onClick={onPrevious}>{"<"}</span>}
      <Card
        data={cards[activeItem - 1]}
        index={activeItem}
        total={cards.length}
        onAdd={onAddCard}
        onSave={onSaveCard}
        onDelete={onDeleteCard}
      />
      {shouldShowArrows && <span className={`cursor-pointer ${isLastItem && 'opacity-40'} `} onClick={onNext}>{">"}</span>}
    </div>
  );
};

export default App;
