const validate = (aluno) => {
  const errors = [];

  if (!aluno.nome) {
    errors.push('Informe o nome');
  }

  if (!aluno.cpf) {
    errors.push('Informe o CPF');
  }

  if (!aluno.nascimento) {
    errors.push('Informe a data de nascimento');
  }

  if (!aluno.sexo) {
    errors.push('Informe o sexo');
  }

  if (!aluno.id_plano) {
    errors.push('Informe o identificador do plano');
  }

  if (!aluno.id_status) {
    errors.push('Informe o identificador do status');
  }

  return errors;
};

module.exports = {
  validate
};