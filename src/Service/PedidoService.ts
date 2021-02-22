import {Pedido} from "../Model/Pedido";

export class PedidoService {

    async salvarPedido(pedido: Pedido){
        const newUser = await Pedido.create(pedido);
        console.log(newUser);
        return newUser;
    }

}