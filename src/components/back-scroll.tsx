"use client";

import { isSectionIntersecting } from "@/atoms/is-section-intersecting";
import { cn } from "@/lib/utils";
import { animate, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { ArrowUpToLine } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export const BackScroll: React.FC<Props> = () => {
  const elRef = React.useRef(null);
  const [disabled, setDisabled] = React.useState(true);
  const [pulsating, setPulsating] = React.useState(false);
  const isIntersecting = useAtomValue(isSectionIntersecting);
  const handleClick = React.useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (elRef.current) {
      animate(
        elRef.current,
        { opacity: isIntersecting ? [0, 100] : [100, 0] },
        { duration: 1 }
      );
    }

    const timeout = setTimeout(() => {
      setPulsating(isIntersecting);
      setDisabled(!isIntersecting);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isIntersecting]);

  return (
    <Button
      ref={elRef}
      disabled={disabled}
      className={cn(
        "fixed bg-white border rounded-full px-4 py-6 shadow-xl bottom-0  right-0 m-6 lg:m-10"
      )}
      variant="default"
      onClick={handleClick}
    >
      <ArrowUpToLine
        className={cn({
          "animate-pulse": pulsating,
        })}
        size={32}
      />
    </Button>
  );
};
