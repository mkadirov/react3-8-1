// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import employees from "@/data/employees";

export default function handler(req, res) {
  
    res.status(200).json(employees)
  
}
