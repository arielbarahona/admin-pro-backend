const { Schema, model  } = require('mongoose');

// MODELO de USUARIO de la BD
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    role:{
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default:false
    }

});

//Para cambiar el nombre del ID en la BD de MONGO
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object} = this.toObject();

    object.uid = _id;
    return object;

});

//Exportacion del modelo 
module.exports = model('Usuario', UsuarioSchema);