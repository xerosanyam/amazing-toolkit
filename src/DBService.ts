import admin from 'firebase-admin'

const init = ({
  credential,
  databaseURL,
  storageBucket
}: {
  credential: any
  databaseURL: string
  storageBucket: string
}) => {
  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL,
    storageBucket
  })
}

const getUserByEmail = (email: string) => {
  return admin.auth().getUserByEmail(email)
}

const getUserByUID = (uid: string) => {
  return admin.auth().getUser(uid)
}

const setPath = (path: string, val: string) => {
  return admin
    .database()
    .ref(path)
    .set(val)
}

const getPath = async (path: string) => {
  const res = await admin
    .database()
    .ref(path)
    .once('value')
  return res.val()
}

const uploadFile = async (file: any, path: string) => {
  const metadata = {
    contentType: file.type
  }
  const bucket = admin.storage().bucket()
  await bucket.upload(file, {
    destination: path,
    metadata
  })
}

const updatePath = (path: string, val: string) => {
  return admin
    .database()
    .ref(path)
    .update(val)
}

const pushToPath = (path: string, val: string) => {
  return admin
    .database()
    .ref(path)
    .push()
    .set(val)
}

const removePath = (path: string) => {
  return admin
    .database()
    .ref(path)
    .remove()
}
export default {
  getPath,
  getUserByEmail,
  getUserByUID,
  init,
  pushToPath,
  removePath,
  setPath,
  updatePath,
  uploadFile
}
