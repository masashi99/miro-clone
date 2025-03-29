import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { BoardCard } from "./BoardCard";
import { EmptyBoards } from "./EmptyBoards";
import { EmptyFavorites } from "./EmptyFavorites";
import { EmptySearch } from "./EmptySearch";
import { NewBoardButton } from "./NewBoardButton";

type Props = {
	orgId: string;
	query: {
		search?: string;
		favorites?: string;
	};
};

export function BoardList({ orgId, query }: Props) {
	const data = useQuery(api.boards.get, { orgId });

	if (data === undefined) {
		return (
			<div>
				<h2 className="text-3xl">
					{query.favorites ? "Favorites boards" : "Team boards"}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
					<NewBoardButton orgId={orgId} disabled />
					<BoardCard.Skelton />
				</div>
			</div>
		);
	}

	if (!data?.length && query.search) {
		return <EmptySearch />;
	}

	if (!data?.length && query.favorites) {
		return <EmptyFavorites />;
	}

	if (!data?.length) {
		return <EmptyBoards />;
	}

	return (
		<div>
			<h2 className="text-3xl">
				{query.favorites ? "Favorites boards" : "Team boards"}
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
				<NewBoardButton orgId={orgId} />
				{data?.map((board) => (
					<BoardCard
						key={board._id}
						id={board._id}
						title={board.title}
						imageUrl={board.imageUrl}
						authorName={board.authorName}
						authorId={board.imageUrl}
						createAt={board._creationTime}
						orgId={board.orgId}
						isFavorite={false}
					/>
				))}
			</div>
		</div>
	);
}
