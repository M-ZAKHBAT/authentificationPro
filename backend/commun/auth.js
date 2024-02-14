import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const jwtToken = `${token}`.replace("Bearer", "").trim();

    try {
      console.log({ token });
      const payload = jwt.verify(jwtToken.trim(), "privatekey");
      if (payload) {
        console.log({ payload });
        req.user = payload;
        next();
      } else res.status(401).json();
    } catch (error) {
      res.status(401).json();
    }
  }
};
