const { client, syncAndSeed } = require('./db');
const express = require('express');
const app = express();
const path = require('path');

// EXPRESS PIPELINE
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/episodes/:seasonId', async (req, res, next) => {
  try {
    const response = await client.query(
      `SELECT * FROM "Episodes" WHERE season_id = ${req.params.seasonId};`
    );
    res.send(response.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/seasons', async (req, res, next) => {
  try {
    const response = await client.query('SELECT * FROM "Seasons";');
    res.send(response.rows);
  } catch (err) {
    next(err);
  }
});

const init = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`app is listening on port ${port}!`));
  } catch (err) {
    console.error(err);
  }
};

init();
