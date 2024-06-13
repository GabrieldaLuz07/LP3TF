const validate = (pagamento) => {
  const errors = [];

  if (pagamento.pago === undefined || pagamento.pago === null) {
    errors.push('Informe o status de pagamento (pago)');
  }

  if (pagamento.parcela === undefined || pagamento.parcela === null) {
    errors.push('Informe a parcela');
  }

  if (!pagamento.id_plano) {
    errors.push('Informe o identificador do plano');
  }

  if (!pagamento.id_aluno) {
    errors.push('Informe o identificador do aluno');
  }

  return errors;
};

module.exports = {
  validate
};