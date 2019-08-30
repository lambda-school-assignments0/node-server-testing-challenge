const db = require("../database/db-config.js");

function add(user) {
    return db("users").insert(user);
}

function remove(id) {
    return db("users").where(id).first().del();
}

function find() {
    return db("users");
}

async function findById(id) {
    return db("users").where(id).first();
}

module.exports = {
    add,
    remove,
    find,
    findById
}