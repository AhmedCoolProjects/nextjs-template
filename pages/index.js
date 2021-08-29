import Head from "next/head";
import { Grid } from "@material-ui/core";
import SubjectCard from "@comp/dashboard/SubjectCard";

// export default function Home({ subjects }) {
export default function Home({ subjects }) {
  return (
    <div>
      <Head>
        <title>
          JINA BAC | Platforme colaborative pour s'organiser et bien préparer
          votre bac
        </title>
      </Head>
      {/* <div>
        <Grid style={{ marginTop: 12, marginBottom: 12 }} container spacing={3}>
          {subjects.map((subject) => (
            <SubjectCard
              subject={subject}
              baselink={`/subjects/${subject._id}`}
              key={subject._id}
            />
          ))}
        </Grid>
      </div> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const APP_URL = process.env.PUBLIC_NEXT_WEB_APP_URL;
//   const res = await fetch(`${APP_URL}/api/subjects`);
//   const subjects = await res.json();
//   return {
//     props: {
//       subjects: subjects?.data,
//     },
//   };
// }
