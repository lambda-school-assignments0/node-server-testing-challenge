const db = require("../database/db-config.js");

const Users = require("./users-model.js");

describe("users model", () => {
    describe("add(user)", () => {
        beforeEach(async () => {
            await db("users").truncate();
        });
        it("should insert provided users into the db", async () => {
            await Users.add({
                username: "TestUser1",
                password: "password123"
            });

            await Users.add({
                username: "TestUser2",
                password: "password123"
            });

            const users = await db("users");
            expect(users).toHaveLength(2);
        });
    });

    describe("remove(user)", () => {
        beforeEach(async () => {
            await db("users").truncate();
        });
        it("should delete user 'TestUser1' by id: 1", async () => {
            await Users.add({
                username: "TestUser1",
                password: "password123"
            });

            await Users.add({
                username: "TestUser2",
                password: "password123"
            });

            await Users.remove({ id: 1 });

            const users = await db("users");
            expect(users).toHaveLength(1);
        });
    });

    describe("find()", () => {
        beforeEach(async () => {
            await db("users").truncate();
        });
        it("should find all provided users", async () => {
            await Users.add({
                username: "TestUser1",
                password: "password123"
            });

            await Users.add({
                username: "TestUser2",
                password: "password123"
            });

            await Users.add({
                username: "TestUser3",
                password: "password123"
            });

            const users = await Users.find();
            expect(users).toHaveLength(3);
        });
    });

    describe("findById(id)", () => {
        beforeEach(async () => {
            await db("users").truncate();
        });
        it("should find user with id: 2", async () => {
            await Users.add({
                username: "TestUser1",
                password: "password123"
            });

            await Users.add({
                username: "TestUser2",
                password: "password123"
            });

            await Users.add({
                username: "TestUser3",
                password: "password123"
            });

            const users = await Users.findById({ id: 2 });
            expect(users.username).toBe("TestUser2");
        });
    });
});
