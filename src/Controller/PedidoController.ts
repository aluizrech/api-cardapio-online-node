import { Router, Request, Response, NextFunction } from 'express';
import PedidoBusiness from "../Business/PedidoBusiness";
import {Pedido} from "../Model/Pedido";

export class PedidoController {
    router: Router;

    private pedidoBusiness: PedidoBusiness;

    constructor() {
        this.pedidoBusiness = new PedidoBusiness();
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get('/', this.getPedidos);
        this.router.post('/', this.salvarPedido);
    }

    public getPedidos(req: Request, res: Response, next: NextFunction) {
        res.send("PedidoController");
    }

    public async salvarPedido(req: Request, res: Response, next: NextFunction) {
        const pedido: Pedido = req.body;
        const pedidoBusiness: PedidoBusiness = new PedidoBusiness();
        console.log(pedido);
        // pedidoBusiness.salvarPedido(pedido);
        res.send(pedido);
    }

}
export default new PedidoController();