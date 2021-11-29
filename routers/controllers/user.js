const usermodel = require('./../../db/models/user')

const signup= (req, res) =>{
    const { email, password, role } = req.body;
    
    const newuser = new usermodel({
        email,
        password,
        role
      });
    
      newuser 
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }
    const login = (req, res) =>{
        const { email, password } = req.body;

    }
    usermodel

       .findOne({ email})
        .then((result) => {
          if (result) {
            if ( result.email==email) {
                if ( result.password==password) {
    
                    res.status(200).json(result);
                } else {
                  res.status(400).json("invalid email or password");
                }
              } else {
                res.status(400).json("invalid email or password");
              }
            } else {
              res.status(400).json("email do not found");
            }
          })
          .catch((err) => {
            res.status(400).json(err);
          });
    

      module.exports= { signup , login }