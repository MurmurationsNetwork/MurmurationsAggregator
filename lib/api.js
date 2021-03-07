export async function getNodes(schema) {
    return fetch(process.env.NEXT_PUBLIC_MURMURATIONS_INDEX_API_URL + `/nodes?schema=${schema}`
    ).then(data => data.json()).then(body => body)
}

export async function getProfileData(url) {
    return fetch(url).then(data => data.json()).then(body => body)
}

// export async function getNodeStatus(node_id) {
//     return fetch(`${process.env.NEXT_PUBLIC_MURMURATIONS_INDEX_API_URL}/nodes/${node_id}`)
//         .then(res => res.json())
//         .then(body => body)
// }

// export async function deleteNode(node_id) {
//     return fetch(`${process.env.NEXT_PUBLIC_MURMURATIONS_INDEX_API_URL}/nodes/${node_id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     }).then(data => {
//         if (data.status === 200) return data
//         return data.json()
//     })
// }
