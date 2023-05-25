import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BroadcastMessage } from '../interfaces/boadcast-menssage.interface';


@Injectable({
  providedIn: 'root'
})
export class BroadcastMenssageService {

  broadcastChannel!: BroadcastChannel;
  onMessage = new Subject<any>();

  constructor() {
    this.initialize();
  }

  initialize() {
    const name = 'chanel-rct-ids';
    this.broadcastChannel = new BroadcastChannel(name);
    this.broadcastChannel.onmessage = (message) => this.onMessage.next(message.data);
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  listenOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessage.pipe(
      filter(message => message.type === type)
    );
  }

}