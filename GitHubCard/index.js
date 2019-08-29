/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get("https://api.github.com/users/moaney")
      .then(res => {
        console.log(createCard(res.data))
      })
      .catch(err => console.log(err));
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.

          
*/


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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const img = document.createElement('img');
  img.setAttribute('src', [user.avatar_url]);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = user.name;

  const ptags = [];
  for (let i = 0; i < 6; i++){
    ptags.push(document.createElement('p'));
  }

  ptags[0].classList.add('username');
  ptags[0].textContent = user.login;

  ptags[1].textContent = `Location ${user.location || "Not available"}`;

  ptags[2].textContent = `Profile `


  const a = document.createElement('a');
  const aUrl = user['html_url'];
  a.setAttribute('href', aUrl);
  a.textContent = aUrl;
  ptags[2].appendChild(a)

  ptags[3].textContent = `Followers: ${user.followers}`
  ptags[4].textContent = `Following: ${user.following}`
  ptags[5].textContent = `Bio: ${user.bio}`

  cardInfo.appendChild(h3);
  ptags.forEach(p => cardInfo.appendChild(p));

  card.appendChild(img);
  card.appendChild(cardInfo);

  const cardsSection = document.querySelector('.cards');
  cardsSection.appendChild(card);
  return card;

}



const cardsSection = document.querySelector('.cards')
const followersArray = [];
axios.get(`https://api.github.com/users/tetondan/followers`)
      .then(followers => {
        followersArray = followers.data.map(follower => follower.login)

        followersArray.forEach(folloerLogin => {
          axios.get(`https://api.github.com/users/${followerLogin}`)
              .then(followerData => {
                cardsSection.appendChild(createCard(followerData.data))
              })
              .catch(err => console.log(err))
        })
      })
      .catch(err => console.log(err));
    cardsSection.appendChild(createCard(userData.data));







// const cardCreator = followersArray => {

//   const cardClass = document.createElement("div");
//   cardClass.classList.add("card");

//   const img = document.createElement("img");
//   img.src = res.data.avatar_url;

//   const cardInfo = document.createElement("div");
//   cardInfo.classList.add("card-info");

//   const h3 = document.querySelector("h3");
//   h3.classList.add("name");
//   h3.textContent = text;

//   const p1 = document.querySelector("p");
//   p1.classList.add("username");
//   p1.textContent = text;

//   const p2 = document.createElement("p");
//   p2.textContent = text;

//   const p3 = document.createElement("p");
//   p3.textContent = text;

//   const p4 = document.createElement("p");
//   p4.textContent = text;

//   const p5 = document.querySelector("p");
//   p5.textContent = text;

//   const p6 = document.querySelector("p");
//   p6.textContent = text;

//   return div;
// }


//   document.querySelector(".cards").appendChild(cardCreator(followersArray));