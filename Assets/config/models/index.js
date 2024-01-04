import Project, { belongsTo } from './Project';

hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

belongsTo(User, {
  foreignKey: 'user_id'
});

export default { User, Project };