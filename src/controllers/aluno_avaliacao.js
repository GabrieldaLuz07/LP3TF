const aluno_avaliacaoService = require('../services/aluno_avaliacao');
const alunoService = require('../services/aluno');
const personalService = require('../services/personal');
const { validate } = require('../validates/aluno_avaliacao');

const getAluno_avaliacao = async (req, res, next) => {
  try {
    const retorno = await aluno_avaliacaoService.getAluno_avaliacao()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postAluno_avaliacao = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    const retorno = await aluno_avaliacaoService.postAluno_avaliacao(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deleteAluno_avaliacao = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    await aluno_avaliacaoService.deleteAluno_avaliacao(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putAluno_avaliacao = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await aluno_avaliacaoService.putAluno_avaliacao(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchAluno_avaliacao = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const personal = await personalService.getById(req.params.id_personal);
    if (!personal) {
      return res.status(404).json({ message: 'Personal não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await aluno_avaliacaoService.patchAluno_avaliacao(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getAluno_avaliacao = getAluno_avaliacao
module.exports.postAluno_avaliacao = postAluno_avaliacao
module.exports.deleteAluno_avaliacao = deleteAluno_avaliacao
module.exports.putAluno_avaliacao = putAluno_avaliacao
module.exports.patchAluno_avaliacao = patchAluno_avaliacao