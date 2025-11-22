

import {io} from 'socket.io-client';

export function connectWs(){
    return io('https://chat-app-backend-jade-nine.vercel.app');
    

}