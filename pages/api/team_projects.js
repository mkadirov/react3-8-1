// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import teamsData from "@/data/teamProjects"

export default function handler(req, res) {
  if(req.method == 'GET') {
    res.status(200).json(teamsData)
  }
}
