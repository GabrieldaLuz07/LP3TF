const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
  info: {
    version: "1.0.0",
    title: "Trabalho Final LP3",
    description: "Documentação do trabalho final"
  },
  host: "localhost:3000",
  basePath: "",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/login.js', './src/routes/aluno.js', './src/routes/aluno_avaliacao.js', './src/routes/aluno_plano.js', './src/routes/pagamento.js', './src/routes/personal.js', './src/routes/modalidade.js', './src/routes/personal_modalidade.js', './src/routes/status.js', './src/routes/plano.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);