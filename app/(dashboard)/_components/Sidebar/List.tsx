"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./Item";

export function List() {
	const { userMemberships } = useOrganizationList({
		userMemberships: { infinite: true },
	});
	if (!userMemberships.data?.length) return null;

	return userMemberships.data.map((mem) => (
		<ul className="space-y-4 relative" key={mem.organization.id}>
			<Item
				id={mem.organization.id}
				imageUrl={mem.organization.imageUrl}
				name={mem.organization.name}
			/>
		</ul>
	));
}
