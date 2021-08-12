//Require model parent
const minder = require('../model/minder.js')();

module.exports = () => {

    //Get minder 
    const getController = async (req, res) => {
        const {minderList, error} = await minder.get();
        if(error){
            console.log("=== get:: minder Error");
            return res.status(500).json(error);
        }        
        res.json(minderList);
    }

    //Get minder by id
    const getById = async (req, res) => {
        const {minder, error} = await minder.get(req.params.id);
        if(error){
            console.log("=== getById:: minder Error");
            return res.status(500).json(error);
        }
        res.json(minder);
    }

    //Add new minder
    const postController = async (req, res) => {   
        const {name} = req.body;

        const {results, error} = await minder.add(name);
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