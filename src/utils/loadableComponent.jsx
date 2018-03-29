import Loadable from 'react-loadable';
import LoadingComponent from './Loading';

export default function LoadableComponent(importComponent) {
    const LoadableComp = Loadable({
        loader: importComponent,
        loading: LoadingComponent,
    });
    return LoadableComp;
}
