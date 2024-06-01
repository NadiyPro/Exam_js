window.onload=function () {
    const finishDiv = document.createElement('div');
    finishDiv.classList.add('finishDiv');
    document.body.append(finishDiv);


    const urlParamspost = new URLSearchParams(window.location.search);
    const POST_ID = urlParamspost.get('id');

    const innerFDiv = document.createElement('div');
    innerFDiv.classList.add('innerDiv');
    innerFDiv.innerHTML = `<h3>${POST_ID}</h3>`;
    finishDiv.append(innerFDiv);


    fetch(`https://jsonplaceholder.typicode.com/posts/${POST_ID}/comments`)
        .then((response) => response.json())
        .then((pos) => console.log(pos))
}