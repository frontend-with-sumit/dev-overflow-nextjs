"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface Props {
	route: string;
	iconPosition: string;
	imgSrc: string;
	placeholder: string;
	otherClasses?: string;
}

const LocalSearchBar = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
}: Props) => {
	return (
		<section
			className={`background-light800_darkgradient relative flex min-h-[56px] w-full grow items-center gap-1 rounded-[10px] px-4 ${otherClasses}`}
		>
			{iconPosition === "left" && (
				<Image
					src={imgSrc}
					alt="Local Search"
					height={24}
					width={24}
					className="cursor-pointer"
				/>
			)}

			<Input
				type="text"
				placeholder={placeholder}
				value=""
				onChange={() => {}}
				className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
			/>

			{iconPosition === "right" && (
				<Image
					src={imgSrc}
					alt="Local Search"
					height={24}
					width={24}
					className="cursor-pointer"
				/>
			)}
		</section>
	);
};

export default LocalSearchBar;
