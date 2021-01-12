## Singleton

Garantir que uma **classe** tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

### Somente uma instância?

- Geralmente utilizado para acesso a recursos compartilhados, como acessar a base de dados, sistema de arquivos
- Substituir váriáveis globais

### Ponto de acesso global?

- Permite o acesso ao Singleton em qualquer lugar da a plicação.

### Implementação

```
export class Singleton {
  private static _instance: Singleton | null = null

  private constructor() {
    // new() não é possível fora da class
  }

  static get instance(): Singleton {
    if (Singleton._instance == null) {
      Singleton._instance = new Singleton()
    }

    return Singleton._instance
  }
}
```

### Aplicabilidade

- Quandoo uma classe precisa ter somente uma instância disponível em todo o programa
- Usar variáveis globais

### Consequêcias

**POSITIVAS**

- Acesso controlado a instância única
- Fácil de permitir um número maior de instâncias
- o Singleton só é criado no momento do uso
- Substitui variáveis globais

**NEGATIVAS**

- Torna difícil testar
- Viola o principio da responsabilidade única
- Requer tratamento especial em casos de concorrência
