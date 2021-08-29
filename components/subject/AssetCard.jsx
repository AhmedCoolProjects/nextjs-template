import { Grid, Paper, IconButton, Link } from "@material-ui/core";
import { Launch } from "@material-ui/icons";

function AssetCard({ asset }) {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Paper
        elevation={3}
        className="flex flex-row py-3 px-2 items-center relative">
        <h1 className="text-xl flex-1 font-semibold uppercase">
          {asset?.title}
        </h1>
        <Link target="_blank" href={asset?.link}>
          <IconButton className="mx-2">
            <Launch />
          </IconButton>
        </Link>
      </Paper>
    </Grid>
  );
}

export default AssetCard;
