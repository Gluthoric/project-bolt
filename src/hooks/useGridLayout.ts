import { useMemo } from 'react';

export default function useGridLayout(cardSize: number, cardsPerRow: number) {
  return useMemo(() => {
    const gridWidth = Math.min(
      cardSize * cardsPerRow + (16 * (cardsPerRow - 1)),
      window.innerWidth - 300 // Account for sidebar and padding
    );

    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${cardsPerRow}, ${cardSize}px)`,
      gap: '1rem'
    };

    return { gridWidth, gridStyle };
  }, [cardSize, cardsPerRow]);
}