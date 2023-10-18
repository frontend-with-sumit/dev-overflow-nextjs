import QuestionCard from "@/components/Cards/QuestionCard";
import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/Search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
	{
		_id: "1",
		title: "How to use SQLAlchemy in a Python project?",
		tags: [
			{ _id: "1", name: "python" },
			{ _id: "2", name: "sql" },
		],
		author: { _id: "1", name: "John Doe", picture: "john-doe.jpg" },
		upvote: 10,
		views: 100,
		answers: [],
		createdAt: new Date("2022-10-16T12:00:00.0002"),
	},
	{
		_id: "2",
		title: "Best practices for SQL database design",
		tags: [
			{ _id: "3", name: "database" },
			{ _id: "4", name: "sql" },
		],
		author: { _id: "2", name: "Jane Smith", picture: "jane-smith.jpg" },
		upvote: 5000000,
		views: 1234567,
		answers: [],
		createdAt: new Date("2023-09-01T12:00:00.0002"),
	},
];

export default function Home() {
	return (
		<>
			<div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
				<h1 className="h1-bold text-dark100_light900">All Questions</h1>

				<Link href="/ask-question" className="flex justify-end max-sm:w-full">
					<Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
						Ask a question
					</Button>
				</Link>
			</div>

			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar
					route="/"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for Questions Here.."
					otherClasses="flex-1"
				/>

				<Filter
					filters={HomePageFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
					containerClasses="hidden max-md:flex"
				/>
			</div>

			<HomeFilters />

			<div className="mt-10 flex w-full flex-col gap-6">
				{questions.length > 0 ? (
					questions.map((question) => (
						<QuestionCard key={question?._id} question={question} />
					))
				) : (
					<NoResult
						title="There's no question to show"
						description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
					discussion. Our query could be the next big thing others learn from. Get
					Resolved!💡"
						link=""
						linkTitle="Ask a question"
					/>
				)}
			</div>
		</>
	);
}
