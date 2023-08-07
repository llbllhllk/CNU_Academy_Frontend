import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "kang byeonghyeon",
    email: "black1663@naver.com",
    query: req.query,
  });
}
