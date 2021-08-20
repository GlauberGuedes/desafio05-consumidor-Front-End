import "./style.css";
import ModalProduto from "../ModalProduto";

export default function CardProdutoCarrinho({
  id,
  nome,
  quantidade,
  preco,
  imagem,
  setMensagemSucesso,
  setErro,
  descricao,
  precoProduto,
}) {



  return (
    <div className="container-cardCarrinho" >
      <ModalProduto id={id} nome={nome} quantidadeProduto={quantidade} descricao={descricao} imagem={imagem} preco={precoProduto} setMensagemSucesso={setMensagemSucesso} setErro={setErro} />
      <div className="conteudo-cardCarrinho">
        {imagem && <img src={imagem} alt="imagem do produto" />}
        <div className="informacao-cardCarrinho">
          <h3>{nome}</h3>
          <div className="quantidadeProdutos">
            <p>
              {quantidade} {quantidade === 1 ? "unidade" : "unidades"}
            </p>
          </div>
          <span>
            {Number((preco * quantidade) / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
