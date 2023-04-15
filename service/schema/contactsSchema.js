const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema( {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
},
    { versionKey: false, timestamps: true},

);
  
const Contacts = mongoose.model('contacts', contactsSchema);

module.exports = {
  Contacts
};