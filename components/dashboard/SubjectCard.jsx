import {
  Card,
  CardContent,
  CardActionArea,
  Collapse,
  IconButton,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import { ExpandMore, Launch } from "@material-ui/icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: 8,
    marginRight: 8,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    marginLeft: 8,
    marginRight: 8,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

function SubjectCard({ subject, baselink }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="w-full relative">
        <CardActionArea>
          <div className="w-full relative h-[250px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={subject.image}
              alt={subject.title}
            />
          </div>
        </CardActionArea>
        <div className="flex w-full flex-row items-center py-3 pr-1 pl-4 relative">
          <h1 className="text-xl flex-1 text-gray-300">{subject.title}</h1>
          <Link href={baselink} passHref>
            <IconButton>
              <Launch />
            </IconButton>
          </Link>
          <IconButton
            className={expanded ? classes.expandOpen : classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMore />
          </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h1 className="text-xl underline">description:</h1>
            <h1 className="text-base p-2 text-left">{subject.description}</h1>
            <Link href={baselink} passHref>
              <Button
                variant="outlined"
                fullWidth
                color="primary"
                style={{ marginTop: 12 }}
                endIcon={<Launch color="primary" />}>
                check more
              </Button>
            </Link>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default SubjectCard;
