import { Model } from "objection";

class Profile extends Model {
  static get tableName() {
    return 'profiles';
  }
}

module.exports = Profile;
