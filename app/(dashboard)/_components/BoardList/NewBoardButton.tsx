import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

type Props = {
	orgId: string;
	disabled?: boolean;
};

export function NewBoardButton({ orgId, disabled }: Props) {
	const { mutate, pending } = useApiMutation(api.board.create);

	const handleClick = () => {
		mutate({ orgId, title: "untitled" })
			.then((id) => {
				toast.success("Board created");
			})
			.catch(() => {
				toast.error("Failed to create board");
			});
	};

	return (
		<button
			type="button"
			disabled={disabled}
			onClick={handleClick}
			className={cn(
				"bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
				(pending || disabled) &&
					"opacity-75 hover:bg-blue-600 cursor-not-allowed",
			)}
		>
			<Plus className="h-12 w-12 text-white stroke-1" />
			<p className="text-sm text-white font-light">New Board</p>
		</button>
	);
}
