const db = require("../database/db-config.js");

function add(user) {
    return db("users").insert(user);
}

function remove(user) {
    return null;
}

function update(user) {
    return null;
}

function find() {
    return null;
}

function findById(user) {
    return null;
}

module.exports = {
    add,
    remove,
    update,
    find,
    findById
}