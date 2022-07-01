// const posts = [
// 	{title:'Post One',body: 'This is post one'},
// 	{title:'Post Two',body:'This is post two'}
// ];

// function getPosts(){
// 	setTimeout(()=>{
// 		let output='';
// 		posts.forEach((post,index)=>{
// 			output+=`<li>${post.title}</li>`;
// 		})
// 		document.body.innerHTML=output;
// 	},1000);
// }

// getPosts();

// function createPost(post){
// 	setTimeout(()=>{
// 		posts.push(post);
// 	},1000);
// }

// createPost({title:'Post Three',body:'This is post three'});

// if we chane timing in the functions getPosts and createPost condition would be different

/***************************************************************/

const posts = [
	{title:'Post One',body: 'This is post one'},
	{title:'Post Two',body:'This is post two'}
];

function getPosts(){
	console.log('getPosts without timeout')
	setTimeout(()=>{
		console.log('getPosts with timeout');
		let output='';
		posts.forEach((post,index)=>{
			output+=`<li>${post.title}</li>`;
		})
		document.body.innerHTML=output;
	},1000);
}

function createPost(post,callback){
	console.log('createPost without timeout')
	setTimeout(()=>{
		posts.push(post);
		console.log('createPost with timeout');
		callback();
	},2000);
}

createPost({title:'Post Three',body:'This is post three'},getPosts);