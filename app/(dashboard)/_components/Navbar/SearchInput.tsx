import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import type { ChangeEvent } from "react";
import { useDebounceCallback } from "usehooks-ts";

export function SearchInput() {
	const router = useRouter();

	const handleChange = useDebounceCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const url = qs.stringifyUrl(
				{
					url: "/",
					query: {
						search: e.target.value,
					},
				},
				{ skipEmptyString: true, skipNull: true },
			);
			router.push(url);
		},
	);

	return (
		<div className="w-full relative">
			<Search className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground h-4 w-4" />
			<Input
				className="w-full max-w-[516px] pl-9"
				placeholder="Search boards"
				onChange={handleChange}
			/>
		</div>
	);
}
