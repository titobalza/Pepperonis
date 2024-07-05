import React, { useState, useEffect } from 'react';
import { ref, get, query, orderByKey, limitToLast } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import { parseISO, startOfWeek } from 'date-fns';

const OrderStatistics = () => {
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [statistics, setStatistics] = useState({
    last10Orders: [],
    averageTicket: 0,
    highestOrder: 0,
    dailyAverage: 0,
    weeklyOrders: 0,
    mostFrequentUser: ''
  });

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersRef = query(ref(database, 'pedidos'), orderByKey(), limitToLast(100)); // Ajustar el límite según sea necesario
      const snapshot = await get(ordersRef);
      if (snapshot.exists()) {
        const ordersData = snapshot.val();
        const ordersList = Object.values(ordersData).map((order, index) => ({
          ...order,
          key: Object.keys(ordersData)[index]
        }));
        setOrders(ordersList);
      }
    };

    const fetchFeedbacks = async () => {
      const feedbackRef = ref(database, 'Feedback');
      const snapshot = await get(feedbackRef);
      if (snapshot.exists()) {
        const feedbacksData = snapshot.val();
        const feedbacksList = Object.values(feedbacksData).map((feedback, index) => ({
          ...feedback,
          key: Object.keys(feedbacksData)[index]
        }));
        setFeedbacks(feedbacksList);
      }
    };

    fetchOrders();
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      calculateStatistics(orders);
    }
  }, [orders]);

  const calculateStatistics = (orders) => {
    const last10Orders = orders.slice(-10).reverse();
    const totalAmount = orders.reduce((sum, order) => {
      const orderTotal = order.products.reduce((orderSum, product) => orderSum + product.price * product.quantity, 0);
      return sum + orderTotal;
    }, 0);
    const highestOrder = Math.max(...orders.map(order => order.products.reduce((orderSum, product) => orderSum + product.price * product.quantity, 0)));
    const uniqueDays = [...new Set(orders.map(order => parseISO(order.time).toISOString().split('T')[0]))].length;
    const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    const weeklyOrders = orders.filter(order => parseISO(order.time) >= startOfCurrentWeek).length;

    const userFrequency = orders.reduce((acc, order) => {
      acc[order.name] = (acc[order.name] || 0) + 1;
      return acc;
    }, {});
    const mostFrequentUser = Object.keys(userFrequency).reduce((a, b) => userFrequency[a] > userFrequency[b] ? a : b);

    setStatistics({
      last10Orders,
      averageTicket: (totalAmount / orders.length).toFixed(2),
      highestOrder,
      dailyAverage: (totalAmount / uniqueDays).toFixed(2),
      weeklyOrders,
      mostFrequentUser
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Estadísticas de Pedidos</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Últimos 10 pedidos</h5>
              <ul className="list-group list-group-flush">
                {statistics.last10Orders.map((order) => (
                  <li key={order.key} className="list-group-item">
                    <strong>Nombre:</strong> {order.name} <br />
                    <strong>Total:</strong> Bs. {order.products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)} <br />
                    <strong>Fecha:</strong> {new Date(order.time).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
            <h5 className="card-title">Ticket promedio</h5>
              <p className="card-text">Bs. {statistics.averageTicket}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Compra de mayor valor</h5>
              <p className="card-text">Bs. {statistics.highestOrder.toFixed(2)}</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Promedio de compras en Valor por día</h5>
              <p className="card-text">Bs. {statistics.dailyAverage}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Cantidad de compras durante la semana</h5>
              <p className="card-text">{statistics.weeklyOrders}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Consumidor más frecuente</h5>
              <p className="card-text">{statistics.mostFrequentUser}</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Feedback de los usuarios</h5>
              <ul className="list-group list-group-flush">
                {feedbacks.map((feedback) => (
                  <li key={feedback.key} className="list-group-item">
                    <strong>Usuario:</strong> {feedback.name} <br />
                    <strong>Feedback:</strong> {feedback.text} <br />
                    <strong>Fecha:</strong> {new Date(feedback.date).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
