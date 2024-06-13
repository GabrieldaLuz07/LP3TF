const planoService = require('../services/plano');
const modalidadeService = require('../services/modalidade');
const statusService = require('../services/status');
const { validate } = require('../validates/plano');


const getPlano = async (req, res, next) => {
  try {
    const retorno = await planoService.getPlano()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postPlano = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrado' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    const retorno = await planoService.postPlano(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deletePlano = async (req, res, next) => {
  try {
    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrado' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    await planoService.deletePlano(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putPlano = async (req, res, next) => {
  try {
    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrado' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await planoService.putPlano(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchPlano = async (req, res, next) => {
  try {
    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrado' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }
    
    let params = req.body
    params.id = req.params.id
    await planoService.patchPlano(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getPlano = getPlano
module.exports.postPlano = postPlano
module.exports.deletePlano = deletePlano
module.exports.putPlano = putPlano
module.exports.patchPlano = patchPlano