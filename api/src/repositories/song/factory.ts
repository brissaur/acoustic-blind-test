import DataSource from "../../database";
import SongRepository from "./repository";
import SongHydrator from "./hydrator";

export const SongRepositoryFactory = () => {
  const datasource = new DataSource();
  const hydrator = new SongHydrator();
  return new SongRepository(datasource.getConnection(), hydrator);
};
