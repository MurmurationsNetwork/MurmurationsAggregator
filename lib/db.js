import { algoliaClient } from '@/lib/algolia'
import firebase from '@/lib/firebase'

const firestore = firebase.firestore()

export function addNode(nodeId, nodeData) {
  const index = algoliaClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_INDEX)

  return firestore
    .collection('nodes')
    .doc(nodeId)
    .set(nodeData)
    .then(() => {
      nodeData.objectID = nodeId
      index.saveObject(nodeData)
    })
    .catch(error => {
      console.error('Error adding document: ', error)
    })
}

export async function getAllNodes() {
  const nodes = []
  await firestore
    .collection('nodes')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        try {
          nodes.push({
            id: doc.id,
            data: doc.data()
          })
        } catch (error) {
          console.error('Unable to add node data:', error)
        }
      })
    })
    .catch(error => {
      console.error('Error adding document: ', error)
    })
  return nodes
}

export async function getNodesBySchema(schema) {
  const nodes = []
  await firestore
    .collection('nodes')
    .where('linked_schemas', 'array-contains', schema)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        nodes.push({
          id: doc.id,
          data: doc.data()
        })
      })
    })
    .catch(error => {
      console.error('Error fetching document: ', error)
    })
  return nodes
}
