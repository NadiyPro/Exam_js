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
        .then((posts) =>{
                innerFDiv.innerHTML= `<h2>id: ${posts.id} <br> userId: ${posts.userId} </h2> <h3>title: ${posts.title} <br> body: ${posts.body} </h3>`
            }
        )

    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}/comments`)
        .then((response) => response.json())
        .then((comments) => console.log(comments))

    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}/comments`)
        .then((response) => response.json())
        .then((comments) => {
            const commentBasicFDiv = document.createElement('div');
            commentBasicFDiv.classList.add('commentBasicFDiv');

            const lastButton = document.createElement('button');
            lastButton.classList.add('lastButton');
            const lastA = document.createElement('a');
            lastA.classList.add('lastA');
            lastA.innerHTML=`back`;
            lastA.href =`index.html`
            lastButton.append(lastA);
            innerFDiv.append(lastButton);

            for(let comment of comments){
                const commentFDiv = document.createElement('div');
                commentFDiv.classList.add('commentFDiv');
                commentFDiv.innerHTML=`<p> postId: ${comment.postId} <br> id: ${comment.id} <br> name: ${comment.name} <br> email: ${comment.email} <br> body: ${comment.body}</p>`

                finishDiv.append(commentBasicFDiv);
                commentBasicFDiv.append(commentFDiv);
                console.log(comment)
            }
        })
}