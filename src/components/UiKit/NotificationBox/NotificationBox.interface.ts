export type NotificationBoxVariant = 'success' | 'warning' | 'danger';

export interface NotificationBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  $variant?: NotificationBoxVariant;
  children: React.ReactNode;
}
