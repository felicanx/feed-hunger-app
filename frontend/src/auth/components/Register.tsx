// import TextField from "@mui/material/TextField";

import { Box } from "@mui/material";

export const Register = () => {
  return (
    // <div className="m-0 p-0 w-full h-full flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <>
      {/* <div className="bg-error-500">helo</div> */}
      <Box
        sx={{
          height: "300px",
          width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          bgcolor: "error.main",
        }}
      ></Box>
      <div className="h-300 w-xs-100 w-sm-200 w-md-300 w-lg-400 box-border border-4 border-green-600 bg-error">
        body
      </div>

      {/* <div className="relative bg-white-100 flex flex-col gap-l p-l drop-shadow-xl">
        <div className="">
          Hello workld */}
      {/* <div className="container">
        <div className="">
          <span>Sign In to Account</span>
        </div>
        <div className="">
          <TextField
            required
            id="email-signin"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            required
            id="password-signin"
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
      </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
