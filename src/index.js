import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 3. Model
app.model(require('./models/util').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
