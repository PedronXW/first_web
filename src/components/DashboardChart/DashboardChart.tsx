
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
  
  const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26', '27', '28', '29', '30'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Chamadas',
        fill: true,
        data: [100,110,95,120,94,86,110,111,117,97,85,100,110,95,120,94,86,110,111,117,97,85,100,110,95,120,94,86,110,111],
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(61, 61, 61, 1)',
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      },
    ],
  };
  

const DashboardChart = () => {
    return (
        <section title="Grafíco da quantidade de chamadas nos últimos 30 dias" className="lg:w-5/6 w-full min-h-[350px] max-h-[350px] flex justify-end">
            <div className="h-14 w-14 absolute z-10 bg-secundary_color hidden rounded-full -mt-7 lg:flex justify-center items-center">
                <figure className="h-10 w-10 bg-primary_color rounded-full drop-shadow-3xl flex justify-center items-center">
                    <ChartLineUp size={20} color='white'/>
                </figure>
            </div>
            <div className="h-full mt-0 lg:mt-7 flex flex-col w-full rounded-lg self-end border-[1px] border-primary_color bg-white drop-shadow-3xl align-bottom lg:mr-6">
                <div className="min-h-[60px] w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h2 className="text-secundary_color font-medium">Chamadas Recebidas nos Últimos 30 Dias</h2>
                    <figure className="h-10 w-10 bg-primary_color flex justify-center items-center lg:hidden">

                    </figure>
                </div>
                <div className="grow-1 w-full bg-secundary_color rounded-b-lg flex items-center justify-center">
                    <Line className='h-full w-full p-2' options={options} data={data} />
                </div>
            </div>
        </section>
    )
}

export default DashboardChart;