import generateId from '../../shared/infrastructure/id-generation/generate-id.js';
import EmailAddress from '../domain/email-address.js';
import emailRegistry from '../domain/email-registry.js';

const userId = generateId();
const email = new EmailAddress('test@example.com');
emailRegistry.setUserEmailAddress(userId, email);

console.log(`is ${email.value} free?`, emailRegistry.isEmailAvailable(email));
