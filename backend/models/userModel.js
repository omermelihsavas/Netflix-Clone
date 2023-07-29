const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function(email, password) {
    if (!email || !password) {
        throw Error('Alanlar boş geçilemez...');
    }

    if (!validator.isEmail(email)) {
        throw Error('E-mail kurallara uygun değil...');
    }

    if (!validator.isStrongePassword(password)) {
        throw Error('Parola yeterince güçlü değil...');
    }
    
    const controlUser = await this.findOne({ email });

    if (controlUser) {
        throw Error('E-mail zaten kullanılıyor...');
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt); 
    const user = await this.create({ email, password:encryptedPassword });

    return user;
};

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('Alanlar boş geçilemez...');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('E-mail bulunamadı...');
    }

    const controlPassword = await bcrypt.compare(password, user.password);

    if (!controlPassword) {
        throw Error('Hatalı parola girdiniz...');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);