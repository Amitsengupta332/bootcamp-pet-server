// import app from './app';
// import config from './config';

// async function main() {
//   try {
//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port} running in ${process.env.NODE_ENV} mode`);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();



import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import config from "./config";

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(
        `Example app listening on port ${config.port} running in ${process.env.NODE_ENV} mode`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

main();