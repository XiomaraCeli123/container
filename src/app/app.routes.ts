import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

function getRemoteEntryUrl(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const remoteUrl = urlParams.get('remote');
  if (!remoteUrl) {
    throw new Error('No se encontró el parámetro ?remote en la URL.');
  }
  return remoteUrl;
}

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: getRemoteEntryUrl(),
        exposedModule: './HomeComponent',
      }).then((m: any) => m.HomeComponent),
  },
];
