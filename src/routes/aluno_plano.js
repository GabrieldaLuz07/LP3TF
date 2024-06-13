const alunoPlanoController = require('../controllers/aluno_plano');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/aluno_plano', authMiddleware, alunoPlanoController.getAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Obter todas as associações aluno_plano"
    #swagger.description = "Endpoint para obter a lista de todas as associações aluno_plano."
    #swagger.responses[200] = {
      description: "Lista de associações aluno_plano obtida com sucesso.",
      schema: [{
        id_aluno_plano: 1,
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Nenhuma"
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/aluno_plano', authMiddleware, alunoPlanoController.postAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Adicionar uma nova associação aluno_plano"
    #swagger.description = "Endpoint para adicionar uma nova associação aluno_plano."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados da nova associação aluno_plano a ser inserida',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Nenhuma"
      }
    }
    #swagger.responses[201] = {
      description: "Associação aluno_plano criada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.deleteAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Deletar uma associação aluno_plano"
    #swagger.description = "Endpoint para deletar uma associação aluno_plano existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação aluno_plano a ser deletada',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Associação aluno_plano deletada com sucesso."
    }
    #swagger.responses[404] = {
      description: "Associação aluno_plano não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.putAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Atualizar uma associação aluno_plano"
    #swagger.description = "Endpoint para atualizar as informações de uma associação aluno_plano existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação aluno_plano a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados da associação aluno_plano',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Atualizada"
      }
    }
    #swagger.responses[200] = {
      description: "Associação aluno_plano atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação aluno_plano não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.patchAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Atualização parcial de uma associação aluno_plano"
    #swagger.description = "Endpoint para atualização parcial das informações de uma associação aluno_plano existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação aluno_plano a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados da associação aluno_plano',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Parcialmente atualizada"
      }
    }
    #swagger.responses[200] = {
      description: "Associação aluno_plano atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação aluno_plano não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}