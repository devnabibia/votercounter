import {Seggio} from "./Seggio";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

export class DB {
  seggioCorrente: Seggio;
  seggi: Array<Seggio>;
}

export class DBService {
  data: DB = new DB();
  dataChange: Observable<any>;
  subscriber: Subscriber<DB>;

  constructor() {
    this.dataChange = new Observable<DB>(subscriber => {
      this.subscriber = subscriber;
    });
  }

  setData(data: DB) {
    this.data = data;
    this.subscriber.next(data);
  }
}
