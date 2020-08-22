type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
  id: 'ul',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);
// Does fetchedUserData exists if so access job
// Does job exists if so access title
// Helps us safely access nested properties
// and nested objects in our object data
// if undefined for the first argument
// don't try to access further