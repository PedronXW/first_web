
import { ChartLineUp } from '@phosphor-icons/react';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Chamadas',
      fill: true,
      data: [100, 110, 95, 120, 94, 86, 110, 111, 117, 97, 85, 100, 110, 95, 120, 94, 86, 110, 111, 117, 97, 85, 100, 110, 95, 120, 94, 86, 110, 111],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(81, 81, 81, 1)',
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    },
  ],
};

const DashboardChart = () => {
  return (
    <section title="Grafíco da quantidade de chamadas nos últimos 30 dias" className="w-full min-h-[420px] max-h-[420px] flex flex-col items-end justify-end">
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
        <ChartLineUp size={20} color='white' />
      </figure>
      <div className="h-full flex flex-col w-full rounded-lg self-end bg-secundary_color drop-shadow-3xl align-bottom -mt-7">
        <div className="min-h-[60px] w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
          <h2 className="text-secundary_color font-medium">Chamadas nos últimos 30 dias</h2>
        </div>
        <div className="grow-1 w-full h-full bg-secundary_color rounded-b-lg flex items-center justify-center p-2">
          <Line className='p-2 relative' options={options} data={data} />
        </div>
      </div>
    </section>
  )
}

export default DashboardChart;