import { Model, RelationMappings } from "objection";
import { Role } from './Role';
import { Profile } from './Profile';

export class User extends Model {
  static tableName: string = 'users';
  id: number;

  relationMappings: RelationMappings = {
    roles: {
      relation: Model.ManyToManyRelation,
      modelClass: Role,
      join: {
        from: 'users.id',
        through: {
          from: 'users_roles.user_id',
          to: 'users_roles.role_id'
        },
        to: 'roles.id'
      }
    },
    profile: {
      relation: Model.BelongsToOneRelation,
      modelClass: Profile,
      join: {
        from: 'users.id',
        to: 'profiles.user_id'
      }
    }
  }


}
