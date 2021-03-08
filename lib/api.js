export async function getNodes(lastValidatedTime) {
    return fetch(process.env.NEXT_PUBLIC_MURMURATIONS_INDEX_API_URL + `/nodes?last_validated=${lastValidatedTime}`
    ).then(data => data.json()).then(body => body)
}

export async function getNodesPageSize(lastValidatedTime, pageSize) {
    return fetch(process.env.NEXT_PUBLIC_MURMURATIONS_INDEX_API_URL + `/nodes?last_validated=${lastValidatedTime}&page_size=${pageSize}`
    ).then(data => data.json()).then(body => body)
} 

export async function getProfileData(url) {
    return fetch(url).then(data => data.json()).then(body => body)
}
