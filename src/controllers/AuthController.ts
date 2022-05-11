import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import 'dotenv/config';

class AuthController {
  async login (req, res) {
    if(req.body?.email != null && req.body?.password != null){
      const password = crypto.createHash('sha256').update(req.body?.password).digest('hex');
      const user: User[] = await User.query()
                    .where('email', req.body?.email)
                    .where('password', password)+-

      if(user?.length > 0){
        const id = user[0].id;
        const token = jwt.sign({ id }, process.env.JWTSECRET, {
          expiresIn: 300
        });
        return res.json(token);
      }

      return res.status(400).json('Invalid user/password');
    }

    return res.status(400).json('Invalid body');
  }
}

export default new AuthController()
