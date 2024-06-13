const validate = (personal_modalidade) => {
  const errors = [];

  if (!personal_modalidade.id_personal) {
    errors.push('Informe o identificador do personal');
  }

  if (!personal_modalidade.id_modalidade) {
    errors.push('Informe o identificador da modalidade');
  }

  if (!personal_modalidade.id_status) {
    errors.push('Informe o identificador do status');
  }

  return errors;
};

module.exports = {
  validate
};