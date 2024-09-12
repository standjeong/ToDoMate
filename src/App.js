import { DailyTodoProvider } from './context/DailyTodoContext';
import TodayPlanner from './components/today/TodayPlanner';

function App() {
  return (
    <DailyTodoProvider>
      <TodayPlanner />
    </DailyTodoProvider>
  );
}

export default App;
