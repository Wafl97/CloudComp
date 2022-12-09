db = new Mongo().getDB('evac');

db.createCollection('Users');
db.createCollection('Roles');