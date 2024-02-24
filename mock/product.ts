// import Mock from 'mockjs';
//  const product=Mock.mock('/api/product','get',{
//     success: true,
//     data: {
//         'xData|7': ['@natural(1, 12)'],
//         'bar1': {
//             name: 'Evaporation',
//             'data|12': ['@natural(10, 50)']
//         },
//         'bar2': {
//             name: 'Precipitation',
//             'data|12': ['@natural(10, 50)']
//         },
//         'line1': {
//             name: 'Temperature',
//             'data|12': ['@natural(10, 50)']
//         }
//     }
// })
export default [
    {
      url: '/api/product',
      method: 'get',
      response: (request) => {
       return 'test'
      },
    },
  ]