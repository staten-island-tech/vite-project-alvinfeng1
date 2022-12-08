import { presidents } from "./presidents.js";
/* import togglemode from "./toggle.js"; */
import "..styles/styles.css";

data
  .filter((presidents) => (presidents.alive = false))
  .foreach((presidents) => {
    console.log(presidents.presidents, presidents.alive);
  });
