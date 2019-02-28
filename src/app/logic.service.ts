import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LogicService {


  constructor() { }

  public gameDataValues = {
    money: 20000,
    income: 10000,
    bonusIncome: 10,
    materials: 100,
    workers: 2,
    engineers: 1,
    energy: 0,
    maxEnergy: 100,
    goal: 8000000,
    score: 0,
    appeal: 10,
    landCost:25000
  }

  private gameValues = new BehaviorSubject<object>(this.gameDataValues)
  cast = this.gameValues.asObservable();

  changeObject(newObj){
    this.gameValues.next(newObj)
  }

  bottomLogicData() {
    return [
      {
        title: "Buying Materials",
        bonusTitle: "Bonus materials:",
        bonusValue: 10,
        primaryIcon: 'woods',
        secondaryIcon: 'materials',
        folderIcons: 'materials',
        shopItems: [
          {
            name: "few materials",
            icon: 'material',
            cost: 5000,
            number: 100
          },
          {
            name: "medium pack of materials",
            icon: 'material2',
            cost: 24000,
            number: 500
          },
          {
            name: "huge pack of materials",
            icon: 'material3',
            cost: 45000,
            number: 1000
          },
        ]
      },
      {
        title: "Hire Workers",
        bonusTitle: "Reduce workers cost by:",
        bonusValue: 10,
        primaryIcon: 'workers',
        secondaryIcon: 'worker',
        folderIcons: 'workers',
        shopItems: [
          {
            name: "One Worker",
            icon: 'worker',
            cost: 30000,
            number: 1
          },
          {
            name: "Two Workers",
            icon: 'worker2',
            cost: 55000,
            number: 2
          },
          {
            name: "Three Workers",
            icon: 'worker3',
            cost: 80000,
            number: 3
          },
        ]
      },
      {
        title: "Hire Engineers",
        primaryIcon: 'engineers',
        secondaryIcon: 'engineer',
        folderIcons: 'engineers',
        bonusTitle: "Reduce engineers cost by:",
        bonusValue: 10,
        shopItems: [
          {
            name: "One Engineer",
            icon: 'engineer',
            cost: 35000,
            number: 1
          },
          {
            name: "Two Engineers",
            icon: 'engineer2',
            cost: 65000,
            number: 2
          },
          {
            name: "Three Engineers",
            icon: 'engineer3',
            cost: 90000,
            number: 3
          },
        ]
      }
    ]
  }

  slotActions() {
    return [
      {
        name: "Buildings",
        folderIcons: "buildings",
        construct: [
          {
            name: "Garden",
            icon: "gardencenter",
            cost: 15000,
            workers: 4,
            materials: 300,
            energy: 50
          },
          {
            name: "Lumber Mill",
            icon: "lumbermill",
            cost: 35000,
            workers: 6,
            materials: 500,
            energy: 100
          },
          {
            name: "Recycle Center",
            icon: "recyclecenter",
            cost: 45000,
            workers: 8,
            materials: 800,
            energy: 120
          },
          {
            name: "Business Center",
            icon: "businesscenter",
            cost: 60000,
            workers: 15,
            materials: 2000,
            energy: 200
          },
          {
            name: "Tech Center",
            icon: "techcenter",
            cost: 90000,
            workers: 30,
            materials: 4000,
            energy: 400
          }
        ]
      },
      {
        name: "Houses",
        folderIcons: "houses",
        construct: [
          {
            name: "House",
            icon: "house01",
            cost: 3000,
            workers: 1,
            materials: 100,
            energy: 40
          },
          {
            name: "Duplex",
            icon: "house02",
            cost: 6500,
            workers: 2,
            materials: 200,
            energy: 60
          },
          {
            name: "Craftsman",
            icon: "house03",
            cost: 14000,
            workers: 4,
            materials: 350,
            energy: 80
          },
          {
            name: "Condo",
            icon: "house04",
            cost: 30000,
            workers: 6,
            materials: 560,
            energy: 90
          },
          {
            name: "Georgian",
            icon: "house05",
            cost: 40000,
            workers: 10,
            materials: 1200,
            energy: 140
          },
          {
            name: "Apartment",
            icon: "house06",
            cost: 80000,
            workers: 25,
            materials: 2200,
            energy: 250
          },
        ]
      },
      {
        name:"Marks",
        folderIcons: "marks",
        construct: [
          {
            name:"Tennis",
            icon:"tennis",
            cost:10000,
            workers:3,
            materials:500,
            energy:10,
            appeal:10
          },
          {
            name:"Pool",
            icon:"pool",
            cost:14000,
            workers:4,
            materials:600,
            energy:20,
            appeal:15
          },
          {
            name:"Minigolf",
            icon:"minigolf",
            cost:30000,
            workers:6,
            materials:800,
            energy:40,
            appeal:20
          },
          {
            name:"Amphitheater",
            icon:"amphitheater",
            cost:40000,
            workers:8,
            materials:1000,
            energy:100,
            appeal:25
          }
        ]
      },
      {
        name:"Services",
        folderIcons: "services",
        construct: [
          {
            name:"Wind",
            icon:"wind",
            cost:10000,
            workers:5,
            materials:500,
            energy:100,
            appeal:10
          },
          {
            name:"Solar",
            icon:"solar",
            cost:40000,
            workers:12,
            materials:1500,
            energy:300,
            appeal:20
          },
          {
            name:"Nuclear",
            icon:"nuclear",
            cost:80000,
            workers:40,
            materials:4000,
            energy:800,
            appeal:40
          }
        ]
      },
      {
        name:"Shops",
        folderIcons: "shops",
        construct: [
          {
            name:"Botique",
            icon:"botique",
            cost:40000,
            workers:8,
            materials:500,
            energy:100
          },
          {
            name:"Grocery",
            icon:"grocery",
            cost:60000,
            workers:16,
            materials:1000,
            energy:250
          },
          {
            name:"Cinema",
            icon:"cinema",
            cost:85000,
            workers:20,
            materials:3000,
            energy:550
          },
          {
            name:"Banckery",
            icon:"backery",
            cost:98000,
            workers:32,
            materials:5000,
            energy:700
          }
        ]
      }
    ]
  }

    public mapTopSlots = [
      {
        img: "house0/none0",
        condition: "empty",
        number:0
      },
      {
        img: "house0/none1",
        condition: "bought",
        number:1
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:2
      },
      {
        img: "house0/none1",
        condition: "bought",
        number:3
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:4
      },
    ]
    public midTopSlots = [
      {
        img: "house0/none0",
        condition: "empty",
        number:5
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:6
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:7
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:8
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:9
      }
    ]
    public bottomSlots = [
      {
        img: "house0/none0",
        condition: "empty",
        number:10
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:11
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:12
      },
      {
        img: "house0/none0",
        condition: "empty",
        number:13
      },
      {
        img: "house1/construct/construct08",
        condition: "build",
        number:14
      }
    ]
  
    private gameTopSlots = new BehaviorSubject<object>(this.mapTopSlots)
  castTopSlots = this.gameTopSlots.asObservable();

  getSlots(newObj){
    this.gameTopSlots.next(newObj)
  }
}
