import { Moon, Sun } from "lucide-react";

import { motion } from "motion/react";
import { useSyncExternalStore } from "react";

import { useTheme } from "./use-theme";

const emptySubscribe = () => () => {};

export const ThemeToggle = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      className="relative flex items-center justify-center w-14 h-8 rounded-full bg-card border border-border cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute left-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        animate={{
          x: isDark ? "1.5rem" : "0rem",
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          animate={{
            scale: isDark ? 0.8 : 1,
            rotate: isDark ? 180 : 0,
          }}
        >
          {isDark ? <Moon className="w-4 h-4 text-background" /> : <Sun className="w-4 h-4 text-background" />}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
