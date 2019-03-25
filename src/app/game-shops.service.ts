import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameShopsService {

  constructor() { }
// ------------------------ Game shops and their items --------------------- //
  getShopItems() {
    return [
      {
        title: "Buying Materials",
        primaryIcon: 'WOODS',
        secondaryIcon: 'MATERIALS',
        folderIcons: 'MATERIALS',
        shopItems: [
          {
            name: "few materials",
            icon: 'MATERIAL_00',
            cost: 5000,
            number: 100,
            id: 1
          },
          {
            name: "medium pack of materials",
            icon: 'MATERIAL_01',
            cost: 24000,
            number: 500,
            id: 2
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_02',
            cost: 48000,
            number: 1000,
            id: 3
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_03',
            cost: 118000,
            number: 2500,
            id: 4
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_04',
            cost: 235000,
            number: 5000,
            id: 5
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_05',
            cost: 460000,
            number: 10000,
            id: 6
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_06',
            cost: 910000,
            number: 20000,
            id: 7
          },
        ]
      },
      {
        title: "Hire Workers",
        primaryIcon: 'WORKERS',
        secondaryIcon: 'WORKER',
        folderIcons: 'WORKERS',
        shopItems: [
          {
            name: "One Worker",
            icon: 'WORKER_01',
            cost: 30000,
            number: 1,
            id: 1
          },
          {
            name: "Two Workers",
            icon: 'WORKER_02',
            cost: 55000,
            number: 2,
            id: 2
          },
          {
            name: "Three Workers",
            icon: 'WORKER_03',
            cost: 80000,
            number: 3,
            id: 3
          },
          {
            name: "Six Workers",
            icon: 'WORKER_03',
            cost: 155000,
            number: 6,
            id: 4
          },
          {
            name: "Twelve Workers",
            icon: 'WORKER_03',
            cost: 300000,
            number: 12,
            id: 5
          },
          {
            name: "Workers",
            icon: 'WORKER_03',
            cost: 550000,
            number: 24,
            id: 6
          },
        ]
      },
      {
        title: "Hire Engineers",
        primaryIcon: 'ENGINEERS',
        secondaryIcon: 'ENGINEER',
        folderIcons: 'ENGINEERS',
        shopItems: [
          {
            name: "One Engineer",
            icon: 'ENGINEER_01',
            cost: 35000,
            number: 1,
            id: 1
          },
          {
            name: "Two Engineers",
            icon: 'ENGINEER_02',
            cost: 65000,
            number: 2,
            id: 2
          },
          {
            name: "Three Engineers",
            icon: 'ENGINEER_03',
            cost: 90000,
            number: 3,
            id: 3
          },
          {
            name: "Three Engineers",
            icon: 'ENGINEER_03',
            cost: 170000,
            number: 6,
            id: 4
          },
          {
            name: "Three Engineers",
            icon: 'ENGINEER_03',
            cost: 330000,
            number: 12,
            id: 5
          },
          {
            name: "Three Engineers",
            icon: 'ENGINEER_03',
            cost: 620000,
            number: 24,
            id: 6
          },
        ]
      }
    ]
  }
}
