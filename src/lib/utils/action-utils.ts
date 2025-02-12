import { toast } from 'sonner';

export const isActionSuccessful = <T>(action?: {
  data?: T;
  serverError?: string;
}): action is { data: T; serverError: undefined } => {
  if (!action) {
    return false;
  }

  if (action.serverError) {
    return false;
  }

  if (!action.data) {
    return false;
  }

  return true;
};

export const defaultMutationEnding = async <T>(data: {
  res?: {
    data?: T;
    serverError?: string;
  };
  successMessage?: string;
  errorMessage?: string;
  cb?: (data: T) => void | Promise<void>;
}) => {
  const { cb, res, successMessage, errorMessage } = data;

  if (!isActionSuccessful(res)) {
    toast.error(res?.serverError || errorMessage || 'Une erreur est survenue');
    return;
  }

  if (successMessage) {
    toast.success(successMessage);
  }

  if (cb) {
    await cb(res.data);
  }

  return res;
};
