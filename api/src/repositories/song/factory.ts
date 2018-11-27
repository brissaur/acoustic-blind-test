import DataSource from "../../database";
import SongRepository from "./repository";
import SongHydrator from "./hydrator";

export const SongRepositoryFactory = (): SongRepository => {
  const datasource = new DataSource();
  const hydrator = new SongHydrator();
  return new SongRepository(datasource.getConnection(), hydrator);
};
