interface IObject<T>{
  [key:string]:T;
}

const transform = <T>(value:string, cb:(dict: IObject<number>)=>T): T => {
  const chars = value.split('');
  const dict = chars.reduce((acc, item) => {
      acc[item] = item.charCodeAt(0);
      return acc;
  },{} as IObject<number>);

  return cb(dict);
};



const getKeys = <T>(dict:IObject<T>) => Object.keys(dict);
const getValues = <T>(dict:IObject<T>) => Object.values(dict);

const keys = transform('test', getKeys);
const values = transform('test', getValues);

console.log(`keys: ${keys.join(', ')}`);
console.log(`values: ${values.join(', ')}`);