window.onload = function() {

  // const person: {
  //   name: string;
  //   age: number;
  // } = {
  const person = {
    name: 'Lawrence',
    age: 30,
    hobbies: ['Sport', 'Cooking']
  };

  let favoriteActivities: string[];
  favoriteActivities = ['Eating'];
  // let favoriteActivities: any[];
  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); || Error! due to non-number ||
  }
}