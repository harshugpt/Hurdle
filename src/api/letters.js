import data from "../../data/db.json";

export default (req, res) => {
  res.status(200).json(data.letters);
};
