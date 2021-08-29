import Subject from "schemas/subject";
import dbConnect from "utils/mongodb";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const subid = req.query.id;
        const subject = await Subject.aggregate()

          .match({
            _id: mongoose.Types.ObjectId(subid),
          })
          .project({
            _id: 1,
            title: 1,
            resources: {
              _id: 1,
              title: 1,
              description: 1,
              image: 1,
            },
          });
        res.status(200).json({ data: subject });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
