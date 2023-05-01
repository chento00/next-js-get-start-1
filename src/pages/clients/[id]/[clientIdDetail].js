import React from 'react'
import { useRouter } from 'next/router'
export default function ClintPageDetail() {
	const router=useRouter();
	const value=router.query.id;
	return (
		<>
			<h1>Clint page : {value}</h1>
		</>
	)
}
