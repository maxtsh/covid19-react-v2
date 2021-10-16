import LazyLoading from 'Utils/LazyLoading';
import Fallback from 'Utils/Fallback';
export default LazyLoading(() => import('./index'), { Fallback });