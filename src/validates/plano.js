const validate = (plano) => {
  const errors = [];

  if (!plano.nome) {
    errors.push('Informe o nome');
  }

  if (plano.valor === undefined || plano.valor === null) {
    errors.push('Informe o valor');
  }

  if (!plano.id_modalidade) {
    errors.push('Informe o identificador da modalidade');
  }

  if (!plano.id_status) {
    errors.push('Informe o identificador do status');
  }

  return errors;
};

module.exports = {
  validate
};