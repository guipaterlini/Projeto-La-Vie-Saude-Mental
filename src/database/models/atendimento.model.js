import { DataTypes } from "sequelize";
import { db } from "../db.js";
import { Paciente } from "./paciente.model.js";

export const Atendimento = db.define(
  "atendimento",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    paciente_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Paciente,
        key: "id",
      },
    },
    psicologo_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "atendimento",
  }
);
