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

function createPost(post){
	console.log('createPost without timeout')
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log('createPost with timeout')
			posts.push(post);

			const error = false;

			if(!error){
				resolve();
			}
			else{
				reject('Error: Something went wrong');
			}
		},2000);
	});
}

// //createPost({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>console.log(err));


// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
// 	setTimeout(resolve,2000,'Goodbye')
// });

// Promise.all([promise1,promise2,promise3]).then((
// 	(values)=>console.log(values)));

async function init(){
	await createPost({title:'Post Three',body:'This is post three'});
	getPosts();
}

init();