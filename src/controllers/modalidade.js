const modalidadeService = require('../services/modalidade');
const { validate } = require('../validates/modalidade');

const getModalidade = async (req, res, next) => {
  try {
    const retorno = await modalidadeService.getModalidade()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postModalidade = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    const retorno = await modalidadeService.postModalidade(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deleteModalidade = async (req, res, next) => {
  try {
    await modalidadeService.deleteModalidade(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putModalidade = async (req, res, next) => {
  try {
    let params = req.body
    params.id = req.params.id
    await modalidadeService.putModalidade(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchModalidade = async (req, res, next) => {
  try {
    let params = req.body
    params.id = req.params.id
    await modalidadeService.patchModalidade(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getModalidade = getModalidade
module.exports.postModalidade = postModalidade
module.exports.deleteModalidade = deleteModalidade
module.exports.putModalidade = putModalidade
module.exports.patchModalidade = patchModalidade