import Image from "next/image";
import { Button, Paper } from "@material-ui/core";
import { Email, LinkedIn } from "@material-ui/icons";

function ProfileC({ size, image, linkedIn, email, name }) {
  return (
    <Paper className="w-full p-4 flex flex-col items-center relative justify-center space-y-2 ">
      <h1 className="absolute left-4 top-4 text-xl">Professor</h1>
      <Image
        src={image}
        objectFit="cover"
        width={size}
        height={size}
        className="rounded-full mt-3"></Image>
      <h1 className="text-xl mt-2">Mr/s: {name}</h1>
      <div className="w-10/12 mt-2 items-center flex flex-col space-y-3">
        <Button
          href={email ? email : "/"}
          className="w-full"
          variant="outlined"
          color="primary"
          endIcon={<Email />}>
          email
        </Button>
        <Button
          href={linkedIn ? linkedIn : "/"}
          className="w-full"
          variant="outlined"
          color="primary"
          endIcon={<LinkedIn />}>
          linkedIn
        </Button>
      </div>
    </Paper>
  );
}

export default ProfileC;
