import Role from '../domain/role.js';

const role1 = new Role('developer');
const role2 = new Role('designer');
console.log(`${role1.name} is equal ${role2.name}?`, role1.equals(role2));
