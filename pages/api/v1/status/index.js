function status(request, response) {
  response.status(200).json({ chave: "Meu novo site está a caminho, além de usar para me divulgar farei um blog pessoal" });
}

export default status;
