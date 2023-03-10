// import pg from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// const { Pool } = pg;

// const configDatabase = {
//   connectionString: process.env.DATABASE_URL,
//   ...(process.env.NODE_ENV === "production" && {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   }),
// };

// const connection = new Pool(configDatabase);

// export default connection;

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg; //abre o túnel de conexão entre o pg e o node

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.MODE === "production") configDatabase.ssl = true;

export const db = new Pool(configDatabase); //exporta a conexão pela var db
