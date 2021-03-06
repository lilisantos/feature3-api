const { ObjectID } = require('mongodb');

const db = require('../../db')();
const COLLECTION = "availability_minder";

module.exports = () => { 
    
  //Get availability
  const get = async (id = null) => {
      console.log(' inside availability_minder model');
      if(!id){
        try{
          const availability = await db.get(COLLECTION);
          return {availabilityList: availability};
        }catch(ex){
          return {error: ex}
        }           
      }

      try{
        const availability = await db.get(COLLECTION, {id});
        return {availabilityList: availability};   
      }catch(ex){
        return {error: ex}
      }
            
  };

  //Add new availability
  const add = async(personId, category, availability) => {
    console.log(' inside availability_minder model add');    
    
    try{
      const results = await db.add(COLLECTION, {
        personId: personId, 
        category: category, 
        availability: availability
        });
        
        return results.result;
    }catch(ex){
        return {error: ex}
    }
  };

  return {
      get,
      add
  }
};