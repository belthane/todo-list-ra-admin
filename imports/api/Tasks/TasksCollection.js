import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');

TasksCollection.allow({
  insert: () => false,
  update: () => true,
  remove: () => false,
});

TasksCollection.deny({
  insert: () => true,
  update: () => false,
  remove: () => true,
});
