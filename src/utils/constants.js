import { Folder, Grid } from 'components';

const ROOT = 'root';

const ROUTES = [
  { path: '/list', name: 'List', element: Folder, props: { name: ROOT } },
  { path: '/grid', name: 'Grid', element: Grid, props: { name: ROOT } }
];

export { ROUTES };
