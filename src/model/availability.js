const { ObjectID } = require('mongodb');

const db = require('../../db')();
const COLLECTION = "availability";

module.exports = () => { 
    
    //Get availability
    const get = async (id = null) => {
        console.log(' inside availability model');
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
             
    }

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
    const add = async(idPerson, slotId, slotPersonalId, slotDate) => {
      console.log(' inside availability model add');    
     
      try{
        const results = await db.add(COLLECTION, {
            type: "workout",
            member:  memberId,
            personal: ObjectID(slotPersonalId),
            date: slotDate,
            fee: "due",
            status: "booked"
         });

         //Updates status of the selected slot, so it will not be displayed on the calendar
         const {slotUpdated, error} = await slots.update(slotId, new_status);
         return results.result;
      }catch(ex){
          return {error: ex}
      }
    };

   

    return {
        get,
        add,
    }
};