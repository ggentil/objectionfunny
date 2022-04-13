import { Model } from "objection";
import Role from './Role';
import User from './User';

class UserRole extends Model {
  static tableName = 'users_roles';

  static relationMappings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: Role,
      join: {
        from: 'users_roles.role_id',
        to: 'roles.id'
      }
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'users_roles.user_id',
        to: 'users.id'
      }
    }
  }
}

module.exports = UserRole;
