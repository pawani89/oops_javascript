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

function createPost(posts, callback){
    setTimeout(()=>{
post.push(posts)
callback()
    },2000)
}

// the op is only one and two. not three
// since three  need to wait for 2 secs but dom is already printed.
// instead of called get post seperately we will
// call is as a callback to the getpost, means
// new post created and straigth away printed than waiting 2 secs for creation.
//getPosts();
createPost({title:'Post Three', body:'this is post three'},getPosts)