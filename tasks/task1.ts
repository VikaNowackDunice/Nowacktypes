interface Dictionary<T> {
  [key: string]: T;
}

interface FlattenConstructor {
  <T>(dict: Dictionary<T>): T[];
}

const flattenConstructor = function (): FlattenConstructor {
  return function <T>(dict: Dictionary<T>): T[] {
    return Object.values(dict);
  };
};

const flat1 = flattenConstructor();
const r1 = flat1<number>({ a: 1, b: 2 });
console.log(r1);

const flat2 = flattenConstructor();
const r2 = flat2<string>({ a: '1', b: '2' });
console.log(r2);