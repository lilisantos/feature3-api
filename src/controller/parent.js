//Require model parent
const parent = require('../model/parent.js')();

module.exports = () => {

    //Get parent 
    const getController = async (req, res) => {
        const {parentList, error} = await parent.get();
        if(error){
            console.log("=== get:: parent Error");
            return res.status(500).json(error);
        }        
        res.json(parentList);
    }

    //Get parent by id
    const getById = async (req, res) => {
        const {parent, error} = await parent.get(req.params.id);
        if(error){
            console.log("=== getById:: parent Error");
            return res.status(500).json(error);
        }
        res.json(parent);
    }

    //Add new parent
    const postController = async (req, res) => {   
        const {name} = req.body;

        const {results, error} = await parent.add(name);
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