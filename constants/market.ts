import { IHeaderSubMenu, ISortByText } from '../interfaces/General';
export const headerSubMenus: IHeaderSubMenu[] = [
  {
    id: 1,
    name: 'New',
    iconName: 'star',
    type: 'antdesign'
  },
  {
    id: 2,
    name: 'DeFi',
    iconName: 'network',
    type: 'entypo'
  },
  {
    id: 3,
    name: 'NFT/Gaming',
    iconName: 'game-controller',
    type: 'entypo'
  },
  {
    id: 4,
    name: 'Others',
    iconName: 'public',
    type: 'material'
  },
  {
    id: 5,
    name: 'NFT/Gaming 2',
    iconName: 'game-controller',
    type: 'entypo'
  },
  {
    id: 6,
    name: 'Others 2',
    iconName: 'public',
    type: 'material'
  },
  {
    id: 7,
    name: 'NFT/Gaming 3',
    iconName: 'game-controller',
    type: 'entypo'
  },
  {
    id: 8,
    name: 'Others 3',
    iconName: 'public',
    type: 'material'
  }
];

export const sortBy: ISortByText[] = [
  { key: 'Default', value: 'Default' },
  { key: 'Ascending', value: 'Ascending' },
  { key: 'Descending', value: 'Descending' }
];
