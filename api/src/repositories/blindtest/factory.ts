import DataSource from "../../database";
import BlindtestRepository from "./repository";
import BlindtestHydrator from "./hydrator";

export const blindtestRepositoryFactory = (): BlindtestRepository => {
  const datasource = new DataSource();
  const hydrator = new BlindtestHydrator();
  return new BlindtestRepository(datasource.getConnection(), hydrator);
};
