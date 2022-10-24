interface UserProps {
   name?: string;
   age?: number;
}

type CallBack = () => void;

export class User {
   private events: { [key: string]: CallBack[] } = {};

   constructor(private data: UserProps) {}

   get(propName: string): (number | string) {
      return this.data[propName];
   }

   set(update: UserProps): void {
      Object.assign(this.data, update);  
   }

   on(eventName: string, callBack: CallBack) {
      const handlers = this.events[eventName] || [];
      handlers.push(callBack);
      this.events[eventName] = handlers;
   }

   trigger(eventName: string): void {
      const handlers = this.events[eventName];
      if(!handlers || handlers.length === 0) {
         return;
      }
      
      handlers.forEach(callBack => callBack());
   }
}
