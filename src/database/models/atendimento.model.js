import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Atendimento = db.define(
  "atendimento",
  {
    paciente_id: {
      type: DataTypes.STRING,
      allowNull: false,
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
