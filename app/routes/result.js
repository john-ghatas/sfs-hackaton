const method = "POST";

import { v4 as uuidv4 } from "uuid";

// TODO error handling: programme does not exist
// TODO error handling: keys are not strings
// TODO error handling: uuid overlap

const call = (request, response, database) => {
  const { tagCounts, programme } = request.body;

  database
    .query(`SELECT * FROM Minors`)
    .then(rows => {
      rows.forEach(row => {
        const rankedTags = row.tags
          .split(",")
          .reduce((accumulator, tag, index) => {
            accumulator[tag] = 5 - index;
            return accumulator;
          }, {});

        const similarityPoints = Object.keys(rankedTags).reduce(
          (accumulator, tag) => {
            if (tagCounts[tag] === undefined) {
              accumulator += 0;
            } else if (tagCounts[tag] <= rankedTags[tag]) {
              accumulator += Math.pow(tagCounts[tag], 2);
            } else {
              accumulator += Math.pow(rankedTags[tag], 2);
            }
            return accumulator;
          },
          0
        );

        row.similarity = (similarityPoints / 30).toFixed(2);
      });

      const uuid = uuidv4();
      const topFive = rows
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 5)
        .reduce((accumulator, { name, similarity }) => {
          accumulator.push({ name, similarity });
          return accumulator;
        }, []);

      database
        .query(
          `INSERT INTO Results (id, programme, scores) VALUES ('${uuid}', '${programme}', '${JSON.stringify(
            topFive
          )}');`
        )
        .then(() => {
          response.json({ uuid });
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
