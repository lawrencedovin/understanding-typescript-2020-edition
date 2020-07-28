window.onload = function() {

  // const ADMIN = 0;
  // const READ_ONLY = 1;
  // const AUTHOR = 2;

  enum Role {ADMIN, READ_ONLY, AUTHOR};

  const person = {
    name: 'Lawrence',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
  };

  if(person.role === Role.ADMIN) {
    console.log('is admin');
  }
}