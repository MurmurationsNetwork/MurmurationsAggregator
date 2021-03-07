// import { compareDesc } from 'date-fns'

// import { getUserProfiles } from '@/lib/db-admin'
// import { auth } from '@/lib/firebase-admin'
import { getNodesFromFirebase } from '@/lib/db'

export default async (req, res) => {
    try {
        const nodes = await getNodesFromFirebase();
        res.status(200).json(nodes)
    } catch (error) {
        res.status(500).json({ error })
    }
}
