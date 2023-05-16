import { server } from './server/server';


server.listen(process.env.PORT || 8080,()=> console.log('App rodando'));

