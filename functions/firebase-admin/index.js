const admin = require('firebase-admin');
const functions = require('firebase-functions');
const { object } = require('firebase-functions/v1/storage');
const BUCKET = 'vivid-pen-403105.appspot.com';

const initializeApp = (params) =>
  admin.initializeApp(
    params ? {
      credential: admin.credential.cert(params),
      databaseURL: 'https://vivid-pen-403105-default-rtdb.firebaseio.com/',
      storageBucket: BUCKET,
    } : {},
  );


const getBucket = (path) => {
  return admin.storage().bucket();
};

const firestoreRef = () => admin.firestore();

const pushDocument = async (node, data) => {
  const ref = await admin.firestore().collection(node).add(data);
  return ref.id;
};

const deleteDcument = async (node) => {
  await admin.firestore().doc(node).delete();
  return true;
};

const setDocument = (node, id, data) => admin.firestore().collection(node).doc(id).set(data);
const mergeDocument = (node, id, data) =>
  admin.firestore().collection(node).doc(id).set(data, { merge: true });
const updateDocument = (node, id, data) => admin.firestore().collection(node).doc(id).update(data);
const getReference = (node) => admin.firestore().collection(node);
const getDocuments = (node) => admin.firestore().collection(node).get();
const getDocument = (node, id) => admin.firestore().collection(node).doc(id).get();

const databaseOnceValue = (node) => admin.database().ref(node).once('value');
const databaseOnceValueByQuery = (node, key, value) =>
  admin.database().ref(node).orderByChild(key).equalTo(value).once('value');

const databaseCreateValue = (node, child, object) =>
  admin.database().ref(node).child(child).set(object);
const databasePushValue = (node, child, object) =>
  admin.database().ref(node).child(child).push(object);

const setDatabaseValue = (node, value) => admin.database().ref(node).set(value);


const updateValue = (node, object) => admin.database().ref(node).update(object);
const get = (node, child) => admin.database().ref(node).child(child).once('value');
const remove = (node, child) => admin.database().ref(node).child(child).remove();
const removeChild = (node, path, child) =>
  admin.database().ref(node).child(path).child(child).remove();

// update
const databaseUpdateValue = (node, child, object, onComplete) =>
  admin.database().ref(node).child(child).update(object, onComplete);

const databaseUpdateValueByQuery = (node, key, value, object, onComplete) =>
  admin.database().ref(node).orderByChild(key).equalTo(value);

const databaseTransaction = async (node, child, transactionUpdate, onComplete) =>
  admin.database().ref(node).child(child).transaction(transactionUpdate, onComplete);

const saveTransactional = (node, id, data) => {
  return new Promise((resolve, reject) => {
    databaseTransaction(
      node,
      id,
      (currentData) => {
        if (currentData === null) {
          return data;
        } else {
          return;
        }
      },
      (error, committed, snapshot) => {
        if (error) {
          reject(error);
        } else if (!committed) {
          resolve(null);
        } else {
          resolve(snapshot.val());
        }
      },
    );
  });
};

const deleteTransactional = (node, id, data) => {
  return new Promise((resolve, reject) => {
    databaseTransaction(
      node,
      id,
      (currentData) => {
        if (currentData !== null) {
          return data;
        } else {
          console.log('transaction failed');
          return;
        }
      },
      (error, committed, snapshot) => {
        if (error) {
          reject(error);
        } else if (!committed) {
          reject(new Error('transaction failed'));
        } else {
          resolve(snapshot.val());
        }
      },
    );
  });
};

const addFireCloud = (node, key, value) => {
  const db = admin.firestore();
  const docRef = db.collection(node).doc(key);
  return docRef.set(value);
};

const readFireCloud = (node, key) => {
  const db = admin.firestore();
  const docRef = db.collection(node).doc(key);
  return docRef.get();
};


const auth = admin.auth;

module.exports = {
  auth,
  initializeApp,
  databaseOnceValue,
  databaseOnceValueByQuery,
  databasePushValue,
  databaseCreateValue,
  databaseTransaction,
  databaseUpdateValue,
  updateValue,
  addFireCloud,
  readFireCloud,
  saveTransactional,
  remove,
  removeChild,
  setDatabaseValue,
  get,
  firestore: {
    get: getDocument,
    push: pushDocument,
    getAll: getDocuments,
    set: setDocument,
    merge: mergeDocument,
    update: updateDocument,
    getRef: getReference,
    remove: deleteDcument,
    ref: firestoreRef,
  },
  BUCKET: BUCKET,
  getBucket: getBucket,
};

