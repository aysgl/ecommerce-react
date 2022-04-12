import { prodata } from "../../../data/prodata";

export default (req, res) => {
  res.statusCode = 200
  res.json(prodata)
}