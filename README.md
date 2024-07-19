# Calculadora de Salário Líquido

Este projeto é uma aplicação web simples que calcula o salário líquido com base no salário bruto e nos descontos aplicáveis. A calculadora considera os descontos de INSS e IRPF de acordo com as faixas salariais, além de permitir a inclusão de descontos especiais.

![img.png](img.png)
## Funcionalidades

- **Entrada de Dados**: Salário bruto e descontos especiais.
- **Cálculo Automático**: Descontos de INSS e IRPF são calculados automaticamente.
- **Exibição de Resultados**: Mostra o salário líquido e detalha os descontos de INSS, IRPF e especiais.

## Estrutura do Projeto

- **index.html**: Arquivo HTML principal contendo a estrutura do formulário e o contêiner para exibição dos resultados.
- **style.css**: Arquivo CSS para estilização da aplicação com um tema dark e gótico.
- **script.js**: Arquivo JavaScript principal que manipula o DOM e calcula o salário líquido.
- **inssService.js**: Arquivo JavaScript responsável pelo cálculo dos descontos de INSS.
- **irpfService.js**: Arquivo JavaScript responsável pelo cálculo dos descontos de IRPF.

## Pré-requisitos

Para rodar este projeto, você precisa de um navegador web moderno.

## Como Usar

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/seu-usuario/calculadora-salario-liquido.git
    ```

2. **Navegue até o diretório do projeto**:
    ```sh
    cd calculadora-salario-liquido
    ```

3. **Abra o arquivo `index.html` no seu navegador**:
    ```sh
    open index.html
    ```

## Estrutura de Arquivos

```sh
calculadora-salario-liquido/
├── index.html
├── styles.css
├── script.js
├── inssService.js
└── irpfService.js
```

## Exemplos de Uso
Insira o valor do salário bruto.
Insira o valor dos descontos especiais, se houver.
Clique no botão "Calcular".
Veja o resultado com o detalhamento dos descontos e o salário líquido.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT.

[MIT LICENSE](LICENSE.txt)