import { AppLoader } from "@/components/ui/AppLoader";
import { Button } from "@/components/ui/button";
import { useTimeoutResetState } from "@/hooks/use-timeout-reset-state";
import { cn } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import { type ComponentProps, useEffect, useRef } from "react";

type LoadingButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean;
  success?: boolean;
};

export const LoadingButton = ({
  loading,
  success,
  children,
  className,
  onClick,
  disabled,
  ...props
}: LoadingButtonProps) => {
  const { value: showSuccess, setValue: setShowSuccess } = useTimeoutResetState(false, 1000);
  const skipSuccessPulseRef = useRef(true);
  const prevLoadingRef = useRef(loading);

  useEffect(() => {
    if (skipSuccessPulseRef.current) {
      skipSuccessPulseRef.current = false;
      prevLoadingRef.current = loading;
      return;
    }
    if (prevLoadingRef.current === true && loading === false && success !== undefined) {
      setShowSuccess(true);
    }
    prevLoadingRef.current = loading;
  }, [loading, success, setShowSuccess]);

  const isAnimating = loading || showSuccess;

  return (
    <Button
      disabled={loading || disabled}
      onClick={
        showSuccess
          ? () => {
              setShowSuccess(false);
            }
          : onClick
      }
      {...props}
      className={cn(className, "relative")}
    >
      <motion.span
        className="flex items-center gap-1"
        animate={{
          opacity: isAnimating ? 0 : 1,
          y: isAnimating ? -10 : 0,
        }}
      >
        {children}
      </motion.span>

      {/* Loading animation */}
      {isAnimating && (
        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: loading ? 1 : 0,
            y: loading ? 0 : 10,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <AppLoader size={20} />
        </motion.span>
      )}

      {/* Success animation */}
      {success !== undefined && (
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: showSuccess ? 1 : 0,
            scale: showSuccess ? 1 : 0.5,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {success ? (
            <CheckIcon size={20} strokeWidth={3} className="text-green-500" />
          ) : (
            <XIcon size={20} strokeWidth={3} className="text-red-500" />
          )}
        </motion.span>
      )}
    </Button>
  );
};
