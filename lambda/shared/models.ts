export type MealType = "breakfast" | "lunch" | "dinner";

export type MealPreparation = "vegan" | "meat";

export type MealSize = "small" | "medium" | "large";

export class MealPlan {
  mealType: MealType;
  mealPreparation: MealPreparation;
  mealSize: MealSize;

  constructor(
    mealType: MealType,
    mealPreparation: MealPreparation,
    mealSize: MealSize
  ) {
    this.mealType = mealType;
    this.mealPreparation = mealPreparation;
    this.mealSize = mealSize;
  }
}
