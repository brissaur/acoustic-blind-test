import {sum} from "../../services";
import SongRepository from "./repository";
import DataSource from "../../database";

test("getAllSongs()", async () => {
    // const connection = jest.fn(() => {});
    const datasource = new DataSource();
    const repo = new SongRepository(datasource.getConnection());
    const songs = await repo.getAllSongs();
    console.log('songs', songs);
    // expect(sum()).toBe(0);
});