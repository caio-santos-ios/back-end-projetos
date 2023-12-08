import "dotenv/config"
import path from "path";
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";
import { Project } from "./entities/project.entity";

const config = (): DataSourceOptions => {
    const pathEntities: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')
    
    const dbUrl: string | undefined = process.env.DB
    if (!dbUrl) throw new Error('Erro ao conectar ao db.')
    
    return {
      type: 'postgres',
      url: dbUrl,
      synchronize: false,
      logging: false,
      migrations: [migrationsPath],
      entities: [pathEntities],
    }
  }

export const dataBaseSourse = new DataSource(config())

export const projectRepository = dataBaseSourse.getRepository(Project)