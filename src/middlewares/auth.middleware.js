import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const { method, url } = req;
  const { token } = req.headers;

  const validateReqLogin = method == "POST" && url == "/login";
  const validateReqInsertPsicologo = method == "POST" && url == "/psicologos";

  const secret = "secret";

  if (!validateReqLogin && !validateReqInsertPsicologo) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ err: err.message });
      }
      next();
    });
  }
}
