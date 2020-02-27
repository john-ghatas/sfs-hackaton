const method = "GET";

const call = (request, response, database) => {
  const { id } = request.query;

  database
    .query(`SELECT programme, scores FROM Results WHERE id = '${id}'`)
    .then(rows => {
      rows[0].scores = JSON.parse(rows[0].scores);
      rows[0].scores.forEach(row => {
        row.similarity = parseFloat(row.similarity);
      });

      response.json(rows[0]);
    })
    .catch(error => {
      response.json(error);
    });
};

export default { method, call };
