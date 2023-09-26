import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const [photo, user] = result;
      // eslint-disable-next-line no-console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('Signup system offline');
    });
}
