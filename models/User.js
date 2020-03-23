const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    avatar: {
        type: String
    },
    gender: {
        type: String
    },
    addresses: [
        {
            location: {
                type: String,
            },
            street: {
                type: String
            },
            state: {
                type: String
            },
            zip: {
                type: Number
            }
        }
    ],
    liked: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            }
        }
    ],
    cart: [
        {
            product: {
              type: Schema.Types.ObjectId,
              ref: 'products'
            },
            count: {
                type: Number
            }
        }
    ],
    paymentMethods: [
        {
            cardNumber: {
                type: Number
            },
            cardType: {
                type: String
            },
            cvv: {
                type: Number
            },
            expiryDate: {
                type: String
            }
        }
    ],
    resetPin: {
      pin: {
          type: String,
          default: null
      },
      expiresat: {
        type: Date,
        default: null
      },
      stage: {
        type: Number,
        default: 1
      },
    },
    status: {
        type: Number,
        default: 1
    },
    facebookId: {
      type: String
    },
    googleId: {
      type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const User = mongoose.model('users', UserSchema);
module.exports = User;
