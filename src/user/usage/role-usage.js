import Role from '../domain/role.js';

const userRole = new Role('user');
const adminRole = new Role('admin');
console.log('admin is equal to user:', userRole.equals(adminRole));

const otherRole = new Role('other');
console.log(otherRole);
