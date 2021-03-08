import { getNodes, getNodesPageSize, getProfileData } from '@/lib/api'
import { addNode } from '@/lib/db'

export default async (req, res) => {
  let nodes = {};
  let profilesAdded = 0;

  if (req.query["last_validated"]) {
    nodes = await getNodes(req.query["last_validated"])
    if (nodes.data) {
      if (nodes.meta.total_pages > 1) {
        nodes = await getNodesPageSize(req.query["last_validated"], nodes.meta.number_of_results)
      }
      for (let node of nodes.data) {
        const profileData = await getProfileData(node.profile_url)
        await addNode(profileData)
        profilesAdded = profilesAdded + 1
      }
    }
  }
  res.status(200).json(
    { "profilesAdded": profilesAdded }
  )
}