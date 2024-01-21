import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { getEnvVariable } from "../helpers";
import { throwError } from "rxjs";
import { validateLoginInput, validateRegisterInput } from "../config/validation";
import {keys} from "../config/keys"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.userRepository.find()
    }
   

    async register(request: Request, response: Response, next: NextFunction) {
        let { firstName, lastName, email, password, password2} = request.body;
        const {isValid, errors} = validateRegisterInput(request.body);
        console.log(request.body)
     if(!isValid) {
        return {
            message: "fail",
            errors,
            isValid
        };
     }
      
    
       const isAdmin = false;
       
        
            const verifyUser = await this.userRepository.findOneBy({email});
            if(verifyUser) {
                errors.email = "This user already exist!"
                return {message: "fail", errors}
            }
           
            const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User()
           newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.email = email;
            newUser.password = hashedPassword,
            newUser.isAdmin = isAdmin;
        
       const savedUser =  await this.userRepository.save(newUser);
       return {msg: "success", savedUser: savedUser};
        
     
    }; 
    

    async login(request: Request, response: Response, next: NextFunction) {
        try {
        const {email, password} = request.body;
      
       const {isValid, errors} = validateLoginInput(request.body);

       if(!isValid) {
     return {
            message: "fail",
            errors,
            isValid
        }
    };
    //Check for user exist
    const user = await this.userRepository.findOneBy({
       email: email
     });
    const isMatch = await bcrypt.compare(password, user.password);
    //Verify if passwords match
    if(!isMatch) {
      errors.password = "password incorrect"
      return response.status(400).send({message: "fail", errors});
    }
    //Sign token
    const payload = {id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email};

    const token = jwt.sign(payload, keys.secretKeys, {expiresIn: 7200});
    console.log(token);
    const userDetails = {name: user.firstName, email: user.email, isAdmin: user.isAdmin }
      return {message: "success", userDetails: userDetails, token: `Bearer ${token}`};
      
}catch(error) {
    console.log(error);
}
    };
    
    async current(request: Request, response: Response, next: NextFunction) {
        
        
        return {msg: "success"};
        let payload;
        const token = request.headers.authorization?.split(' ')[1];
   
          if(token) {
            
                try {
                    const decoded = jwt.verify(token, getEnvVariable("secret"))
                
                    return decoded;
                  } catch (error) {
                    return null;
                  }      
              
          }else {
            return {status: "401", message: "Unauthorized"}
          }
        
   
    };

   
    //Controller remove user by id
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return {message: "fail", email:"this user not exist"}
        }

        await this.userRepository.remove(userToRemove)
        const users = await this.userRepository.find();
        return {message: "user has been removed", users: users};
    }

}