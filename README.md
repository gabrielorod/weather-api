# Weather API

A **Weather API** é uma API simples que fornece informações sobre o clima de uma cidade específica. A API integra-se com o serviço OpenWeatherMap para recuperar dados meteorológicos, incluindo temperatura, condições climáticas, visibilidade e informações sobre o vento.

## Funcionalidade

- A API permite consultar informações climáticas para uma cidade específica.
- As respostas incluem dados como temperatura atual, sensação térmica, temperatura mínima e máxima, condições do tempo e informações sobre o vento.
- A API também fornece respostas apropriadas para erros, como cidade não encontrada ou falhas de autenticação.

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

### 2. Instalar as Dependências

Navegue até o diretório do projeto e instale as dependências:

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione a chave da API do OpenWeatherMap:
.env
PORT=3000
OPENWEATHERMAP_BASE_URL=https://api.openweathermap.org 
OPENWEATHERMAP_API_KEY=

Para obter sua chave de API, acesse [OpenWeatherMap](https://openweathermap.org/api) e registre-se.

### 4. Rodar o Servidor

Para rodar o servidor, use o seguinte comando:
```bash
  npm start
```
Ou, para rodar em modo de desenvolvimento (com reinicialização automática), use:
```bash
  npm run dev
```
O servidor estara rodando na porta `3000` por padrão.

### 5. Testar a API

Você pode testar a API utilizando ferramentas como **Postman** ou **CURL**. Para testar, faça uma requisição GET para a URL `http://localhost:3000/weather/{city}`, substituindo `{city}` pelo nome de uma cidade, por exemplo:
http://localhost:3000/weather/SaoPaulo

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
