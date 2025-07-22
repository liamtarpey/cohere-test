import { StyledNotificationBox } from './NotificationBox.styled';
import type { NotificationBoxProps } from './NotificationBox.interface';

function NotificationBox({
  children,
  $variant = 'success',
}: NotificationBoxProps) {
  return (
    <StyledNotificationBox $variant={$variant}>
      {children}
    </StyledNotificationBox>
  );
}

export default NotificationBox;
