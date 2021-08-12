const { ObjectID } = require('mongodb');

const db = require('../../db')();
const COLLECTION = "category";

module.exports = () => { 
    
    //Get category
    const get = async (id = null) => {
        console.log(' inside category model');
        if(!id){
          try{
            const category = await db.get(COLLECTION);
            return {categoryList: category};
          }catch(ex){
            return {error: ex}
          }           
        }

        try{
          const category = await db.get(COLLECTION, {id});
          return {categoryList: category};   
        }catch(ex){
          return {error: ex}
        }
             
    }

    //Add new category
    const add = async (categoryName) => {
    
      try {
       
        const results = await db.add(COLLECTION, {
          name: categoryName
        });
  
        return { results };
      } catch (err) {
        return { error: err };
      }
    };

    return {
        get,       
        add,
    }
};