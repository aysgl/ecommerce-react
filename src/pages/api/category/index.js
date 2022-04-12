import { catdata } from "../../../data/catdata";

export default (req, res) => {
  res.statusCode = 200
  res.json(catdata)
}