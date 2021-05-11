var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    orderTotal: '$34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredDate: 'Aug 8, 2020',
    item: [
      {
        title: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindowClosed: 'Sep 7, 2020',
        price: '$31.55'
      }
    ]
  },
  {
    orderPlaced: 'July 19, 2020',
    orderTotal: '$44.53',
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-128',
    deliveredDate: 'Jul 20, 2020',
    item: [
      {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindowClosed: 'Aug 19, 2020',
        price: '$41.33'
      }
    ]
  },
  {
    orderPlaced: 'July 4, 2020',
    orderTotal: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredDate: 'Jul 7, 2020',
    item: [
      {
        title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII UIEvent, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindowClosed: 'Aug 5, 2020',
        price: '$15.99'
      }
    ]
  },
  {
    orderPlaced: 'July 3, 2020',
    orderTotal: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredDate: 'Jul 5, 2020',
    item: [
      {
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindowClosed: 'Aug 4, 2020',
        price: '$94.95'
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        returnWindowClosed: 'Aug 4, 2020',
        price: '$33.99'
      }
    ]
  }
];

console.log('Order 4 item 1 price:', orderHistory[3].item[0].price);
