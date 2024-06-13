const Login = require('./login');
const Aluno = require('./aluno');
const Aluno_Avaliacao = require('./aluno_avaliacao');
const Aluno_Plano = require('./aluno_plano');
const Modalidade = require('./modalidade');
const Pagamento = require('./pagamento');
const Personal_Modalidade = require('./personal_modalidade');
const Personal = require('./personal');
const Status = require('./status');
const Plano = require('./plano');

module.exports = (app) => {
  Login(app);
  Aluno(app);
  Aluno_Avaliacao(app);
  Aluno_Plano(app);
  Modalidade(app);
  Pagamento(app);
  Personal_Modalidade(app);
  Personal(app);
  Status(app);
  Plano(app);
}