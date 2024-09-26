import React from 'react';
import styles from './CompletionRateChart.module.css';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDailyTodoContext } from '../../context/DailyTodoContext';

Chart.register(ArcElement, Tooltip);

export default function CompletionRateChart() {
  const { todos } = useDailyTodoContext();
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.done).length;
  const incompleteTasks = totalTasks - completedTasks;
  const completionRate = totalTasks
    ? Math.floor((completedTasks / totalTasks) * 100)
    : 0;

  const message = getChartMessage(completionRate);

  const data = {
    labels: ['끝낸 작업', '남은 작업'],
    datasets: [
      {
        label: '개수',
        data: [completedTasks, incompleteTasks],
        backgroundColor: ['#AA3C3C', '#F9FDF4'],
        hoverOffset: 5,
        borderWidth: 0,
      },
    ],
  };

  const doughnutLabel = {
    id: 'doughnutLabel',
    afterDatasetsDraw(chart) {
      const done = chart.data.datasets[0].data[0];
      const incompleted = chart.data.datasets[0].data[1];
      const total = done + incompleted;
      const rate = Math.floor((done / total) * 100);

      const { ctx } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = '500 25px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${rate ? rate : 0}%`, centerX, centerY);
      ctx.restore();
    },
  };

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      Tooltip: {
        enable: true,
      },
    },
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>🎯목표 달성률</h3>
      <div className={styles.chart}>
        <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

const getChartMessage = (rate) => {
  if (rate === 100) return '오늘 미션 클리어🎉';
  if (rate >= 75) return '거의 다 왔어요! 💪';
  if (rate >= 50) return '벌써 절반 이상 왔어요!👍';
  if (rate >= 25) return '한 걸음씩 꾸준히🚀';
  if (rate > 0) return '출발이 좋아요☺️';
  return '시작해 볼까요? 🌱';
};
