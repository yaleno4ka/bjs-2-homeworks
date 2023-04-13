function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]); 
    }


function getUsersNamesInAgeRange(users, gender) {

   return users.filter(user => gender ===user.gender).map(user => user.age).reduce((sum, age, index, userAges) => sum + age/userAges.length,0);
  
}