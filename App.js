import Expenses from "./components/Expenses.js";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Placa de Vídeo',
      amount: 3500.00,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'TV Nova', 
      amount: 2500.50, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Seguro do Carro',
      amount: 1230.00,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Armario Novo',
      amount: 845.00,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Cama Casal EMMA',
      amount: 3000.00,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
