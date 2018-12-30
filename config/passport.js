const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = requrie('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');