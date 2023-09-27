import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2])
    .then((values) => ({ photo: values[0], user: values[1] }))
    .catch(() => ({ photo: null, user: null }));
}
