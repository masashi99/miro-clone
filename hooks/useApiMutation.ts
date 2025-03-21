import { useMutation } from "convex/react";
import type { FunctionReference, OptionalRestArgs } from "convex/server";
import { useState } from "react";

export const useApiMutation = <Mutation extends FunctionReference<"mutation">>(
	mutationFunction: Mutation,
) => {
	const [pending, setPending] = useState(false);
	const apiMutation = useMutation(mutationFunction);

	const mutate = (...payload: OptionalRestArgs<Mutation>) => {
		setPending(true);
		return apiMutation(...payload)
			.finally(() => setPending(false))
			.then((result) => result)
			.catch((error) => {
				throw error;
			});
	};

	return { mutate, pending };
};
