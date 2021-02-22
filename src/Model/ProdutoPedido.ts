import {Model} from "sequelize";

export default interface ProdutoPedido extends Model {
    produtoId: number,
    quantidade: number,
    anotacao: string,
    dadosPagamento: { nome: '', numeroCartao: '', mes: '', ano: '', codigoSeguranca: '' }
}