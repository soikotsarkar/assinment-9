//import Menu from "@/app/components/Menu";

import Menu from "../components/Menu";

async function getData(){
	let res = await fetch('https://dummyjson.com/products')
	let json = await res.json()
	return json['products'];
  }
const page = async () => {
	let data = await getData()
	return (
		<div>
			<Menu/>
			<h1>This is product page</h1>
			{data.map((item,index)=>{
        return <div key={index}>
       <h1>{item['title']}</h1>
       <h1>{item['price']}</h1>   
        </div>
      })}
		</div>
	);
};

export default page;