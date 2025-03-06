import { useEffect, useState } from "react";
import { BaseCard } from "../types";
import { data } from "./mocks";

export const useCardDataFetcher = () => {
  const [cards, setCards] = useState<null | BaseCard[]>(null);

  useEffect(() => {
    setCards(data);
  }, []);

  return cards || [];
};
