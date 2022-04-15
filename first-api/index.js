
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));

};
function displayUsers(users){
    const ul = document.getElementById('ul');
    for (const user of users){
        const li = document.createElement('li');
            li.innerText = `
            name: ${user.name}`;
            ul.appendChild(li);
    }
};
