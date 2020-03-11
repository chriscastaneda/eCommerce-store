/**dynamic Url variable */
const baseUrl =
  process.env.NODE_ENV === "production" /**if in prod */
    ? `https://deployment-url.now.sh`
    : `http://localhost:3000`; /**else */

export default baseUrl;
