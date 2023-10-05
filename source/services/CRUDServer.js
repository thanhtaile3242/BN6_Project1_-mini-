const connection = require("../config/dataBase");
// Get all users
const getAllUsers = async () => {
    let [results, feilds] = await (await connection).query("select * from Users");
    return results;
};
// Get user by id
const getUserById = async (userId) => {
    let [results, feilds] = await (await connection).query(`select * from Users where id = ?`, [userId]); 
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};
// Create user
const createUser = async (email, name, city) => {
    let [result, feilds] = await (await connection).query(`insert into Users (email, name, city) values (?, ?, ?)`,
        [email, name, city]);
};
// Update user by id
const updateUserById = async (email, city, name, userId) => {
    let [result, feilds] = await (await connection).query(`update Users set email =?, city =?, name =? where id = ?`,
        [email, city, name, userId]);
}
// Delete user by id
const deleteUserById = async (userId) => {
    let [result, feilds] = await (await connection).query(`delete from Users where id = ?`, [userId]);
}



module.exports = {
    getAllUsers, createUser,getUserById, updateUserById, deleteUserById
};
