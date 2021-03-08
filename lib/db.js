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

export async function getAllNodes() {
    const nodes = [];
    await firestore.collection('nodes').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                try {
                    console.log(doc)
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

export async function getNodesBySchema(schema) {
    const nodes = [];
    console.log(schema)
    await firestore.collection("nodes")
        .where("linked_schemas", "array-contains", schema)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                nodes.push({
                    id: doc.id,
                    data: doc.data()
                })
            });
        })
        .catch((error) => {
            console.error("Error fetching document: ", error);
        });
    return nodes
}