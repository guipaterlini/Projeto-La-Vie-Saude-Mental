// import jwt from "jsonwebtoken";

// export const login = async (req, res) => {
//   const { user, password } = req.body;

//   const { pass } = await findUserByName(user);

//   console.log(pass);

//   if (password === pass) {
//     const secret = "secret";

//     const token = jwt.sign({ user }, secret, { expiresIn: "1h" });

//     return res.status(202).json({ token });
//   }

//   res.status(401).json({ message: "Credenciais inválidas" });
// };
