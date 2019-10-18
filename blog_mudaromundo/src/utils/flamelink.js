import flamelink from 'flamelink';
import { firebaseApp } from './firebase';

const flame = flamelink({
    firebaseApp,
    env: 'production',
    dbType: 'cf'
});

export default flame;