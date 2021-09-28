//const { router } = require("../app");

var express = require('express');

const userController = require('../controllers/user.controller');
var router = express.Router();

//const moment = require('moment')

router.get('/get-individual-details/:id',userController.getIndividual);

router.get('/get-all-details',userController.getAllDetails)

router.post('/family-details',userController.getFamilydetails);

router.post('/household-profile',userController.getHouseholdProfile);

router.post('/housing',userController.getHosingDetails);

router.post('/economy',userController.getEconomyDetails);

router.post('/cultural-heritage',userController.getCulturalDetails);

router.post('/tourism',userController.getTourismDetails);

router.post('/transportation',userController.getTransportationDetails);

router.post('/environment-related',userController.getEnvironmentDetails);

router.post('/physical-infrastructure',userController.getPhysicalInfrasturcture);

router.post('/coastal',userController.getCoastalDetails);

router.post('/social-infrastructure',userController.getSocialDetails);

router.post('/slums',userController.getSlumsDetails);

router.post('/login',userController.getLogin);

router.get('/family',userController.getFamily);



//router.post('/slums-student',userController.getSlumsStudentDetails)

//router.post('/social-infrastructure-student',userController.getSocialStudentDetails)

module.exports=router;