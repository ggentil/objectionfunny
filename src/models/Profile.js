import { Model } from "objection";

class Profile extends Model {
  static tableName = 'profiles';
}

module.exports = Profile;
