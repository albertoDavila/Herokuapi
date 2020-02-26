let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let DatosSchema = mongoose.Schema({
	nombre: { type : String },
	pregunta1: { type : String },
	pregunta2: { type: String },
	pregunta3 : { type: String },
	pregunta4 : { type: String },
	pregunta5 : { type: String },
	promedio : { type: Integer },
	podcast : { type: String },
	audiolibro : { type: String },
	libro : { type: String }

});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Datos = mongoose.model( 'registros', DatosSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Datos.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}
	 ,
	 post : function( newRegistro ){
	 	return Datos.create( newRegistro )
	 			.then( datosVP => {
	 				return datosVP;
	 			})
	 			.catch( error => {
	 				throw Error(error);
	 			});
	 }
};

module.exports = { VPList };


