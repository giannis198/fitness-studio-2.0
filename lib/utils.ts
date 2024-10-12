import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type OpeningHours = {
  [key: number]: { open: number[]; close: number[] }
}

const openingHours: OpeningHours = {
  1: { open: [8, 0], close: [22, 30] }, // Monday
  2: { open: [8, 0], close: [22, 30] }, // Tuesday
  3: { open: [8, 0], close: [22, 30] }, // Wednesday
  4: { open: [8, 0], close: [22, 30] }, // Thursday
  5: { open: [8, 0], close: [22, 30] }, // Friday
  6: { open: [10, 0], close: [17, 0] } // Saturday
}

export const isOpenNow = () => {
  const now = new Date()
  const day = now.getDay() // Sunday - Saturday : 0 - 6
  const hour = now.getHours()
  const minute = now.getMinutes()

  if (day === 0) return false // Closed on Sunday

  const { open, close } = openingHours[day]
  const openTime = open[0] * 60 + open[1]
  const closeTime = close[0] * 60 + close[1]
  const currentTime = hour * 60 + minute

  return currentTime >= openTime && currentTime <= closeTime
}
