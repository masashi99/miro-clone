import { EmptyBoards } from "./EmptyBoards";
import { EmptyFavorites } from "./EmptyFavorites";
import { EmptySearch } from "./EmptySearch";

type Props = {
	orgId: string;
	query: {
		search?: string;
		favorites?: string;
	};
};

export function BoardList({ orgId, query }: Props) {
	const data = [];

	if (!data?.length && query.search) {
		return <EmptySearch />;
	}

	if (!data?.length && query.favorites) {
		return <EmptyFavorites />;
	}

	if (!data?.length) {
		return <EmptyBoards />;
	}

	return <div>{JSON.stringify(query)}</div>;
}
