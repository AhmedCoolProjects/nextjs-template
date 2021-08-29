import Head from "next/head";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import AssetCard from "@comp/subject/AssetCard";
import ScrollNavbar from "@comp/utils/ScrollNavbar";

export default function Index({ assets, titles }) {
  // export default function Index({ assets, titles }) {
  // const sections = titles[0]?.resources?.map((title) => {
  //   return {
  //     title: title.title,
  //     link: `/resources/${assets?._id}---${title._id}`,
  //   };
  // });
  return (
    <div>
      <Head>
        <title>
          Trouver tous les ressources de français premier bac pour le régional |
          JINA BAC
        </title>
      </Head>
      {/* <ScrollNavbar sections={sections} />
      <div className="w-full items-center relative flex flex-col">
        <h1 className="text-center text-2xl font-bold my-4">
          {assets?.resources[0].title}
        </h1>
        <Image
          src={assets?.resources[0].image}
          width={300}
          height={300}
          objectFit="contain"
          alt={assets?.resources[0].title}
        />
        <Grid style={{ marginTop: 12, marginBottom: 12 }} container spacing={3}>
          {assets?.resources[0]?.assets?.map((asset) => (
            <AssetCard asset={asset} key={asset._id} />
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
//   const subid = params.id.split("---")[0];
//   const resid = params.id.split("---")[1];
//   const res = await fetch(
//     `${APP_URL}/api/resourcebyid?subid=${subid}&resid=${resid}`
//   );
//   const asset = await res.json();
//   return {
//     props: {
//       assets: asset?.data,
//       titles: asset?.titles,
//     },
//   };
// }
