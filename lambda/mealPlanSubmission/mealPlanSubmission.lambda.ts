import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  MealPlan,
  MealType,
  MealPreparation,
  MealSize,
} from "../shared/models";
import { validateMealPlan } from "../shared/utils";

export const mealPlanSubmissionHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the request body if it's a non-null string
    const requestBody =
      typeof event.body === "string" ? JSON.parse(event.body) : null;

    // Check if the requestBody is null
    if (requestBody === null) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid request body",
        }),
      };
    }

    // Validate the meal plan data
    const mealPlan = new MealPlan();
    //   requestBody.mealType ?? MealType.BREAKFAST,
    //   (requestBody.mealPreparation as MealPreparation) ?? MealPreparation.VEGAN,
    //   requestBody.mealSize ?? MealSize.MEDIUM

    const validationErrors = validateMealPlan(mealPlan);
    if (validationErrors) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid meal plan data",
          errors: validationErrors,
        }),
      };
    }

    // TODO: Save the meal plan to the database

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Meal plan submitted" }),
    };
  } catch (error) {
    // Log the error and return an error response
    console.error("Error submitting meal plan", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error submitting meal plan" }),
    };
  }
};
