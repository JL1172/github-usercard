import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const URL = 'https://api.github.com/users/JL1172'; 
const cards = document.querySelector('.cards');

axios.get(URL)
.then(resp => {
    cards.appendChild(cardMaker(resp.data)) ///ohhhh basically what happens here is that it takes an object and destructures it through this function
})
.catch(err=> {
  console.log(err)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/





/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

const forOthers = (id) => {
    axios.get(`https://api.github.com/users/${id}`)
    .then(res=> {
      cards.append(cardMaker(res.data)); 
    })
    .catch(err=> {
      console.error(err);
    })
};
followersArray.forEach(follower=> {
  return forOthers(follower); 
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker(object) {
 
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitHubAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  img.src = object.avatar_url;
  img.alt = 'gitHub user'
  cardInfo.classList.add('card-info');
  nameOfUser.classList.add('name');
  nameOfUser.textContent = object.name;
  username.classList.add('username');
  username.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent =  `Profile:`
  gitHubAddress.textContent = 'Link to profile'
  gitHubAddress.href = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent =  `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameOfUser);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(gitHubAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

cardMaker('yes')