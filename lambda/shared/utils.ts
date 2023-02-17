import { MealType, MealPreparation, MealSize } from "./models";

import { MealPlan } from "./models";

export const validateMealPlan = (mealPlan: MealPlan) => {
  const errors = [];
  if (!mealPlan.mealType) {
    errors.push("mealType is required");
  }
  if (!mealPlan.mealPreparation) {
    errors.push("mealPreparation is required");
  }
  if (!mealPlan.mealSize) {
    errors.push("mealSize is required");
  }
  return errors.length > 0 ? errors : null;
};
