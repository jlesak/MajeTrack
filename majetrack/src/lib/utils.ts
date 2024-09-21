import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBadgeColor(type: string): string {
  switch(type) {
    case 'Stock': return 'bg-blue-500'
    case 'ETF': return 'bg-green-500'
    case 'Crypto': return 'bg-yellow-500'
    case 'Real Estate': return 'bg-purple-500'
    default: return 'bg-gray-500'
  }
}