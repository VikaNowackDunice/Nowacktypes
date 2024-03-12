interface IUser{
  id:number;
  login:string;
  role:string;
}
const user :IUser = {
  id: 1,
  login: 'test',
  role: 'user',
}

const checkPermissionsDecorator = (roles:string[]) => {
  return (user:IUser) => {
      return roles.includes(user.role);
  }
}

const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);

console.log(hasPermissions);