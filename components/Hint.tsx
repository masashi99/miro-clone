import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

type Props = {
	children: React.ReactNode;
	label: string;
	side?: "top" | "bottom" | "left" | "right";
	align?: "start" | "center" | "end";
	sideOffset?: number;
	alignOffset?: number;
};

export function Hint({
	children,
	label,
	side,
	align,
	sideOffset,
	alignOffset,
}: Props) {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					side={side}
					align={align}
					sideOffset={sideOffset}
					alignOffset={alignOffset}
					className="text-white bg-black border-black"
				>
					<p className="font-semibold capitalize">{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
