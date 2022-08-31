DROP TABLE IF EXISTS the_pets;

CREATE TABLE the_pets(
    pet_id serial,
    name text,
    age integer,
    kind text
);

INSERT INTO the_pets (name, age, kind) VALUES ('buttons',5, 'snake');
INSERT INTO the_pets (name, age, kind) VALUES ('fido',7, 'dog');
