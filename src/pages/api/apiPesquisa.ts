// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = req.body.query;
    const { data } = await axios.get(
      `http://44.209.172.27:5001/apiPesquisa/${query}`
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
    });
  }
}
