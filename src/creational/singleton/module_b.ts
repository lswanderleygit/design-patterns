import { MyDatabaseClassic } from './db/mt-database-classic';
import { myDatabaseClassic as MyDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Roberto', age: 25 });
myDatabaseClassic.add({ name: 'Patricia', age: 22 });
myDatabaseClassic.add({ name: 'Luiza', age: 12 });
myDatabaseClassic.add({ name: 'Silvana', age: 44 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === MyDatabaseClassicFromModuleA);
