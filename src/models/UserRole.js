import { Model } from "objection";

class UserRole extends Model {
  static get tableName() {
    return 'users_roles';
  }
}

module.exports = UserRole;
