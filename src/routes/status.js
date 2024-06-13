const statusController = require('../controllers/status');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/status', authMiddleware, statusController.getStatus
  /*
    #swagger.tags = ["Status"]
    #swagger.summary = "Obter todos os status"
    #swagger.description = "Endpoint para obter a lista de todos os status."
    #swagger.responses[200] = {
      description: "Lista de status obtida com sucesso.",
      schema: [{
        id_status: 1,
        situacao: "Ativo"
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/status', authMiddleware, statusController.postStatus
  /*
    #swagger.tags = ["Status"]
    #swagger.summary = "Adicionar um novo status"
    #swagger.description = "Endpoint para adicionar um novo status."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do novo status a ser inserido',
      required: true,
      type: 'object',
      schema: {
        situacao: "Ativo"
      }
    }
    #swagger.responses[201] = {
      description: "Status criado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/status/:id_status', authMiddleware, statusController.deleteStatus
  /*
    #swagger.tags = ["Status"]
    #swagger.summary = "Deletar um status"
    #swagger.description = "Endpoint para deletar um status existente."
    #swagger.parameters['id_status'] = {
      in: 'path',
      description: 'ID do status a ser deletado',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Status deletado com sucesso."
    }
    #swagger.responses[404] = {
      description: "Status não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/status/:id_status', authMiddleware, statusController.putStatus
  /*
    #swagger.tags = ["Status"]
    #swagger.summary = "Atualização parcial de um status"
    #swagger.description = "Endpoint para atualização parcial das informações de um status existente."
    #swagger.parameters['id_status'] = {
      in: 'path',
      description: 'ID do status a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados do status',
      required: true,
      type: 'object',
      schema: {
        situacao: "Inativo"
      }
    }
    #swagger.responses[200] = {
      description: "Status atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Status não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}