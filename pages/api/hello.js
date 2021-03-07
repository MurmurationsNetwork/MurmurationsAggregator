// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getNodes, getProfileData } from '@/lib/api'
import { addNode } from '@/lib/db'
import { getNodesFromFirebase } from '@/lib/db'

export default async (req, res) => {
  const nodes = await getNodes('complementary_currencies-v1');
  for (let node of nodes.data) {
    // console.log(node)
    const profileData = await getProfileData(node.profile_url)
    const addedNodesStatus = await addNode(profileData);
    console.log(addedNodesStatus)
  }

  res.status(200).json(
    nodes.data[1].profile_url
  )
}

// export default async (req, res) => {
//   const nodes = await getNodesFromFirebase();
//   console.log(nodes[0])
//   res.status(200).json(
//     nodes[0]
//   )
// }
