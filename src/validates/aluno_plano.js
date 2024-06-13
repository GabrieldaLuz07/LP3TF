const validate = (aluno_plano) => {
  const errors = [];

  if (!aluno_plano.id_aluno) {
    errors.push('Informe o identificador do aluno');
  } 

  if (!aluno_plano.id_plano) {
    errors.push('Informe o identificador do plano');
  }

  if (!aluno_plano.data_inicio) {
    errors.push('Informe a data de início');
  }

  return errors;
};

module.exports = {
  validate
};