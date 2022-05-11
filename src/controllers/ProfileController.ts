import { Profile } from '../models/Profile';

class ProfileController {
  async create(req, res) {
    const newProf = await Profile.query().insert({...req.body});
    res.status(200).json(newProf);
  };

  async update(req, res) {
    const newProf = await Profile.query().findById(req.params.id).patch({...req.body});
    res.status(200).json(newProf);
  };

  async delete(req, res) {
    const numDeleted = await Profile.query().deleteById(req.params.id);
    res.status(numDeleted > 0 ? 200 : 204);
  };

  async get(req, res) {
    const id = req.params?.id;
    if(id == null || id <= 0) res.status(400);

    const profile = await Profile.query().findById(id);
    res.status(profile ? 200 : 204).json(profile);
  };

  async getAll(req, res) {
    const profiles = await Profile.query();
    res.status(200).json(profiles);
  };
}

export default new ProfileController();
