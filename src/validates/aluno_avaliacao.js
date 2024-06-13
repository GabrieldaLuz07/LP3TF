const validate = (aluno_avaliacao) => {
  const errors = [];

  if (!aluno_avaliacao.data_avaliacao) {
    errors.push('Informe a data da avaliação');
  } 

  if (!aluno_avaliacao.altura) {
    errors.push('Informe a altura do aluno');
  }

  if (!aluno_avaliacao.peso) {
    errors.push('Informe o peso do aluno');
  }

  if (!aluno_avaliacao.id_aluno) {
    errors.push('Informe o identificador do aluno');
  }

  if (!aluno_avaliacao.id_personal) {
    errors.push('Informe o identificador do personal');
  }

  return errors;
};

module.exports = {
  validate
};