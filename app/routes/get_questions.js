const method = "GET";

// TODO error handling: invalid language

const call = (request, response, database) => {
  const { lang } = request.query;

  database
    .query(
      `SELECT name_${lang} AS name, answers_${lang} AS answers, tags, multi_select FROM Questions`
    )
    .then(rows => {
      rows.forEach(row => {
        row.answers = row.answers.split(",");
        row.tags = JSON.parse(row.tags);
      });

      response.json(rows);
    })
    .catch(error => {
      response.json(error);
    });
};

export default { method, call };
