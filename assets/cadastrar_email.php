<?php
// Configurações do banco de dados
$servername = "seu_servidor";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}

// Receber dados do formulário
$name = $_POST['name'];
$email = $_POST['email'];
$agreement = isset($_POST['agreement']) ? 1 : 0; 

// Inserir dados no banco de dados
$sql = "INSERT INTO emails (nome, email, agreement) VALUES ('$name', '$email', $agreement)";

if ($conn->query($sql) === TRUE) {
  echo "Email cadastrado com sucesso!";
} else {
  echo "Erro ao cadastrar email: " . $conn->error;
}

$conn->close();
?>