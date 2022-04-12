import { Model } from "objection";

class Role extends Model {
  static get tableName() {
    return 'roles';
  }
}

module.exports = Role;
