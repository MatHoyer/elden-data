import { LoginButton } from './AuthButtons';
import { modal } from './Modal';

export const shouldRegister = () => {
  modal.info({
    title: 'Vous devez être connecté',
    message: 'Pour marquer un element comme fait, vous devez être connecté',
    content: (
      <div className="w-fit">
        <LoginButton />
      </div>
    ),
  });
};
