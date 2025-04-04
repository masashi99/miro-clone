import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type Props = {
	title: string;
	authorLabel: string;
	createdAtLabel: string;
	isFavorite: boolean;
	onClick: () => void;
	disabled: boolean;
};

export function Footer({
	title,
	authorLabel,
	createdAtLabel,
	isFavorite,
	onClick,
	disabled,
}: Props) {
	return (
		<div className="relative bg-white p-3">
			<p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
			<p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">
				{authorLabel}, {createdAtLabel}
			</p>
			<button
				type="button"
				onClick={onClick}
				disabled={disabled}
				className={cn(
					"opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
					disabled && "cursor-not-allowed opacity-75",
				)}
			>
				<Star
					className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
				/>
			</button>
		</div>
	);
}
