import * as dotenv from "dotenv";
import express from "express";
import path from "path";

// port is now available to the Node.js runtime
// as if it were an environment variable
/*
if (!process.env.SERVER_PORT) {
    process.exit(1);
  }
const port = process.env.SERVER_PORT;
*/
const port = "8080";
const app = express();
dotenv.config();
// Configure Express to use EJS
app.set( "views", path.join( __dirname, "../views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
