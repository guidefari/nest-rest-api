import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '353718832342342323',
      name: 'Rena',
      qty: 3,
      description:
        'belt then drop visitor citizen evening afternoon control pour stretch spoken such treated team once slept pattern should log silly beauty species not summer',
    },
    {
      id: '558787582342342323',
      name: 'Hannah',
      qty: 5,
      description:
        'union rapidly black town know whether vegetable fierce design queen port near sum snake rocky great as fewer wood rather pet cross horn fully',
    },
    {
      id: '313023232342342323',
      name: 'Ella',
      qty: 18,
      description:
        'every remarkable voice throw twenty sky high advice wheat owner note setting smaller sleep wife local hung price outside strong bent itself track by',
    },
    {
      id: '866811992342342323',
      name: 'Josie',
      qty: 13,
      description:
        'save break easy exactly garage nails tune was silly maybe drove age swung cave tree nearby changing feel paid leg opinion helpful hollow soil',
    },
    {
      id: '689840642342342323',
      name: 'Julian',
      qty: 7,
      description:
        'picture boat attempt remarkable space high bill occasionally production screen spent pen chosen simply successful shaking plates without stood facing affect everything these wheat',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
