"use client";

import { Loading } from "@/components/auth/Loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import type { ReactNode } from "react";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
	return (
		<ClerkProvider>
			<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
				<Authenticated>{children}</Authenticated>
				<AuthLoading>
					<Loading />
				</AuthLoading>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}
