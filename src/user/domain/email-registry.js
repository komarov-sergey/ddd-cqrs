const emailAddressesByUser = new Map();

const emailRegistry = {
  setUserEmailAddress(userId, emailAddress) {
    if (!this.isEmailAvailable(emailAddress)) throw new Error('e-mail in use');
    emailAddressesByUser.set(userId, emailAddress);
  },
  isEmailAvailable(emailAddress) {
    const usedEmailAddresses = Array.from(emailAddressesByUser.values());
    return !usedEmailAddresses.some(
      usedEmailAddress => usedEmailAddress.equals(emailAddress));
  },
};

export default emailRegistry;
