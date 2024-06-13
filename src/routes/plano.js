const planoController = require('../controllers/plano');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/plano', authMiddleware, planoController.getPlano
  /*
    #swagger.tags = ["Plano"]
    #swagger.summary = "Obter todos os planos"
    #swagger.description = "Endpoint para obter a lista de todos os planos."
    #swagger.responses[200] = {
      description: "Lista de planos obtida com sucesso.",
      schema: [{
        id_plano: 1,
        nome: "Basic",
        valor: 99.99,
        periodo: 12,
        id_modalidade: 1,
        id_status: 1
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/plano', authMiddleware, planoController.postPlano
  /*
    #swagger.tags = ["Plano"]
    #swagger.summary = "Adicionar um novo plano"
    #swagger.description = "Endpoint para adicionar um novo plano."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do novo plano a ser inserido',
      required: true,
      type: 'object',
      schema: {
        nome: "Premium",
        valor: 199.99,
        periodo: 6,
        id_modalidade: 2,
        id_status: 1
      }
    }
    #swagger.responses[201] = {
      description: "Plano criado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/plano/:id_plano', authMiddleware, planoController.deletePlano
  /*
    #swagger.tags = ["Plano"]
    #swagger.summary = "Deletar um plano"
    #swagger.description = "Endpoint para deletar um plano existente."
    #swagger.parameters['id_plano'] = {
      in: 'path',
      description: 'ID do plano a ser deletado',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Plano deletado com sucesso."
    }
    #swagger.responses[404] = {
      description: "Plano não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/plano/:id_plano', authMiddleware, planoController.putPlano
  /*
    #swagger.tags = ["Plano"]
    #swagger.summary = "Atualizar um plano"
    #swagger.description = "Endpoint para atualizar as informações de um plano existente."
    #swagger.parameters['id_plano'] = {
      in: 'path',
      description: 'ID do plano a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados do plano',
      required: true,
      type: 'object',
      schema: {
        nome: "Premium",
        valor: 199.99,
        periodo: 6,
        id_modalidade: 2,
        id_status: 1
      }
    }
    #swagger.responses[200] = {
      description: "Plano atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Plano não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/plano/:id_plano', authMiddleware, planoController.patchPlano
  /*
    #swagger.tags = ["Plano"]
    #swagger.summary = "Atualização parcial de um plano"
    #swagger.description = "Endpoint para atualização parcial das informações de um plano existente."
    #swagger.parameters['id_plano'] = {
      in: 'path',
      description: 'ID do plano a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados do plano',
      required: true,
      type: 'object',
      schema: {
        nome: "Premium",
        valor: 199.99,
        periodo: 6,
        id_modalidade: 2,
        id_status: 1
      }
    }
    #swagger.responses[200] = {
      description: "Plano atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Plano não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}