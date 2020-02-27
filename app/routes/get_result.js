const method = "GET";

const baseUrl = "https://minoren.mijnhva.nl/";

const call = (request, response, database) => {
  const { id, lang } = request.query;

  database
    .query(`SELECT programme, scores FROM Results WHERE id = '${id}'`)
    .then(rows => {
      const results = rows[0];
      results.scores = JSON.parse(results.scores);

      database
        .query(`SELECT name, description_${lang} AS description FROM Minors`)
        .then(minors => {
          results.scores.forEach((score, index) => {
            score.similarity = parseFloat(score.similarity);
            score.description = minors.find(
              minor => minor.name === score.name
            ).description;

            const kebabCasedName = score.name.toLowerCase().replace(/ /g, "-");
            score.link = `${baseUrl}${
              lang === "EN" ? "en/" : ""
            }2019-2020/${kebabCasedName}`;
          });

          response.json(results);
        })
        .catch(error => {
          response.json(error);
        });
    })
    .catch(error => {
      response.json(error);
    });
};

export default { method, call };
