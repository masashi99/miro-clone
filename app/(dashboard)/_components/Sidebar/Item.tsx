"use client";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

type Props = {
	id: string;
	name: string;
	imageUrl: string;
};

export function Item({ id, name, imageUrl }: Props) {
	const { organization } = useOrganization();
	const { setActive } = useOrganizationList();

	const isActive = organization?.id === id;

	const handleClick = () => {
		if (!setActive) return;

		setActive({ organization: id });
	};

	return (
		<div className="aspect-square">
			<Image
				src={imageUrl}
				alt={name}
				onClick={handleClick}
				fill
				className={cn(
					"rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
					isActive && "opacity-100",
				)}
			/>
		</div>
	);
}
