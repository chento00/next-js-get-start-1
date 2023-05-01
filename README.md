1. 	to extract value from pathVariable 
	-  use to import useRouter from 'next/router'
	    Example : import { useRouter } from 'next/router'
	-  and you want to extract value from that field 
		const router = useRouter();
		const val=router.query.id; // extract value id 
	-	to extract value from a lot of path variable
		in your file must use : [...slug].js
		then when router.query all that path variable become an array 
		Example : that in folder blog
		http://localhost:3000/blog/12-2323/21/23/23324/23432r
		when you console.log(router.query) you will get object an array 
		{
			"slug": [
				"12-2323",
				"21",
				"23",
				"23324",
				"23432r"
			]
		}
2. 	to router from one to page to another page 
	-	use must import Link 
		import Link from 'next/link';
	- 	link use to navigate from one to another page without reload the page
		Example :  <Link href='/' >Home</Link>
	-	dynamic routing you create an array object that have id and name 
		Example : 
				const clients=[
					{id:"001",name:"chento"},
					{id:"002",name:"sokheng"}
				];
			then you loop it : 
				{clients.map((item,index)=>(
					<li key={index}>
						<Link href={{
							pathname:`/clients/[id]`,
							query:{id: item.id}
						}}>{item.name}</Link>
					</li>
				))}
	- 	to navigate from one page to another page instead of using Link can use 'push'
		Example : you the user click on a button you want to navigate to another page 
				,so we use with router
		==============================
		import {Router} from 'next/router';
		const router= Router();
		const handleClick(){
			router.push('/home')
		}
		or
		const handleClick(){
			router.push({
				pathname:'client/[id]/[clientIdDetail]'
				query:{id:"001",clientIdDetail:"product-001"}
			})
		}
		* it mean when call that function and the user click it will naviage to that page
		===============================
3. customer error page
	-	just define a file name 404.js then custom it , it not only 404.js it depen on what your error 
4.	boilerplate code : refer to section of code that repeat in multiple places 