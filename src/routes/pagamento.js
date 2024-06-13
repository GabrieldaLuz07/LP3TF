const pagamentoController = require('../controllers/pagamento');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/pagamento', authMiddleware, pagamentoController.getPagamento
  /*
    #swagger.tags = ["Pagamento"]
    #swagger.summary = "Obter todos os pagamentos"
    #swagger.description = "Endpoint para obter a lista de todos os pagamentos."
    #swagger.responses[200] = {
      description: "Lista de pagamentos obtida com sucesso.",
      schema: [{
        id_pagamento: 1,
        pago: true,
        data_limite: "2024-06-01",
        data_pagamento: "2024-05-31",
        parcela: 1,
        id_plano: 1,
        id_aluno: 1
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/pagamento', authMiddleware, pagamentoController.postPagamento
  /*
    #swagger.tags = ["Pagamento"]
    #swagger.summary = "Adicionar um novo pagamento"
    #swagger.description = "Endpoint para adicionar um novo pagamento."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do novo pagamento a ser inserido',
      required: true,
      type: 'object',
      schema: {
        pago: true,
        data_limite: "2024-06-01",
        data_pagamento: "2024-05-31",
        parcela: 1,
        id_plano: 1,
        id_aluno: 1
      }
    }
    #swagger.responses[201] = {
      description: "Pagamento criado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/pagamento/:id_pagamento', authMiddleware, pagamentoController.deletePagamento
  /*
    #swagger.tags = ["Pagamento"]
    #swagger.summary = "Deletar um pagamento"
    #swagger.description = "Endpoint para deletar um pagamento existente."
    #swagger.parameters['id_pagamento'] = {
      in: 'path',
      description: 'ID do pagamento a ser deletado',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Pagamento deletado com sucesso."
    }
    #swagger.responses[404] = {
      description: "Pagamento não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/pagamento/:id_pagamento', authMiddleware, pagamentoController.putPagamento
  /*
    #swagger.tags = ["Pagamento"]
    #swagger.summary = "Atualizar um pagamento"
    #swagger.description = "Endpoint para atualizar as informações de um pagamento existente."
    #swagger.parameters['id_pagamento'] = {
      in: 'path',
      description: 'ID do pagamento a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados do pagamento',
      required: true,
      type: 'object',
      schema: {
        pago: true,
        data_limite: "2024-06-01",
        data_pagamento: "2024-05-31",
        parcela: 1,
        id_plano: 1,
        id_aluno: 1
      }
    }
    #swagger.responses[200] = {
      description: "Pagamento atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Pagamento não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/pagamento/:id_pagamento', authMiddleware, pagamentoController.patchPagamento
  /*
    #swagger.tags = ["Pagamento"]
    #swagger.summary = "Atualização parcial de um pagamento"
    #swagger.description = "Endpoint para atualização parcial das informações de um pagamento existente."
    #swagger.parameters['id_pagamento'] = {
      in: 'path',
      description: 'ID do pagamento a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados do pagamento',
      required: true,
      type: 'object',
      schema: {
        pago: true,
        data_limite: "2024-06-01",
        data_pagamento: "2024-05-31",
        parcela: 1,
        id_plano: 1,
        id_aluno: 1
      }
    }
    #swagger.responses[200] = {
      description: "Pagamento atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Pagamento não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}