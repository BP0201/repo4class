-- write your queries here



-- DATA SQL QUERIES --

-- 1. SELECT * FROM owners o FULL JOIN vehicles v ON o.id = v.owner_id;

-- 2. SELECT first_name, last_name, COUNT(*) as total FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name ORDER BY total, first_name;

-- 3. SELECT first_name, last_name, ROUND(AVG(price)) as average_price, COUNT(*) as total FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name HAVING COUNT(*) > 1 AND AVG(price) >= 10000 ORDER BY total DESC, first_name;