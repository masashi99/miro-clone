"use client";
import { useUser } from "@clerk/nextjs";

export default function Home() {
	const hoge = useUser();
	console.log(hoge);
	return <div>hoge</div>;
}
