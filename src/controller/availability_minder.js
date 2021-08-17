//Require model availability
const availab = require('../model/availability_minder.js')();

module.exports = () => {

    //Get availability 
    const getController = async (req, res) => {
        const {availabilityList, error} = await availab.get();
        if(error){
            console.log("=== get:: availability_minder Error");
            return res.status(500).json(error);
        }        
        res.json(availabilityList);
    }

    //Get availability by id
    const getById = async (req, res) => {
        const {availability, error} = await availab.get(req.params.id);
        if(error){
            console.log("=== getById:: availability_minder Error");
            return res.status(500).json(error);
        }
        res.json(availability);
    }

   // Add new availability
    const postController = async (req, res) => {   
        const {personId, category, availability} = req.body;

        const {results, error} = await availab.add(personId, category, availability);
        if(error){           
            return res.status(500).json(error);
        }

        res.json(results);
    }

    return {
        getController,
        postController,
        getById,
    };
}