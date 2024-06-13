const personal_modalidadeService = require('../services/personal_modalidade');
const personalService = require('../services/personal');
const modalidadeService = require('../services/modalidade');
const statusService = require('../services/status');
const { validate } = require('../validates/personal_modalidade');

const getPersonal_modalidade = async (req, res, next) => {
  try {
    const retorno = await personal_modalidadeService.getPersonal_modalidade()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postPersonal_modalidade = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrada' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    const retorno = await personal_modalidadeService.postPersonal_modalidade(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deletePersonal_modalidade = async (req, res, next) => {
  try {
    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrada' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    await personal_modalidadeService.deletePersonal_modalidade(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putPersonal_modalidade = async (req, res, next) => {
  try {
    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrada' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await personal_modalidadeService.putPersonal_modalidade(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchPersonal_modalidade = async (req, res, next) => {
  try {
    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    const modalidade = await modalidadeService.getById(req.params.id_modalidade);
    if (!modalidade) {
      return res.status(404).json({ message: 'Modalidade não encontrada' });
    }

    const status = await statusService.getById(req.params.id_status);
    if (!status) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }
    
    let params = req.body
    params.id = req.params.id
    await personal_modalidadeService.patchPersonal_modalidade(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getPersonal_modalidade = getPersonal_modalidade
module.exports.postPersonal_modalidade = postPersonal_modalidade
module.exports.deletePersonal_modalidade = deletePersonal_modalidade
module.exports.putPersonal_modalidade = putPersonal_modalidade
module.exports.patchPersonal_modalidade = patchPersonal_modalidade