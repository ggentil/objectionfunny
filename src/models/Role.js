import { Model } from "objection";

class Role extends Model {
  static tableName = 'roles';
}

module.exports = Role;
