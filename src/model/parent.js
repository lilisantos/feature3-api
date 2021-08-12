const db = require('../../db')();
const COLLECTION = 'parent';

module.exports = () => {

  //Get parent
  const get = async (id) => {
    try {
      if (id == null) {
        const parent = await db.get(COLLECTION);
        return { parent };
      }
      const parent = await db.get(COLLECTION, { id });
      return { parent };
    } catch (err) {
      return {
        error: err,
      };
    }
  };

  //Add parent
  const add = async (name, details) => {
    
    try {
     
      const results = await db.add(COLLECTION, {
        name,
        details
      });

      return { results };
    } catch (err) {
      return { error: err };
    }
  };

  return {
    get,
    add,
  };
};