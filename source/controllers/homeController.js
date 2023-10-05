const { getAllUsers, createUser,getUserById, updateUserById, deleteUserById } = require("../services/CRUDServer.js");
// Read 
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { listUsers: results });
};
// Create
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    await createUser (email, name, city);
   res.redirect("/home");
};
// Update
const getUpdatePage =  async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("update.ejs",{userEdit: user});
};
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let userId = req.body.userId;
    await updateUserById(email, city, name, userId);
    res.redirect("/home");
};
// Delete
const getDeletePage = async(req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render("delete.ejs",{userEdit: user});
};
const postDeleteUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect("/home");
};
// Exports
module.exports = {getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, getDeletePage, postDeleteUser};
