const Supplier = require("../model/Supplier");
const Suppliers = require("../model/Supplier");

const getAllSuppliers = async (req, res, next) =>{
  
    let suppliers;//new variable
 try{
    suppliers = await Suppliers.find();
 } catch (err){
    console.log(err);
 }

 if(!suppliers){
    return res.status(404).json({message:"NO SUPPLIERS FOUND"});
 }
 return res.status(200).json({suppliers});
    
};

const getById = async(req,res,next)=>{
   const id = req.params.supplierid;
   let suppliers;
   try{
      suppliers = await Supplier.findById(id);
   }catch(err){
      console.log(err);
   }
   if(!suppliers){
      return res.status(404).json({message:"NO SUPPLIERS FOUND"});
   }
   return res.status(200).json({suppliers});
   
}

//add
const addSupplier = async(req,res,next)=>{
   const{ name, phone, company, address, email}= req.body;
   let suppliers;
   try{
      suppliers = new Supplier({
         name,
         phone,
         company,
         address,
         email
      });
      await suppliers.save();
   }catch(err){
      console.log(err);
   }

   if(!suppliers){
      return res.status(500).json({message:"Unable to add"})
   }
   return res.status(201).json({suppliers});

};

const updateSuppliers = async(req,res,next) =>{
   const id = req.params.id;
   const{name, phone, company, address, email } = req.body;
   let suppliers;
   try{
      suppliers = await Supplier.findByIdAndUpdate(id,{
         name,
          phone, 
          company, 
          address, 
          email 
      });
      await suppliers.save();
   }catch(err){
      console.log(err);
   }

   if(!suppliers){
      return res.status(404).json({message:"Unable To Update By this ID"});
   }
   return res.status(200).json({suppliers});
   
}

const deleteSuppliers = async(req,res,next) =>{
   const id = req.params.id;
   const{name, phone, company, address, email } = req.body;
   let suppliers; 
   try{
      suppliers = await Supplier.findByIdAndRemove(id);
      
   }catch(err){
      console.log(err);
   }
   if(!suppliers){
      return res.status(404).json({message:"Unable To Delete By this ID"});
   }
   return res.status(200).json({message:'Supplier Succesfully Deleted..!'});
   }



exports.getAllSuppliers = getAllSuppliers;
exports.addSupplier = addSupplier;
exports.getById = getById;
exports.updateSuppliers = updateSuppliers;
exports.deleteSuppliers = deleteSuppliers;