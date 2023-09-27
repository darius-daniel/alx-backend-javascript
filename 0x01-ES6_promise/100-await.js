import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => ({ photo: values[0], user: values[1] }))
    .catch(() => ({ photo: null, user: null }));
}
