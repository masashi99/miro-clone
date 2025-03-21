"use client";

import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/BoardList";
import { EmptyOrg } from "./_components/EmptyOrg";
type Props = {
	searchParams: {
		search?: string;
		favorites?: string;
	};
};

export default function DashboardPage({ searchParams }: Props) {
	const { organization } = useOrganization();
	return (
		<div className="h-full p-6">
			{organization ? (
				<BoardList orgId={organization.id} query={searchParams} />
			) : (
				<EmptyOrg />
			)}
		</div>
	);
}
