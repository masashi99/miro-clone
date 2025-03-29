import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
	children: React.ReactNode;
	side?: DropdownMenuContentProps["side"];
	sideOffset?: DropdownMenuContentProps["sideOffset"];
	id: string;
	title: string;
};

export function Actions({ children, side, sideOffset, id, title }: Props) {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => toast.success("Link copied"))
			.catch(() => toast.error("Failed to copy link"));
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				onClick={(e) => e.stopPropagation()}
				side={side}
				sideOffset={sideOffset}
				className="w-60"
			>
				<DropdownMenuItem onClick={handleClick} className="p-3 cursor-pointer">
					<Link2 className="h-4 w-4 mr-2" />
					Copy board link
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
