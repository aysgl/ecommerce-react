import { subcatdata } from "../../../data/subcatdata";

export default (req, res) => {
  res.statusCode = 200
  res.json(subcatdata)
}