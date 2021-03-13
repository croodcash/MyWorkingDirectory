import {createBrowserHistory} from 'history';
import urlConfig from '../configs/url';

export default createBrowserHistory({
    basename: urlConfig.basePath,
});
