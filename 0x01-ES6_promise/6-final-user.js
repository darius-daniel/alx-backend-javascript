import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  const result = [];

  Promise.all([promise1, promise2])
    .then((values) => {
      for (const value of values) {
        result.push({ status: 'fulfilled', value });
      }
    })
    .catch((error) => {
      result.push({ status: 'rejected', value: error });
    });

  return result;
}
