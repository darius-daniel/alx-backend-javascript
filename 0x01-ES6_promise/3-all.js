import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  promise1.then((value1) => {
    promise2.then((value2) => {
      console.log(`${value1.body} ${value2.firstName} ${value2.lastName}`);
    }, (error) => { console.error('Signup system offline', error); });
  }, (error) => { console.error('Signup system offline', error); });
}
