/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
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
/* Step 4: Pass the data received from Github into your function, 
          create a new component and add it to the DOM as a child of .cards
*/
  
//Using axios to send a GET request
axios.get('https://api.github.com/users/funmi7')
.then( response => {
//Passing the data received into my function
const githubCreatorData = githubCreator(response.data);
   cardContainer.appendChild(githubCreatorData);
})

.catch(error => {
  console.log('error: ', error);
});


const cardContainer = document.querySelector('.cards');

//A component function
function githubCreator({'avatar_url':avatarUrl, name, login, location, 'html_url':htmlUrl, followers, following, bio}) {
  const cardDiv = document.createElement('div');
  const image = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const usersName = document.createElement('h3');
  const userName = document.createElement('p');
  const locations = document.createElement('p');
  const profile = document.createElement('p');
  const profileUrl = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const bios= document.createElement('p');

  image.setAttribute('src', avatarUrl);
  usersName.textContent = name;
  userName.textContent = login;
  locations.textContent = `Location: ${location}`;
  profile.textContent = `profile: `;
  profileUrl.textContent = htmlUrl;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  bios.textContent = `Bio: ${bio}`;
  profileUrl.setAttribute('href', 'https://github.com/Funmi7');
  cardInfoDiv.classList.add('card-info');
  usersName.classList.add('name');
  userName.classList.add('username');
  cardDiv.classList.add('card');

  cardDiv.appendChild(image);
  cardDiv.appendChild(cardInfoDiv);
  
  let elements = [usersName, userName, locations, profile, userFollowers,
                   userFollowing, bios]

  elements.map((element => {
    cardInfoDiv.appendChild(element);
  }))
  profile.appendChild(profileUrl);
  return cardDiv;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function gitLinks(gitHandles) {
  return  axios.get(`https://api.github.com/users/${gitHandles}`);
 }
 followersArray.forEach((item) => {
   gitLinks(item)
   .then( response => {
    githubCreatorData = githubCreator(response.data);
     cardContainer.appendChild(githubCreatorData);
     })
   .catch(error => {
     console.log(error);
   })
 })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
