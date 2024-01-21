import  Validator   from 'validator';
import  { isEmpty } from "./is-empty"; 

export const validateRegisterInput = (data)  =>{
  let errors = {firstName: "", email: "", password: "", password2: "", lastName: ""};
  data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.password2 = isEmpty(data.password2) ? "" : data.password2;
  if(!Validator.isLength(data.firstName, {min: 2, max: 30})) {
    errors.firstName ="The firstName must be between 2 and 30 characters!"
  }
  if(Validator.isEmpty(data.firstName)) {
    errors.firstName ="firstName is required!"
  }
  if(Validator.isEmpty(data.lastName)) {
    errors.lastName ="lastName is required!"
  }
  
  if(Validator.isEmpty(data.email)) {
    errors.email ="email is required!"
  }
  if(!Validator.isEmail(data.email)) {
    errors.email ="email is invalid!"
  }
  if(Validator.isEmpty(data.password)) {
    errors.password ="password is required!"
  }
  if(Validator.isEmpty(data.password2)) {
    errors.password2 ="confirm password is required!"
  }
  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password ="password must be at least 6 characters!"
  }
  if(Validator.equals(data.password, data.password2)) {
    errors.password2 ="passwords must match!"
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
};

export const validateLoginInput = (data)  =>{
  let errors = {email: "", password: ""};

  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
 
  
  if(Validator.isEmpty(data.email)) {
    errors.email ="email is required!"
  }
  if(!Validator.isEmpty(data.email)  && !Validator.isEmail(data.email)) {
    errors.email ="email is invalid!"
  }
  if(Validator.isEmpty(data.password)) {
    errors.password ="password is required!"
  }
 
   return {
    errors,
    isValid: isEmpty(errors)
  }
}; 