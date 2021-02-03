import { CollectionExtensions } from "meteor/lai:collection-extensions";

let registered_collections = {};
CollectionExtensions.addExtension(function(name, options) {
  registered_collections[name] = {
    name: name,
    instance: this,
    options: options
  };
});

export function getCollectionByName(collection_name) {
  console.log("getCollectionByName:", collection_name);
  return registered_collections[collection_name].instance;
}