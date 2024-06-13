const personalService = require('../services/personal');
const { validate } = require('../validates/personal');

const getPersonal = async (req, res, next) => {
  try {
    const retorno = await personalService.getPersonal()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postPersonal = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }
    
    const retorno = await personalService.postPersonal(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deletePersonal = async (req, res, next) => {
  try {
    await personalService.deletePersonal(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putPersonal = async (req, res, next) => {
  try {
    let params = req.body
    params.id = req.params.id
    await personalService.putPersonal(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchPersonal = async (req, res, next) => {
  try {
    let params = req.body
    params.id = req.params.id
    await personalService.patchPersonal(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getPersonal = getPersonal
module.exports.postPersonal = postPersonal
module.exports.deletePersonal = deletePersonal
module.exports.putPersonal = putPersonal
module.exports.patchPersonal = patchPersonal