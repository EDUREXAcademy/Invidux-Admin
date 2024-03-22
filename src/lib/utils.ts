import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (string: string) => {
  const date = new Date(string);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function formatForDateType(inputString: any) {
  // Check if the input string is in the expected format
  var inputRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  if (!inputRegex.test(inputString)) {
    // If the input string doesn't match the expected format, return null or throw an error
    return null; // or throw new Error('Invalid input format');
  }

  // Create a new Date object using the input string
  var dateObj = new Date(inputString);

  // Extract year, month, and day from the Date object
  var year = dateObj.getFullYear();
  var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Adding 1 to month because it's zero-based
  var day = ("0" + dateObj.getDate()).slice(-2);

  // Construct the desired output string
  var outputString = year + "-" + month + "-" + day;

  return outputString as string;
}

export const extractNumber = (string: string) => {
  return string?.match(/\d+/);
};