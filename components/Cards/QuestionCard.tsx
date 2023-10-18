import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

interface Question {
	_id: string;
	title: string;
	tags: { _id: string; name: string }[];
	author: { _id: string; name: string; picture: string };
	upvote: number;
	views: number;
	answers: Array<object>;
	createdAt: Date;
}

interface Props {
	question: Question;
}

const QuestionCard = ({ question }: Props) => {
	return (
		<div className="card-wrapper rounded-[10px] p-9 sm:px-11">
			<div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
				<div>
					<span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
						{getTimestamp(question?.createdAt)}
					</span>
					<Link href={`/questions/${question?._id}`}>
						<h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
							{question?.title}
						</h3>
					</Link>

					{/* If signed in add/edit/delete actions */}
					<div className="mt-3.5 flex flex-wrap gap-2">
						{question?.tags.map((tag) => (
							<RenderTag key={tag?._id} tag={tag} />
						))}
					</div>

					<div className="flex-between mt-6 w-full flex-wrap gap-3">
						<Metric
							imgUrl={"/assets/icons/avatar.svg"}
							alt="User"
							value={question.author.name}
							title={` - asked ${getTimestamp(question?.createdAt)}`}
							href={`/profile/${question.author._id}`}
							isAuthor
							textStyles="body-medium text-dark400_ligth700"
						/>
						<Metric
							imgUrl="/assets/icons/like.svg"
							alt="Upvotes"
							value={formatAndDivideNumber(question.upvote)}
							title="Votes"
							textStyles="small-medium text-dark400_ligth800"
						/>
						<Metric
							imgUrl="/assets/icons/message.svg"
							alt="Upvotes"
							value={formatAndDivideNumber(question.answers.length)}
							title="Answers"
							textStyles="small-medium text-dark400_ligth800"
						/>
						<Metric
							imgUrl="/assets/icons/eye.svg"
							alt="eye"
							value={formatAndDivideNumber(question.views)}
							title="Views"
							textStyles="small-medium text-dark400_ligth800"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
