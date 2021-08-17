const { ObjectID } = require('mongodb');

const db = require('../../db')();
const COLLECTION = "availability_parent";

module.exports = () => { 
    
    //Get availability
    const get = async (id = null) => {
        console.log(' inside availability_parent model');
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

    //Gets availability
    // const getAva = async () => {
    //  const PIPELINE_FIRST =  [
    //   {
    //     $match: {"status": "booked"} //Gets only active availability      
    //   }];

    //   try{
    //     const booking = await db.aggregate(COLLECTION, PIPELINE_FIRST);
    //     return {booking: booking};   
    //   }catch(ex){
    //     return {error: ex}
    //   }
           
    // }

    //Add new availability
    const add = async(personId, category, fullTimeDay, availability, details) => {
      console.log(' inside availability_parent model add');    
     
      try{
        const results = await db.add(COLLECTION, {
          personId: personId, 
          category: category, 
          fullTimeDay: fullTimeDay,
          availability: availability,
          details: details
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