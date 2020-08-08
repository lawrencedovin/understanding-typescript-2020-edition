window.onload = function() {

  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: 'Lawrence',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
  };

  person.role.push('admin');
  //person.role[1] = 10;
}