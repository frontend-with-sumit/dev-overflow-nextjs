import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const hotQuestions = [
	{
		_id: 1,
		title:
			"Would it be appropriate to point out an error in another paper during a referee report?",
	},
	{
		_id: 2,
		title: "How can an airconditioning machine exist?",
	},
	{
		_id: 3,
		title: "Interrogated every time crossing UK Border as citizen",
	},
	{
		_id: 4,
		title: "Low digit addition generator",
	},
];

const popularTags = [
	{
		_id: 1,
		name: "JAVASCRIPT",
		totalQuestions: 2,
	},
	{
		_id: 2,
		name: "React",
		totalQuestions: 4,
	},
	{
		_id: 3,
		name: "Next.js",
		totalQuestions: 20,
	},
	{
		_id: 4,
		name: "Vue.js",
		totalQuestions: 5,
	},
	{
		_id: 5,
		name: "Angular",
		totalQuestions: 8,
	},
];

const RightSidebar = () => {
	return (
		<section className="background-light900_dark200 light-border dark: custom-scrollbar sticky right-0 top-0 flex h-screen w-[320px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
			<div>
				<h3 className="h3-bold text-dark200_light900">Top Questions</h3>
				<div className="mt-7 flex w-full flex-col gap-[30px]">
					{hotQuestions.map((question) => (
						<Link
							href={`/questions/${question._id}`}
							className="flex cursor-pointer items-center justify-between gap-7"
							key={question._id}
						>
							<p className="text-dark500_light700 body-medium">
								{question.title}
							</p>
							<Image
								src="/assets/icons/chevron-right.svg"
								alt="Chevron Arrow"
								height={20}
								width={20}
								className="invert-colors"
							/>
						</Link>
					))}
				</div>
			</div>

			<div className="mt-16">
				<h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
				<div className="mt-7 flex flex-col gap-4">
					{popularTags.map((tag) => (
						<RenderTag tag={tag} key={tag._id} showCount />
					))}
				</div>
			</div>
		</section>
	);
};

export default RightSidebar;
