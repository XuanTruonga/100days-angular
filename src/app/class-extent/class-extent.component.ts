import { Component } from '@angular/core';

@Component({
  selector: 'app-class-extent',
  imports: [],
  templateUrl: './class-extent.component.html',
  styleUrl: './class-extent.component.css',
})
export abstract class ClassExtentComponent<T> {
  protected model!: T;
  find(): T[] {
    return [this.model];
  }
  findOne(): T {
    return this.model;
  }
}

interface Dog {
  bark(): void;
}
interface Cat {
  meow(): void;
}

export class DogService extends ClassExtentComponent<Dog> {}
export class CatService extends ClassExtentComponent<Cat> {}
/**
 *  Khi nào dùng protected?
    Khi chỉ muốn lớp con có thể truy cập, nhưng không cho phép truy cập từ bên ngoài.
 */

const dogservice = new DogService();
const catservice = new CatService();

dogservice.findOne().bark();
catservice.findOne().meow();
