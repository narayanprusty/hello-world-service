import hello from "../controllers/hello";

export default ({ app }) => app.route("/hello").get(hello.print);
