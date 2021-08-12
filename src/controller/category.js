//Require model category
const category = require('../model/category.js')();

module.exports = () => {

    //Get category 
    const getController = async (req, res) => {
        const {categoryList, error} = await category.get();
        if(error){
            console.log("=== get:: category Error");
            return res.status(500).json(error);
        }        
        res.json(categoryList);
    }

    //Get category by id
    const getById = async (req, res) => {
        const {category, error} = await category.get(req.params.id);
        if(error){
            console.log("=== getById:: category Error");
            return res.status(500).json(error);
        }
        res.json(category);
    }

    //Add new category
    const postController = async (req, res) => {   
        const {categoryName} = req.body;

        console.log("Category: " + categoryName);
        try{
            const {results, error} = await category.add(categoryName);

            res.json(results);
        }catch(ex){
            return res.status(500).json(ex);
        }
     

       
    }

    return {
        getController,
        postController,
        getById,
    };
}