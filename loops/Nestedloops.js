// Write your code below


const bobsFollowers = ['john','jay','felix','lola'];
const tinasFollowers = ['jay','felix','grace'];
mutualFollowers = []

for(let i= 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++)
{
  if (bobsFollowers[i] === tinasFollowers[j]) {
   mutualFollowers.push(bobsFollowers[i])
  }
}
};