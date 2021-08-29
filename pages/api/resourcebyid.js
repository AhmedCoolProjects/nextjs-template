import Subject from "schemas/subject";
import dbConnect from "utils/mongodb";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const subid = req.query.subid;
        const resid = req.query.resid;
        const subject = await Subject.findOne({ _id: subid }).select({
          resources: {
            $elemMatch: {
              _id: resid,
            },
          },
        });
        const titles = await Subject.aggregate()
          .match({
            _id: mongoose.Types.ObjectId(subid),
          })
          .project({
            resources: {
              _id: 1,
              title: 1,
            },
          });

        res.status(200).json({ data: subject, titles: titles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
