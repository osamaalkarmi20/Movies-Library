DROP TABLE IF EXISTS addedMv;
CREATE TABLE IF NOT EXISTS  addedMv (
    id SERIAL PRIMARY KEY,
    nameofmovie VARCHAR(255),
    info VARCHAR(255)
   
);