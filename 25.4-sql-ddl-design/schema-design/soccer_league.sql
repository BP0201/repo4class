DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league


CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    teamname TEXT NOT NULL,
    ranking INTEGER NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    team1 TEXT NOT NULL,
    team2 TEXT NOT NULL,
    winner TEXT NOT NULL,
    referee TEXT NOT NULL,
    game_date DATE NOT NULL
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team_id INTEGER REFERENCES teams ON DELETE SET NULL
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games ON DELETE CASCADE,
    player_id INTEGER REFERENCES players ON DELETE CASCADE
);


INSERT INTO teams (teamname, ranking) VALUES
('GER', 1), ('GRE', 2), ('FRA', 3), ('ITA', 4), ('POR', 5), ('SPA', 6);

INSERT INTO games (team1, team2, winner, referee, game_date) VALUES
('GER', 'GRE', 'GER', 'Joe Schmoe', '2022-04-20');

INSERT INTO players (name, team_id) VALUES
('Ronaldo', 5), ('Messi', 5), ('Santo', 1), ('Jesus', 1), ('Antonio', 2), ('Davi', 2), ('Davio', 3), ('Ronaldus', 3), 
('Ronald', 4), ('Arnold', 4), ('Jimmy', 6), ('Sarah', 6);

INSERT INTO goals (game_id, player_id) VALUES
(1, 3), (1, 6), (1, 4), (1, 5);