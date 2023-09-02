// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import employees from "@/data/employees"



export default function handler(req, res) {
    const teamName = req.query.team

    const list = employees.filter(item => item.team == teamName)
    res.status(200).json(list)
  
}