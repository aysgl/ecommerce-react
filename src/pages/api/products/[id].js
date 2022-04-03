// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prodata } from "../../../data/prodata";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const person = prodata.find((person) => person.id.toString() === id);

    if (!person) {
      return response.status(400).json("User not found");
    }

    return response.status(200).json(person);
  }
}