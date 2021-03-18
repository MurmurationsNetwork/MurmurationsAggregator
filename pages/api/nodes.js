import { getAllNodes, getNodesBySchema } from '@/lib/db'

export default async (req, res) => {
  let nodes = {}
  try {
    if (req.query['schema']) {
      nodes = await getNodesBySchema(req.query['schema'])
    } else {
      nodes = await getAllNodes()
    }
    res.status(200).json(nodes)
  } catch (error) {
    res.status(500).json({ error })
  }
}
