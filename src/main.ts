import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

if (typeof window !== 'undefined') {
  const schedule =
    'requestIdleCallback' in window
      ? window.requestIdleCallback.bind(window)
      : (callback: IdleRequestCallback) => window.setTimeout(() => callback({
          didTimeout: false,
          timeRemaining: () => 0,
        }), 1500);

  schedule(() => {
    inject();
    injectSpeedInsights();
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
