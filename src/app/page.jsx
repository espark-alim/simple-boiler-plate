import { Stack, Typography } from "@mui/material";

const Page = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
      spacing={2}
    >
      <Typography variant="h1">Home</Typography>
    </Stack>
  );
};

export default Page;
