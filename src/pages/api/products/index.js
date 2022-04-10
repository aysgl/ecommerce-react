import { prodata } from "../../../data/prodata";

// export default function handler(request, response) {
//   const { method } = request;

//   if (method === "GET") {
//     return response.status(200).json(...prodata);
//   }

//   if (method === "POST") {
//     const { body } = request;
//     prodata.push({ ...body, id: prodata.length + 1 });
//     return response.status(200).json(prodata);
//   }
// }

export default (req, res) => {
  res.statusCode = 200
  res.json(prodata)
}