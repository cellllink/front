import { Subject } from "rxjs";
import { TodoGroup, TodoItem } from "../type";

export const currentGroupSubject = new Subject<TodoGroup | null>();

export const currentItemSubject = new Subject<TodoItem | null>();

export const AddGroupOrListSubject = new Subject<"group" | "list">();
