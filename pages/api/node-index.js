import { getNodes, getNodesPageSize, getProfileData } from '@/lib/api'
import { addNode } from '@/lib/db'

export default async (req, res) => {
  let nodes = {};
  let profilesAdded = 0;

  try {
    if (req.query["last_validated"]) {
      nodes = await getNodes(req.query["last_validated"])
      if (nodes.data) {
        if (nodes.meta.total_pages > 1) {
          nodes = await getNodesPageSize(req.query["last_validated"], nodes.meta.number_of_results)
        }
        for (let node of nodes.data) {
          let profileData = null;
          try {
            profileData = await getProfileData(node.profile_url)
          } catch (error) {
            console.error('Unable to get node profile data:', error)
            continue;
          }
          if (profileData) {
            try {
              await addNode(profileData);
            } catch (error) {
              console.error('Unable to add node profile data to FB:', error)
              continue;
            }

            profilesAdded = profilesAdded + 1;
          }

        }
      } 
    }
    res.status(200).json(
      { "profilesAdded": profilesAdded }
    )
  } catch (error) {
    res.status(500).json({ error })
  }


}