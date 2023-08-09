const { instrutores } = require("../bancodedados");
let {identificadorInstrutor} = require ("../bancodedados");

const listarInstrutores = (req, res) => {
  return res.status(200).json(instrutores);
};

const obterInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find((elemento) => {
    return elemento.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado." });
  }

  return res.status(200).json({ instrutor });
};

const cadastrarInstrutor = (req, res) => {
    const {nome, email, status} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: 'O nome é obrigatório'});
    }

    if(!email){
        return res.status(400).json({mensagem: 'O emailé obrigatório'});
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true

    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
};

module.exports = { listarInstrutores, obterInstrutor, cadastrarInstrutor };