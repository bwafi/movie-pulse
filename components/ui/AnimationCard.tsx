"use client";
import React, { FC, ReactNode, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface AnimationCardProps {
  children: ReactNode;
  keyAction: string;
}

const AnimationCard: FC<AnimationCardProps> = ({ children, keyAction }) => {
  const cardRef = useRef(null);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={keyAction} nodeRef={cardRef} timeout={200} classNames="card-animation">
        <div ref={cardRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimationCard;
