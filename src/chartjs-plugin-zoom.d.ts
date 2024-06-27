// chartjs-plugin-zoom.d.ts
import { ChartOptions } from 'chart.js';

declare module 'chart.js' {
  interface ChartOptions {
    plugins?: {
      zoom?: {
        pan?: {
          enabled?: boolean;
          mode?: string;
        };
        zoom?: {
          wheel?: {
            enabled?: boolean;
          };
          pinch?: {
            enabled?: boolean;
          };
          mode?: string;
        };
      };
    };
  }
}
