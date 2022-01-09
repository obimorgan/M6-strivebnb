/** @format */

import Users from "./users.js";
import Cities from "./cities.js";
import Properties from "./properties.js";

Properties.belongsTo(Cities, { onDelete: "CASCADE" });
Cities.hasMany(Properties, { onDelete: "CASCADE" });

Users.hasMany(Properties, { onDelete: "CASCADE" });
Properties.belongsTo(Users, { onDelete: "CASCADE" });

export { Users, Cities, Properties };
