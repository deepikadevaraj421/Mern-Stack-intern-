const  Product=require('../modules/product')  //calling the structure of mongodb
exports.createProduct=async(req,res)=>{   //async will wait for the database operation to complete
    try{
        const product=await Product.create(req.body) ; //create method to create a new product in the database
        res.json(product);
        res.status(200).json({message: "Product created successfully"}); //201 is for created successfully
    }catch(err){
        res.status(500).json({error: errG.message});//500 is server error

    }
}