import express from 'express';
import routes from './routes';
import cors from 'cors';
import { Server } from 'socket.io';

require('../sequelize');

const app = express();

app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  next();  
})
app.use(routes);

//porta do back
const server = app.listen(3333, () => {
  console.log('Backend Started')
})

const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

// ------------------------------- COMENTARIOS -------------------------------------
type User = {
  id: string;
  socketId: string;
  placeId?: string;
}

// Aramzenamos os usuários que estão conectados.
const users: User[] = [];

// Comentários serão configurados aqui!
io.on('connection', (socket: any) => {
  console.log('Usuário conectado', socket.id);

  // Quando há um novo novo usuário, o socket dispara esse "evento".
  socket.on('newUser', (id: any) => {
    const socketAlreadyExist = users.filter(el => el.socketId === socket.id);
    const idAlreadyExist = users.filter(el => el.id === id);
    if(id !== '' && socketAlreadyExist.length === 0 && idAlreadyExist.length === 0) {
      users.push({ id, socketId: socket.id });
    } else {
      console.log('Esse usuário já está conectado!')
    }
  });

  // Configuração de em qual lugar o usuário está conectado.
  socket.on('joinPlace', (id: any, placeId: any) => {
    for(let i = 0; i < users.length; i++) {
      if(users[i].socketId === socket.id) {
        console.log(`O usuário ${users[i].id} entrou no lugar ${placeId}`)
        users[i].placeId = placeId;
      }
    }
  })

  // Criação de um lugar. Esse lugar será usado para que outro
  // usuário se conecte usando joinPlace.
  socket.on('createPlaceRoom', (id: any, placeId: any) => {
    io.emit('getRoom')
  })

  // Novo comentario
  socket.on('commentary', (id: any, placeId: any) => {
    for(const user of users) {
      if(placeId === user.placeId) {
        console.log('Mandando comentários')
        io.to(user.socketId).emit('getCommentary', placeId)
      }
    }
  })

  //delete
  socket.on('delete', (id: any, placeId: any) => {
    for(const user of users) {
      if(placeId === user.placeId) {
        console.log('Mandando comentários')
        io.to(user.socketId).emit('getCommentary', placeId)
      }
    }
  })

  // Quando o usuário é desconectado, o socket dispara esse "evento".
  socket.on('disconnect', () => {
    console.log('Usuário desconectado', socket.id);
    for(let i = 0; i < users.length; i++) {
      if(users[i].socketId === socket.id) {
        users.splice(i, 1);
      }
    }
  });
})
