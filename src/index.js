import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './index.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root'),
);
