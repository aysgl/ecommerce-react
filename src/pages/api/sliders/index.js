import { slidedata } from "../../../data/slidedata";

export default (req, res) => {
  res.statusCode = 200
  res.json(slidedata)
}