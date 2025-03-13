export const authors = [
  {
    id: 1,
    name: 'user1',
    phone: '0111111111',
    email: 'admin11111@gmail.com',
  },
  {
    id: 2,
    name: 'user2',
    phone: '022222222',
    email: 'admin22222@gmail.com',
  },
  {
    id: 3,
    name: 'user3',
    phone: '033333333',
    email: 'admin33333@gmail.com',
  },
  {
    id: 4,
    name: 'user4',
    phone: '0444444444',
    email: 'admin44444@gmail.com',
  },
  {
    id: 5,
    name: 'user5',
    phone: '0555555555',
    email: 'admin5555@gmail.com',
  },
];
/**@ViewChild */
/**
@ViewChild(Component)	Truy xuất component con trong component cha
@ViewChild('selector')	Truy xuất phần tử HTML cụ thể bằng ElementRef
ngAfterViewInit()	Được gọi sau khi ViewChild đã được khởi tạo
this.child.method()	Gọi phương thức của component con từ component cha
this.elementRef.nativeElement.style	Thay đổi trực tiếp giao diện của phần tử HTML
*/

