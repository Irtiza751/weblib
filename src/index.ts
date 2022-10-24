import { User } from './models/User';

const user = new User({ name: 'My name', age: 22});

user.set({ name: 'Abc' });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => { console.log('Change trigger 1') });
user.on('change', () => { console.log('Change trigger 2') });
user.on('click', () => { console.log('Click trigger') });
