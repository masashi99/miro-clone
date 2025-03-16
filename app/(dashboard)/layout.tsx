import { Navbar } from "./_components/Navbar";
import { OrgSidebar } from "./_components/OrgSidebar";
import { Sidebar } from "./_components/Sidebar";

type Props = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<main className="h-full">
			<Sidebar />
			<div className="pl-[60px] h-full">
				<div className="flex gap-x-3 h-full">
					<OrgSidebar />
					<div className="h-full flex-1">
						<Navbar />
						{children}
					</div>
				</div>
			</div>
		</main>
	);
}
