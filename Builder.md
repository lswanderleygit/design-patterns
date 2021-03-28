## Singleton

Separar a construção de um objeto complexo da sua representação de modo que o mesmo proocesso de construção possa criar 
diferentes representaçõoes.

### Visão geral

- O padrão sugere a separação do código que cria e o código que usa o objeto;
- Trata da criação de objetos complexos (complexos de verdade)
    - Construtores muito complexos;
    - Composição de vários objetos (Composite);
    - Algoritmo de criação do objeto complexo.
- Permite a criação de um objeto em etapas
- Permite method chaining (encadeamento de chamadas), um método chama outro ...
- O objeto final pode variar de acordo com a necessidade; "Em um exemplo real, criando o objeto pessoa, poderia variar,
  uma pessoa pode ter nome e idade e outra apenas nome; Ou também criar outro objetivo totalmente aleatório";
- É um padrão complexo; Se você está construindo um objeto complexo, o builder vai ser complexo.

**POSITIVAS**

- Separa a criação de utilização;
- O cliente não precisa criar objetos diretamente;
- O mesmo código pode contruir objetos diferentes;
- Ajuda na aplicação dos pricípios (SRP e OCP) do SOLID.

**NEGATIVAS**

- O código final pode se tornar muito complexo.
