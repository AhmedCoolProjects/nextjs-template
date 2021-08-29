import Head from "next/head";
import { Grid } from "@material-ui/core";
import SubjectCard from "@comp/dashboard/SubjectCard";
import ScrollNavbar from "@comp/utils/ScrollNavbar";

// export default function Index({ resources }) {
export default function Index({ resources }) {
  return (
    <div>
      <Head>
        <title>
          Trouver tous les ressources de français premier bac pour le régional |
          JINA BAC
        </title>
      </Head>
      {/* <ScrollNavbar
        sections={[
          {
            title: resources[0].title,
            link: "/",
          },
        ]}
      /> */}
      {/* <div>
        <h1 className="text-center text-2xl font-bold my-4">
          {resources[0].title}
        </h1>
        <Grid style={{ marginTop: 12, marginBottom: 12 }} container spacing={3}>
          {resources[0].resources?.map((resource) => (
            <SubjectCard
              baselink={`/resources/${resources[0]._id}---${resource._id}`}
              subject={resource}
              key={resource._id}
            />
          ))}
        </Grid>
      </div> */}
    </div>
  );
}

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: GET_PRODUCTS_IDS,
//   });
//   return {
//     paths:
//       data?.products?.nodes.map((product) => `/bornes/${product.id}`) || [],
//     fallback: true,
//   };
// }

// export async function getServerSideProps({ params }) {
//   const { data } = await client.query({
//     query: GET_PRODUCT_BY_ID,
//     variables: { id: params.id },
//   });
//   return {
//     props: {
//       productData: data?.product,
//     },
//   };
// }

// export async function getServerSideProps({ params }) {
//   const APP_URL = process.env.PUBLIC_NEXT_WEB_APP_URL;
//   const res = await fetch(`${APP_URL}/api/subjectbyid?id=${params.id}`);
//   const resource = await res.json();
//   return {
//     props: {
//       resources: resource?.data,
//     },
//   };
// }
