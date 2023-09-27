import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user, photo;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    return { photo: null, user: null };
  } finally {
    return ({ photo, user });
  }
}
