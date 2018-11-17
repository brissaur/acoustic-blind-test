import DataSource from '../../database';
import SongRepository from './repository';

const SongRepositoryFactory = () => {
    const datasource = new DataSource();
    return new SongRepository(datasource.getConnection());
};