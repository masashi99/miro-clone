import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ConfirmModal } from "./ConfirmModal";
import { Button } from "./ui/button";
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
	const { mutate, pending } = useApiMutation(api.board.remove);

	const handleCopy = (e: React.MouseEvent) => {
		e.stopPropagation();
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => toast.success("Link copied"))
			.catch(() => toast.error("Failed to copy link"));
	};

	const handleDelete = () => {
		mutate({ id })
			.then(() => toast.success("Board deleted"))
			.catch(() => toast.error("Failed to delete board"));
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
				<DropdownMenuItem onClick={handleCopy} className="p-3 cursor-pointer">
					<Link2 className="h-4 w-4 mr-2" />
					Copy board link
				</DropdownMenuItem>
				<ConfirmModal
					header="Delete board?"
					description="This will delete the board and all of its contents."
					disabled={pending}
					onConfirm={handleDelete}
				>
					<Button
						variant="ghost"
						className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
					>
						<Trash2 className="h-4 w-4 mr-2" />
						Delete
					</Button>
				</ConfirmModal>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
