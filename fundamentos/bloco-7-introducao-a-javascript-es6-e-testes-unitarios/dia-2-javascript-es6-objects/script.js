const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  const result =  `Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, elefone ${order.phoneNumber}, R. ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`;
  console.log(result);
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.  "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  order.name = 'Luiz Silva';
  order.order.pizza.marguerita.price = 20;
  const pagamento = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price;
  const result = `Ola ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é RS ${pagamento},00 `;
  console.log(result);

}

orderModifier(order);