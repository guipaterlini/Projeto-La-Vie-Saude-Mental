import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { pass, nome } = await findUserByName(email);

  console.log(pass);

  if (password === pass) {
    const secret = "secret";

    const token = jwt.sign({ email, nome }, secret, { expiresIn: "1h" });

    return res.status(202).json({ token });
  }

  res.status(401).json({ message: "Credenciais inválidas" });
};
