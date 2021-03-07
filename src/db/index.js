import Dexie from "dexie";

class DB extends Dexie {
  constructor() {
    super("TaskDB");
    this.version(1).stores({
      tasks: `++id,name`,
    });
  }
}

const db = new DB();

export default db;
