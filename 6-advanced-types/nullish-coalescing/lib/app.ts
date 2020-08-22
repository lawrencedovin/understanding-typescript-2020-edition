type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
const userInput = null;
const storedData = userInput ?? 'DEFAULT';
// if not null or undefined use that value.
// if null use 'DEFAULT'