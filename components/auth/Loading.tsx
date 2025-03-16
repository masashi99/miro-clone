import Image from "next/image";

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center h-full w-full">
			<Image
				src="/logo.svg"
				alt="logo"
				className="animate-pulse duration-700"
				width={120}
				height={120}
				priority
			/>
		</div>
	);
}
