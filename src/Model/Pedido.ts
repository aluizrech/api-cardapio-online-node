import ProdutoPedido from "./ProdutoPedido";
import { Model, DataTypes} from "sequelize";
import { sequelize } from "../Configuration/SequelizeConfiguration"

export class Pedido extends Model {
    id: number;
    pedido: ProdutoPedido[];
    nome: string;
    numeroCartao: string;
    mes: string;
    ano: string;
    codigoSeguranca: string;
}

Pedido.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        data_pedido: {
            type: new DataTypes.DATE(),
            allowNull: true,
        },
        valor: {
            type: new DataTypes.DECIMAL(),
            allowNull: true,
        },
        preferredName: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        }
        ,nome: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
        numero_cartao: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
        mes: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
        ano: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
        codigo_seguranca: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        }

    },
    {
        tableName: "pedido",
        sequelize,
    }
);