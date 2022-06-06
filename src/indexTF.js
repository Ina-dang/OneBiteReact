const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);

if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);
