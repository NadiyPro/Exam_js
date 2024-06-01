// // id post
window.onload=function () {
    const finishDiv = document.createElement('div');
    finishDiv.classList.add('finishDiv');
    document.body.append(finishDiv);


    const urlParamspost = new URLSearchParams(window.location.search);
    const POST_ID = urlParamspost.get('id');

    const innerFDiv = document.createElement('div');
    innerFDiv.classList.add('innerDiv');
    finishDiv.append(innerFDiv);


    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}`)
        .then((response) => response.json())
        .then((posts) => console.log(posts))

    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}`)
        .then((response) => response.json())
        .then((posts) =>{
            innerFDiv.innerHTML= `<h2>id: ${posts.id} <br> userId: ${posts.userId} </h2> <h3>title: ${posts.title} <br> body: ${posts.body} </h3>`
            }
        )

    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}/comments`)
        .then((response) => response.json())
        .then((comments) => console.log(comments))
}