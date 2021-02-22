import {Pedido} from "../Model/Pedido";
import {PedidoService} from "../Service/PedidoService";

export default class PedidoBusiness {

    private pedidoService: PedidoService;

    constructor() {
        this.pedidoService = new PedidoService();
    }

    async salvarPedido(pedido: Pedido){
        return await this.pedidoService.salvarPedido(pedido);
    }

}