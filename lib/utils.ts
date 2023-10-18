import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
	// Get the current date and time
	const currentDate = new Date();

	// Calculate the time difference in milliseconds
	const timeDifference = currentDate.getTime() - createdAt.getTime();

	// Define time units in milliseconds
	const minute = 60 * 1000;
	const hour = 60 * minute;
	const day = 24 * hour;
	const year = 365 * day; // Approximation of a year

	// Calculate the time ago
	if (timeDifference < minute) {
		const seconds = Math.floor(timeDifference / 1000);
		return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
	} else if (timeDifference < hour) {
		const minutes = Math.floor(timeDifference / minute);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDifference < day) {
		const hours = Math.floor(timeDifference / hour);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else if (timeDifference < year) {
		const days = Math.floor(timeDifference / day);
		return `${days} day${days > 1 ? "s" : ""} ago`;
	} else {
		const years = Math.floor(timeDifference / year);
		return `${years} year${years > 1 ? "s" : ""} ago`;
	}
};

export const formatAndDivideNumber = (number: number): string => {
	if (Math.abs(number) >= 1e6) {
		const formattedNumber = (number / 1e6).toFixed(2) + "M";
		number /= 1e6;
		return formattedNumber;
	} else if (Math.abs(number) >= 1e3) {
		const formattedNumber = (number / 1e3).toFixed(2) + "K";
		number /= 1e3;
		return formattedNumber;
	} else {
		return number.toString();
	}
};
