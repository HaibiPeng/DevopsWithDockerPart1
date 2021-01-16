CREATE TABLE phone_numbers (
  id SERIAL PRIMARY KEY,
  name_id INTEGER REFERENCES users(id),
  number TEXT NOT NULL
);