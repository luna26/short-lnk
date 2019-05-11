import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-config';
import { getUrlById } from './middlewares/example';

Meteor.startup(() => {
  getUrlById();
  //   const petSchema = new SimpleSchema({
  //     name: {
  //       type: String,
  //       min: 1,
  //       max: 200,
  //       optional: true
  //     },

  //     age: { 
  //       type: Number,
  //       min: 0
  //     },

  //     contactNumber: {
  //       type: String,
  //       optional: true,
  //       regEx: SimpleSchema.RegEx.Phone
  //     }
  //   });

  //   //used to validate the schema
  // petSchema.validate({
  //   name: 'Coqui',
  //   age: 55,
  //   contactNumber: '1234123'
  // });

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },

  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },

  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });

  // employeeSchema.validate({
  //   name: 'Jose',
  //   hourlyWage: 35,
  //   email: 'jose!@jose.com'
  // });

});