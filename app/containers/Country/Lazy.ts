import LazyLoading from "utils/LazyLoading";
import Fallback from "utils/Fallback";
export default LazyLoading(() => import("./index"), { Fallback });
