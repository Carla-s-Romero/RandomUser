async function getRandomUser(params) {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user)
}

function displayUser(user){
    const name = document.getElementById('name')
    const gender = document.getElementById('gender')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const location = document.getElementById('location')
    const image = document.getElementById('image')
    const age = document.getElementById('age')

        name.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
        gender.innerHTML = `${user.gender}`;
        email.innerHTML = `${user.email}`;
        phone.innerHTML = `${user.phone}`;
        image.setAttribute('src', `${user.picture.large}`);
        location.innerHTML = `${user.location.country}`;
        age.innerHTML = `${user.age}`;
    }
getRandomUser();