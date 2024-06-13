const validate = (modalidade) => {
  const errors = [];

  if (!modalidade.nome) {
    errors.push('Informe o nome');
  }

  if (!modalidade.hora_inicio) {
    errors.push('Informe a hora de início');
  }

  if (!modalidade.hora_fim) {
    errors.push('Informe a hora do fim');
  }

  return errors;
};

module.exports = {
  validate
};