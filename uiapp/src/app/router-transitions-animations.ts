import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', style({ width: '60%' })),
    query(':enter', style({ width: '60%' })),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s ease-out', style({ width: '0' })),
      ]),
      query(':enter', [
        animate('1s ease-out', style({ width: '60%' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
