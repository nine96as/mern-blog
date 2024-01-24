import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(403).json({ error: 'Access denied' });

  jwt.verify(token, process.env.TOKEN_SECRET, (e, user) => {
    if (e) return res.status(403).json({ error: 'Invalid token' });

    req.user = user;
    next();
  });
};
