const pg = require('pg');
//const client = new pg.Client('postgres://localhost/thecrown_db');
let config;
if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    operatorsAliases: false,
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  config = {
    logging: false,
    operatorsAliases: false,
  };
}

const client = new pg.Client('postgres://localhost/thecrown_db', config);

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS "Episodes";
    DROP TABLE IF EXISTS "Seasons";
    CREATE TABLE "Seasons"(
      id INTEGER PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      release_year INTEGER
    );
    CREATE TABLE "Episodes"(
      id INTEGER PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      season_id INTEGER REFERENCES "Seasons"(id)
    );
    INSERT INTO "Seasons" (id, name, release_year) VALUES(1,'Season One', 2016);
    INSERT INTO "Seasons" (id, name, release_year) VALUES(2,'Season Two', 2017);
    INSERT INTO "Seasons" (id, name, release_year) VALUES(3,'Season Three', 2019);
    INSERT INTO "Seasons" (id, name, release_year) VALUES(4,'Season Four', 2020);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(1,'Wolferton Splash', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(2,'Hyde Park Corner', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(3,'Windsor', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(4,'Act of God', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(5,'Smoke and Mirrors', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(6,'Gelignite', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(7,'Scientia Potentia Est', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(8,'Pride & Joy', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(9,'Assassins', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(10,'Gloriana', 1);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(11,'Misadventure', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(12,'A Company of Men', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(13,'Lisbon', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(14,'Beryl', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(15,'Marionettes', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(16,'Vergangenheit', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(17,'Matrimonium', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(18,'Dear Mrs. Kennedy', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(19,'Paterfamilias', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(20,'Mystery Man', 2);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(31,'Olding', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(32,'Margaretology', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(33,'Aberfan', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(34,'Bubbikins', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(35,'Coup', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(36,'Tywysog Cymru', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(37,'Moon Dust', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(38,'Dangling Man', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(39,'Imbroglio', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(40,'Cri de Coeur', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(41,'Gold Stick', 3);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(42,'The Balmoral Test', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(43,'Fairy Tale', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(44,'Favourites', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(45,'Fagan', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(46,'Terra Nullius', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(47,'The Hereditary Principle', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(48,'48:1', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(49,'Avalanche', 4);
    INSERT INTO "Episodes" (id, name, season_id) VALUES(50,'War', 4);
  `;
  await client.query(SQL);
};

module.exports = { client, syncAndSeed };
