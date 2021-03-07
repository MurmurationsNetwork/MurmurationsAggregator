import firebase from '@/lib/firebase'

const firestore = firebase.firestore();

export function addNode(nodeData) {
    let nodeName = nodeData.name;
    if (nodeName.indexOf('/') > 0) {
        nodeName = nodeName.split('/').join('*')
    }

    return firestore.collection('nodes').doc(nodeName).set(nodeData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export async function getNodesFromFirebase() {
    const nodes = [];
    await firestore.collection('nodes').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                try {
                    nodes.push({
                        id: doc.id,
                        data: doc.data()
                    })
                } catch (error) {
                    console.error('Unable to add node data:', error)
                    // return { error }
                }
            });
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    return nodes
}