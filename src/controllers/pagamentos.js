module.exports = function(app){
    app.get('/pagamentos', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('OK.');
    });

    app.post('/pagamentos/pagamento', function (req, res) {
        let pagamento = req.body;

        const connection = app.persistenia.connectionFactory();
        const pagamentoDao = app.persistenia.PagamentoDao(connection);

        res.send(pagamento);
    });
  }
  