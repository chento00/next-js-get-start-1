import React from 'react'
import Link from 'next/link';
export default function index() {
	const clients=[
		{id:"001",name:"chento"},
		{id:"002",name:"sokheng"}
	];
	return (
		<>
			<ul>
				{clients.map((item,index)=>(
					<li key={index}>
						<Link href={{
							pathname:`/clients/[id]`,
							query:{id: item.id}
						}}>{item.name}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
