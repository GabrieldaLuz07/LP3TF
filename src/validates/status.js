const validate = (status) => {
  const errors = [];

  if (!status.situacao) {
    errors.push('Informe a situação');
  }

  return errors;
};

module.exports = {
  validate
};