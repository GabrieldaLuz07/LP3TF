const validate = (personal) => {
  const errors = [];

  if (!personal.nome) {
    errors.push('Informe o nome');
  }

  if (!personal.cpf) {
    errors.push('Informe o CPF');
  }

  if (!personal.sexo) {
    errors.push('Informe o sexo');
  }

  if (!personal.nascimento) {
    errors.push('Informe a data de nascimento');
  }

  if (!personal.cref) {
    errors.push('Informe o CREF');
  }

  return errors;
};

module.exports = {
  validate
};