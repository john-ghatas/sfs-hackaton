export default (request, response, database) => {
    database.query("SELECT * FROM Minors")
        .then(rows => { response.json(rows) })
        .catch(error => { response.json(error) })
}
