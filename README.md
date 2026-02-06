# Informações do Projeto

Uma aplicação web simples e funcional desenvolvida para auxiliar no cálculo de impostos empresariais (IRPJ e CSLL) no regime de Lucro Presumido.

O sistema permite inserir as receitas mensais, calcular automaticamente as bases de cálculo e exibir os valores finais de forma clara e organizada.

O projeto foi desenvolvido com foco em boas práticas de JavaScript, validação de dados e manipulação segura do DOM.

## Tecnologias Utilizadas

- HTML
- CSS
- JS

## Funcionalidades

- Validação dos campos de entrada (inputs)

- Bloqueio de valores negativos nos campos numéricos

- Mensagens de erro mais claras para o usuário

- Cálculo automático de IRPJ e CSLL com base nas receitas inseridas

- Soma de receitas mensais (vendas, serviços e outras receitas)

- Aplicação das alíquotas corretas para cada tipo de receita

- Cálculo de adicional de IRPJ quando a base ultrapassa R$ 60.000,00

- Desconto de impostos retidos (IRPJ e CSLL)

- Exibição dos resultados formatados em moeda brasileira (R$)

- Layout responsivo para uso em qualquer dispositivo

## Melhorias Recentes

- Refatoração do código para uso de textContent em vez de innerHTML (mais segurança e performance)

- Separação de elementos <span> para exibição de valores

- Melhor organização da manipulação do DOM

- Aprimoramento da experiência do usuário (UX) nas validações

## Demonstração

Você pode acessar o projeto em funcionamento clicando aqui:
https://andre-arcanjo.github.io/calculadora-IRPJ-CSLL-lucro-presumido/

## Como executar localmente:

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/andre-arcanjo/calculadora-irpj-csll.git

2. Acesse a pasta do projeto:

   cd calculadora-irpj-csll

3. Abra o arquivo index.html no navegador.

## Licença

Este projeto está sob a licença MIT.
Você pode utilizá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha os créditos ao autor.
   