//Require model availability
const availability = require('../model/availability.js')();

module.exports = () => {

    //Get availability 
    const getController = async (req, res) => {
        const {availabilityList, error} = await availability.get();
        if(error){
            console.log("=== get:: availability Error");
            return res.status(500).json(error);
        }        
        res.json(availabilityList);
    }

    //Get availability by id
    const getById = async (req, res) => {
        const {availability, error} = await availability.get(req.params.id);
        if(error){
            console.log("=== getById:: availability Error");
            return res.status(500).json(error);
        }
        res.json(availability);
    }

    //Add new availability
    // const postController = async (req, res) => {   
    //     const {availabilityName} = req.body;

    //     const {results, error} = await availability.add(availabilityName);
    //     if(error){           
    //         return res.status(500).json(error);
    //     }

    //     res.json(results);
    // }

    return {
        getController,
        // postController,
        getById,
    };
}