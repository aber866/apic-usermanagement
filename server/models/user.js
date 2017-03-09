"use strict";

module.exports = (user) => {
    user.disableRemoteMethod("upsert", true);
    user.disableRemoteMethod("exists", true);
    user.disableRemoteMethod("replaceById", true);
    user.disableRemoteMethod("createChangeStream", true);
    user.disableRemoteMethod("count", true);
    user.disableRemoteMethod("findOne", true);
    user.disableRemoteMethod("replaceOrCreate", true);
    user.disableRemoteMethod("updateAll", true);
    user.disableRemoteMethod("upsertWithWhere", true);
};