PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users(name text);
INSERT INTO "users" VALUES('Chris');
COMMIT;
