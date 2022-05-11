import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function authorize(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(401).json('No token provided');

  jwt.verify(token, process.env.JWTSECRET, (err, res) => {
    if (err) return res.status(401).json('Failed to authenticate token');
    req.userId = res.id;
    next();
  });
}
