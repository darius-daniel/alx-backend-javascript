import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2])
    .then((values) => {
      for (const value of values) {
        if (value.status === 'rejected') {
          value.reason = value.value;
          value.value = value.reason;
          delete value.reason;
        }
      }
    });
}
