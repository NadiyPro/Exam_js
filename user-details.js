// // id user // DOMContentLoaded
window.onload=function () {
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('detailsDiv');
    document.body.append(detailsDiv);


    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id')

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    detailsDiv.append(innerDiv);


    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=>response.json())
        .then((user)=>{
                innerDiv.innerHTML=`<h2> id: ${userId} <br> name: ${user.name} <br> username: ${user.username}</h2> <p>website: ${user.website} <br> phone: ${user.phone} <br> website: ${user.website}</p>`

                const divAddress = document.createElement('div');
                divAddress.classList.add('divAddress');
                divAddress.innerHTML=`<p>address: <br> city: ${user.address.city} <br> street: ${user.address.street} <br> suite: ${user.address.suite} <br> zipcode: ${user.address.zipcode} <br> geo: lat ${user.address.geo.lat}, lng ${user.address.geo.lng}</p>`

                const divCompany = document.createElement('div');
                divCompany.classList.add('divCompany');
                divCompany.innerHTML = `<p>company: <br> name: ${user.company.name} <br> catchPhrase: ${user.company.catchPhrase} <br> bs: ${user.company.bs}</p>`
                innerDiv.append(divAddress);
                innerDiv.append(divCompany);
            }
        )

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response)=>response.json())
        .then((userPosts)=> {
            const postButton = document.createElement('button');
            postButton.classList.add('postButton');
            postButton.innerHTML =`post of current user`
            innerDiv.append(postButton);

            postButton.onclick=function (e) {
                e.preventDefault();
                const divTitleBasic = document.createElement('div');
                divTitleBasic.classList.add('divTitleBasic')

                for(let userPost of userPosts){

                    const divTitle = document.createElement('div');
                    divTitle.classList.add('divTitle')
                    divTitle.innerHTML=`<p>${userPost.title}</p>`;
                    divTitleBasic.append(divTitle);

                    const postDetalButton = document.createElement('button');
                    postDetalButton.classList.add('postDetalButton');

                    const postA = document.createElement('a');
                    postA.classList.add('postA');
                    postA.innerHTML=`post-details`;
                    postA.href =`post-details.html?id=${userPost.id}`

                    postDetalButton.append(postA);
                    divTitle.append(postDetalButton);
                }
                innerDiv.append(divTitleBasic);

            }
        })

}
