DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist


CREATE TABLE location_info (
    id SERIAL PRIMARY KEY,
    region TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(12),
    preferred_region TEXT DEFAULT 'Not set'
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    title TEXT NOT NULL,
    more_info TEXT,
    region_id INTEGER REFERENCES location_info ON DELETE SET NULL,
    category_id INTEGER REFERENCES categories ON DELETE SET NULL
);


INSERT INTO location_info (region) VALUES ('San Fransisco'), ('Atlanta'), ('Seattle'), ('Boston'), ('LA'), ('Canada');

INSERT INTO users (username, preferred_region) VALUES ('celticsboy12', 'Boston'), ('mosshead', 'Canada');
INSERT INTO users (username) VALUES ('doglover123'), ('catzrock43'), ('throwaway327');

INSERT INTO categories (name, description) VALUES ('Sports', 'Anything sports related'), ('Games', 'For the nerds');
INSERT INTO categories (name) VALUES ('Books'), ('Services'), ('Cars');

INSERT INTO posts (user_id, title, more_info, region_id, category_id) VALUES
(1,'Playing cards', 'Some baseball cards', 2, 1),
(2, 'Shoes', 'Old shoes', 4, 5);