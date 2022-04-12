import Profile from '../models/Profile';

class ProfileController {

  async create(req, res) {
    try {
      const newProf = await Profile.query().insert({...req.body});
      res.status(200).json({
        success: true,
        message: null,
        data: newProf
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: null,
        data: e?.errors?.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const newProf = await Profile.query().findById(req.params.id).patch({...req.body});
      res.status(200).json({
        success: true,
        message: null,
        data: newProf
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: null,
        data: e?.errors?.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const numDeleted = await Profile.query().deleteById(req.params.id);
      res.status(200).json({
        success: true,
        message: numDeleted + " rows affeted"
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: null,
        data: e?.errors?.map((err) => err.message)
      });
    }
  }

  async getAll(req, res) {
    const profiles = await Profile.query();

    res.status(200).json({
      success: true,
      message: null,
      data: profiles
    });
  };

  async get(req, res) {
    const id = req.params?.id;
    if(id == null || id <= 0){
      res.status(400).json({
        success: false,
        message: null,
        data: null
      });
    }

    const profile = await Profile.query().findById(id);
    res.status(profile ? 200 : 204).json({
      success: true,
      message: null,
      data: profile
    });
  };
}

export default new ProfileController();
