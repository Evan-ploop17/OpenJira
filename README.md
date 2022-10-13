# 1. next.js Open-jira

para ejecutar localmente se necesita la base de datos

```
docker-compose up -d
```

* El -d significa __deteached__

* Mongo URL local:

```
mongodb://localhost:27017/entriesdb
```

## 1.1. Configurar las variables de entorno 
Renombrar el archivo __.env.template__ a __.env__

## Llenar base de datos con información 
```
http://localhost:3000/api/seed
```