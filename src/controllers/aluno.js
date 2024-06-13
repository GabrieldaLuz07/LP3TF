const alunoService = require('../services/aluno');
const statusService = require('../services/status');
const planoService = require('../services/plano');
const { validate } = require('../validates/aluno');

const getAluno = async (req, res, next) => {
  try {
    const retorno = await alunoService.getAluno()
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }

}

const postAluno = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    // const status = await statusService.getById(req.params.id_status);
    // if (!status) {
    //   return res.status(404).json({ message: 'Status não encontrado' });
    // }

    // const plano = await planoService.getById(req.params.id_plano);
    // if (!plano) {
    //   return res.status(404).json({ message: 'Plano não encontrado' });
    // }

    const retorno = await alunoService.postAluno(req.body)
    res.status(201).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }

}

const deleteAluno = async (req, res, next) => {
  try {
    const status = await statusService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    await alunoService.deleteAluno(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err));
  } catch (err) {
    next(err);
  }
}

const putAluno = async (req, res, next) => {
  try {
    const status = await statusService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await alunoService.putAluno(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchAluno = async (req, res, next) => {
  try {
    const status = await statusService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    
    let params = req.body
    params.id = req.params.id
    await alunoService.patchAluno(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getAluno = getAluno
module.exports.postAluno = postAluno
module.exports.deleteAluno = deleteAluno
module.exports.putAluno = putAluno
module.exports.patchAluno = patchAluno