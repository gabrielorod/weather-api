# Weather API

A **Weather API** é uma API simples que fornece informações sobre o clima de uma cidade específica. A API integra-se com o serviço OpenWeatherMap para recuperar dados meteorológicos, incluindo temperatura, condições climáticas, visibilidade e informações sobre o vento.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - ‘Framework’ para criação de APIs REST
- **Axios** - Biblioteca para realizar requisições HTTP
- **OpenWeatherMap** - API externa para obter dados meteorológicos

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone este repositório para sua máquina local:

```bash
  git clone https://github.com/gabrielorod/weather-api.git
```

## 2. Instalar as Dependências
Navegue até o diretório do projeto e instale as dependências:

```bash
  npm install
```

## 3. Configurar Variáveis de Ambiente
Para facilitar a configuração, o projeto inclui um arquivo chamado .env.dist, que serve como um modelo para as variáveis de ambiente necessárias.

Copie o arquivo .env.dist para .env:

```bash
  cp .env.dist .env
```
Abra o arquivo .env e configure as variáveis de ambiente:

PORT=3000

OPENWEATHERMAP_BASE_URL=https://api.openweathermap.org

OPENWEATHERMAP_API_KEY=<sua_chave_de_api>

Para obter sua chave de API, acesse OpenWeatherMap e registre-se.

## 4. Rodar o Servidor
Para iniciar o servidor, use o seguinte comando:

```bash
  npm start
```
Ou, para rodar em modo de desenvolvimento (com reinicialização automática):

```bash
  npm run dev
```
O servidor estará rodando na porta 3000 por padrão.

## 5. Rodar o Script de Console
Além da API, o projeto também inclui um script de console para buscar informações meteorológicas diretamente pelo terminal.

Para executar o script:

```bash
  npm run console
```
O script pedirá que você insira o nome de uma cidade. Ele fará uma requisição à API OpenWeatherMap e exibirá as informações relevantes no console.

## 6. Testar a API
Você pode testar a API utilizando ferramentas como Postman ou CURL. Por exemplo, faça uma requisição GET para a URL:

```bash
  http://localhost:3000/weather/{city}
```
Substitua {city} pelo nome de uma cidade, como:

```bash
http://localhost:3000/weather/Campinas
```

## Licença
Este projeto está licenciado sob a MIT License.