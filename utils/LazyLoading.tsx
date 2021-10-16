import { lazy, Suspense } from 'react';

const LazyLoading = (ImportComponent, { Fallback }) => {
    const LazyComponent = lazy(ImportComponent);

    return (props) => (
        <Suspense fallback={<Fallback />}> 
            <LazyComponent {...props} />
        </Suspense>
    )
}
export default LazyLoading;