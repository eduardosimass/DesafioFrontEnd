const user = document.getElementById('user');
const btn = document.getElementById('btn-search');
const renderInfo = document.getElementById('info');



btn.addEventListener('click', (e) => {
    e.preventDefault()
    const userValue = user.value;
    consultUser(userValue)

});

/*Listar Usuarios*/

function consultUser(user) {
    const URL = `https://api.github.com/users/${user}`

    const request = fetch(URL)

    request
        .then(data => data.json())
        .then(data => {
            const {
                name,
                location,
                bio,
                email,
                avatar_url,
                followers,
                following
            } = data;

            createSectionInfo(name, location, bio, email, avatar_url, followers, following);
        });
}


function createSectionInfo(name, location, bio, email, avatar_url, followers, following) {
    const tableInfo = `
<table class="table">
<thead>
<tr>
<th>Foto</th>
<th>Nome</th>
<th>Bio</td> 
<th>Email</td>
<th>Local</td>
<th>Seguindo</td>
<th>Seguidores</td>

</tr>
</thead>
<tbody>
<tr>
<td class="avatar"><img src=${avatar_url}  alt=""> </td>
<td>${name}</td>
<td>${bio}</td>
<td>${email}</td>
<td>${location}</td>
<td>${followers}</td>
<td>${following}</td>
</tr>
<style>
 img{
    border-radius:50%;
    width: 80px;
    height: 80px;
}
    
}

</style>
</tbody>
</table>`
    renderInfo.innerHTML = tableInfo;
}


