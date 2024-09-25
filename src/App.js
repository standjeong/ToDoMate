import { DailyTodoProvider } from './context/DailyTodoContext';
import TodayPlanner from './components/today/TodayPlanner';
import CompletionRateChart from './components/today/CompletionRateChart';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <DailyTodoProvider>
        <section className='daily_section'>
          <TodayPlanner />
          <CompletionRateChart />
        </section>
      </DailyTodoProvider>
    </DarkModeProvider>
  );
}

export default App;
