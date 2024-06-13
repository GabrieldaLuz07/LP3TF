const statusService = require('../services/status');
const { validate } = require('../validates/status');

const getStatus = async (req, res, next) => {
  try {
    const retorno = await statusService.getStatus()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postStatus = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }
    
    const retorno = await statusService.postStatus(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deleteStatus = async (req, res, next) => {
  try {
    await statusService.deleteStatus(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putStatus = async (req, res, next) => {
  try {
    let params = req.body
    params.id = req.params.id
    await statusService.putStatus(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getStatus = getStatus
module.exports.postStatus = postStatus
module.exports.deleteStatus = deleteStatus
module.exports.putStatus = putStatus