import { MyDatabaseClassic } from './db/mt-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Lucas', age: 25 });
myDatabaseClassic.add({ name: 'Laura', age: 22 });
myDatabaseClassic.add({ name: 'Matheus', age: 12 });
myDatabaseClassic.add({ name: 'Maria', age: 44 });

export { myDatabaseClassic };
