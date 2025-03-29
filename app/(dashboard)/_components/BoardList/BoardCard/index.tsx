import { Actions } from "@/components/Actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "./Footer";
import { Overlay } from "./Overlay";

type Props = {
	id: string;
	title: string;
	authorName: string;
	authorId: string;
	createAt: number;
	imageUrl: string;
	orgId: string;
	isFavorite: boolean;
};

export function BoardCard({
	id,
	title,
	authorName,
	authorId,
	createAt,
	imageUrl,
	orgId,
	isFavorite,
}: Props) {
	const { userId } = useAuth();

	const authorLabel = userId === authorId ? "You" : authorName;
	const createdAtLabel = formatDistanceToNow(createAt, { addSuffix: true });
	return (
		<Link href={`/board/${id}`}>
			<div className="group aspect-[100/127] boarder rounded-lg flex flex-col jutify-between overflow-hidden">
				<div className="relative flex-1 bg-amber-50">
					<Image src={imageUrl} alt={title} fill className="object-fit" />
					<Overlay />
					<Actions id={id} title={title} side="right">
						<button
							type="button"
							className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline:none"
						>
							<MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
						</button>
					</Actions>
				</div>
				<Footer
					isFavorite={isFavorite}
					title={title}
					authorLabel={authorLabel}
					createdAtLabel={createdAtLabel}
					onClick={() => {}}
					disabled={false}
				/>
			</div>
		</Link>
	);
}

BoardCard.Skelton = function BoardCardSkelton() {
	return (
		<div className="group aspect-[100/127] boarder rounded-lg flex flex-col justify-between overflow-hidden">
			<Skeleton className="h-full w-full" />
		</div>
	);
};
