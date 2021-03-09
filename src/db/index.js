import Dexie from "dexie";

const db = new Dexie("myDB");
db.version(2).stores({
  tasks: `++id, name`,
  clearTask: `++id, taskid, date`,
});

export default db;
