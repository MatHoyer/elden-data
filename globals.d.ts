interface IModal {
  error: (params: IMessageParams) => Promise<boolean>;
  info: (params: IMessageParams) => Promise<boolean>;
  question: (params: IQuestionParams) => Promise<boolean>;
}

type ErrorParams = {
  error: Error & { digest?: string };
  reset: () => void;
};

interface IMessageParams {
  title?: string;
  message?: string;
  content?: React.ReactNode;
}

interface IQuestionParams extends IMessageParams {
  doubleConfirm?: boolean;
}

interface IQuestionModalProps extends IQuestionParams {
  closeModal: (answer: boolean) => void;
  open?: boolean;
}

type TMessageType = 'error' | 'warning' | 'info';

interface IMessageModalProps extends IMessageParams {
  closeModal: () => void;
  open?: boolean;
  messageType: TMessageType;
}

interface String {
  latinize(): string;
}

type PageParams<T extends Record<string, string> = object> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type LayoutParams<T extends Record<string, string> = object> = {
  params: Promise<T>;
  children?: ReactNode | undefined;
};
