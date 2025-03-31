"use client";

import { RenameModal } from "@/components/modals/RenameModal";
import { useEffect, useState } from "react";

export function ModalProvider() {
	const [isMounted, setIdMounted] = useState(false);

	useEffect(() => {
		setIdMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <RenameModal />;
}
