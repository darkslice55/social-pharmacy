module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Goods', [{
      title: 'Триган-Д',
      description: 'Таблетки белого цвета, круглые, плоскоцилиндрические, с фаской и риской на одной стороне. 1 таб. парацетамол 500 мг, дицикловерина гидрохлорид 20 мг. 10 шт. - блистеры (1) - пачки картонные.',
      price: '900',
      amount: '3',
      img: '/img/trigan.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Триган-Д1',
      description: 'Таблетки белого цвета, круглые, плоскоцилиндрические, с фаской и риской на одной стороне. 1 таб. парацетамол 500 мг, дицикловерина гидрохлорид 20 мг. 10 шт. - блистеры (1) - пачки картонные.',
      price: '125',
      amount: '4',
      img: '/img/lirika_150.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Лирика',
      description: 'Таблетки белого цвета, круглые, плоскоцилиндрические, с фаской и риской на одной стороне. 1 таб. парацетамол 500 мг, дицикловерина гидрохлорид 20 мг. 10 шт. - блистеры (1) - пачки картонные.',
      price: '1999',
      amount: '1',
      img: '/img/trigan.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Goods', null, {});
  },
};
// title: ,
// description: ,
// price: ,
// amount: ,
// img: ,
