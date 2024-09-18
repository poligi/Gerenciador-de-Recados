//** Objetivo:
/*
Desenvolver um programa de gerenciamento de recados, permitindo a criação,
visualização, atualização e exclusão de recados associados a contas de
usuários. 
*/

/*
1. **Cadastro de Usuário**
    - Permitir o cadastro de novos usuários com as informações:
        - Nome
        - E-mail
        - Senha
*/

let usuarios = []

const cadastro = (nome, email, senha) => {
    const usuarioExiste = usuarios.find(usuario => usuario.email === email)

    if (usuarioExiste) {
        console.log("O e-mail já está cadastrado.")
    } else {
        usuarios.push({nome, email, senha, recados: []}) //novo usuário junto com o array de recados vazio
        console.log("Usuário cadastrado.")
    }
}

/*
2. **Login de Usuário**
    - Implementar a funcionalidade de login para um usuário registrado.
    - Solicitar e validar e-mail e senha para acesso. 
*/

const login = (email, senha) => {
    //procurando o usuário pelo email
    const usuario = usuarios.find(usuario => usuario.email === email)

    if (usuario) {
        //verificação de senha
        if (usuario.senha === senha) {
            console.log(`Login efetuado, seja bem vindo(a), ${usuario.nome}`)
            return usuario //retorna o usuário logado
        } else {
            console.log("Senha incorreta.")
        }   
    } else {
        console.log("Usuário não encontrado.")
    }
}

/*
3. **Gerenciamento de Recados**
    - Criar uma função para cadastrar recados associados a um usuário específico. 
*/

const novoRecado = (usuario, titulo, descricao) => {
    usuario.recados.push({titulo, descricao})
    console.log("Recado cadastrado.")
}

/*
    - Implementar uma função para visualizar todos os recados de um usuário. 
*/

const todosOsRecados = (usuario) => {
    if (usuario && usuario.recados.length > 0) {
        console.log("Recados do usuário:")
        usuario.recados.forEach((recado, index) => {
            console.log(`${index + 1}. Título: ${recado.titulo}, Descrição: ${recado.descricao}`)
        }) 
    } else {
        console.log("Nenhum recado encontrado.")
    }
}

/*
    - Oferecer a funcionalidade de atualizar o título e a descrição de um
     recado existente. 
*/

const atualizarRecado = (usuario, indexRecado, novoTitulo, novaDescricao) => {
    if (usuario && usuario.recados[indexRecado]) {
        usuario.recados[indexRecado].titulo = novoTitulo
        usuario.recados[indexRecado].descricao = novaDescricao

        console.log("Recado atualizado com sucesso!")
    } else {
        console.log("Recado não econtrado.")
    }
}

/*
    - Criar uma função para excluir um recado específico. 
*/

const excluirRecado = (usuario, indexRecado) => {
    if (usuario && usuario.recados[indexRecado]) {
        usuario.recados.splice(indexRecado, 1)
        console.log("Recado exluído com sucesso!")
    } else {
        console.log("Recado não encontardo.")
    }
}


//Teste

cadastro("Giovana Pollo", "pollogiih2@gmail.com", "Frederico456")
cadastro("Cristian De Souza", "sgcris02@gmail.com", "Burro752")

let usuarioLogado = login("pollogiih2@gmail.com", "Frederico456")

if (usuarioLogado) {
    novoRecado(usuarioLogado, "Comida Fred", "Dar comida pro Frederico quando chegar em casa")
    novoRecado(usuarioLogado, "Carne", "Tirar a carne do congelador")
    novoRecado(usuarioLogado, "Creatina", "Tomar 3g de creatina às 14h.")
    todosOsRecados(usuarioLogado)

    atualizarRecado(usuarioLogado, 1, "Aipim", "Tirar o aipim do congelador.")
    todosOsRecados(usuarioLogado)

    excluirRecado(usuarioLogado, 2)
    todosOsRecados(usuarioLogado)

}



