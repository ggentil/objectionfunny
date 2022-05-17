import User from '../models/User';
import crypto from 'crypto';

class UserController {
  async create(req, res) {
    const user = {...req.body};
    user.password = crypto.createHash('sha256').update(user.password).digest('hex');

    const newUser = await User.query().insert(user);
    res.status(200).json(newUser);
  };

  async update(req, res) {
    const user = {...req.body};
    user.password = crypto.createHash('sha256').update(user.password).digest('hex');

    const newUser = await User.query().findById(req.params.id).patch({...req.body});
    res.status(200).json(newUser);
  };

  async delete(req, res) {
    const numDeleted = await User.query().deleteById(req.params.id);
    res.status(numDeleted > 0 ? 200 : 204);
  };

  async get(req, res) {
    const id = req.params?.id;
    if(id == null || id <= 0) res.status(400);

    const user = await User
                        .query()
                        .withGraphFetched('roles')
                        .withGraphFetched('profile')
                        .findById(id);

    res.status(user ? 200 : 204).json(user);
  };

  async getAll(req, res) {
    const users = await User.query();
    res.status(200).json(users);
  };
}

export default new UserController();
