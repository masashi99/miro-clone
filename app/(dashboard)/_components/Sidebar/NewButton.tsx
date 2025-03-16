import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export function NewButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="aspect-square">
					<button
						type="button"
						className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition"
					>
						<Plus />
					</button>
				</div>
			</DialogTrigger>
			<DialogContent className="p-0 bg-transparent border-none max-w-[430px]">
				<CreateOrganization />
			</DialogContent>
		</Dialog>
	);
}
