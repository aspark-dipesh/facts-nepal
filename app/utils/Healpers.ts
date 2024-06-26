// check given number is even or not
import { twMerge } from "tailwind-merge"
import clsx, { ClassValue } from "clsx"
export const isEven = (num: number) => num % 2 === 0

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
