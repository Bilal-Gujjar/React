import {AddTranscation} from './components/AddTranscation'
import {Header} from './components/Header'
import { IncomeExpense } from './components/IncomeExpense';
import {TranscationLog} from './components/TranscationLog'
import {Balance} from './components/Balance'
import {Transaction} from './components/Transaction'



function App() {
    return(
        <div>
           <Header/>
           <Balance/>
           <TranscationLog/>
           <IncomeExpense/>
           <Transaction/>
           <AddTranscation />
        </div>
    )
    
}

export default App;