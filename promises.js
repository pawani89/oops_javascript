const post = [
    {title:'Post One', body:'this is post one'},
    {title:'Post Two', body:'this is post two'},
];
function getPosts(){
    setTimeout(()=>{
        let output = '';
        post.forEach(element => {
            output += `<li>${element.title}</li>`
        });
        document.body.innerHTML = output
    },1000)
}

function createPost(posts){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.push(posts)
            const error = false
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong!!!!')
            }
                },2000)
    })
    setTimeout(()=>{
post.push(posts)
    },2000)
}

// createPost({title:'Post three', body:'this is post three'}).then(getPosts)
// .catch(err=>console.log(err))
//promise.all
// const p1 = Promise.resolve('hello world');
// const p2 = 10;
// const p3 = new Promise((resolve,reject)=> setTimeout(resolve,2000,'goodbye'))
// const p4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
// Promise.all([p1,p2,p3,p4]).then((values)=> console.log(values))



// async await

// async function init(){
//    await createPost({title:'Post three', body:'this is post three'});
//    getPosts() 
// }
// init()

//async await with fetch
async function fetchUser(){
    const p4 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const p4Data = await p4.json(); 
console.log(p4Data);
}

fetchUser()