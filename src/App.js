import { DailyTodoProvider } from './context/DailyTodoContext';
import TodayPlanner from './components/today/TodayPlanner';
import CompletionRateChart from './components/today/CompletionRateChart';

function App() {
  return (
    <DailyTodoProvider>
      <section className='daily_section'>
        <TodayPlanner />
        <CompletionRateChart />
      </section>
    </DailyTodoProvider>
  );
}

export default App;
