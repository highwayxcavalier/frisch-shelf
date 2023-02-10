export const formatMealType = (mealType: string[]) => {
  if (mealType[0] === 'lunch/dinner') return ['Lunch', 'Dinner'];

  const singleType =
    mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1).toLowerCase();
  return [singleType];
};
