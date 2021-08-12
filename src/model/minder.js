const db = require('../../db')();
const COLLECTION = 'minder';

module.exports = () => {

  //Get minder
  const get = async (id = null) => {
    console.log(' inside minder model');
        if(!id){
          try{
            const minder = await db.get(COLLECTION);
            return {minderList: minder};
          }catch(ex){
            return {error: ex}
          }           
        }

        try{
          const minder = await db.get(COLLECTION, {id});
          return {minderList: minder};   
        }catch(ex){
          return {error: ex}
        }
  };

  //Add minder
  const add = async (name) => {
    
    try {
     
      const results = await db.add(COLLECTION, {
        name: name
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