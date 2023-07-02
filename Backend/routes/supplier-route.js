const express = require("express");
const supplierController = require("../controllers/supplier-controller.js");
const router = express.Router();
const Suppliers = require("../model/Supplier")




router.get("/", supplierController.getAllSuppliers);
router.post("/", supplierController.addSupplier);
router.get("/:supplierid",supplierController.getById);
router.put("/:id",supplierController.updateSuppliers);
router.delete("/:id",supplierController.deleteSuppliers);
module.exports = router;