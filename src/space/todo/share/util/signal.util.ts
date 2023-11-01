import { Subject } from "rxjs";

export const currentGroupSubject = new Subject<number | null>();

export const currentItemSubject = new Subject<number | null>();
