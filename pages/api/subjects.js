import Subject from "schemas/subject";
import dbConnect from "utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const withResources = req.query?.rs === "true";
        const subjects = await Subject.aggregate().project({
          _id: 1,
          title: 1,
          description: 1,
          image: 1,
          resources: withResources ? 1 : { $size: "$resources" },
        });
        res.status(200).json({ data: subjects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
