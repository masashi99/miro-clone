"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useRenameModal } from "@/store/useRenameModal";
import { type FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

export function RenameModal() {
	const { isOpen, onClose, initialValues } = useRenameModal();
	const [title, setTitle] = useState(initialValues.title);
	const { mutate, pending } = useApiMutation(api.board.update);

	useEffect(() => {
		setTitle(initialValues.title);
	}, [initialValues.title]);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		mutate({ id: initialValues.id, title })
			.then(() => {
				toast.success("Board renamed");
				onClose();
			})
			.catch(() => toast.error("Failed to rename board"));
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogHeader>
						<DialogTitle>Edit board title</DialogTitle>
					</DialogHeader>
				</DialogHeader>
				<DialogDescription>Enter a new title for this board.</DialogDescription>
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						disabled={pending}
						required
						maxLength={60}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Board title"
					/>
					<DialogFooter>
						<DialogClose>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</DialogClose>
						<Button disabled={pending} type="submit">
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
