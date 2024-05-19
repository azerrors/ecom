"use client";

import { PlusIcon } from "@/assets/icons";
import s from "./style.module.scss";
import { useState } from "react";
import React from "react";
import { FooterTitle } from "../../../FooterTitle";
import { PlusIconWrapper } from "./PlusIconWrapper";
import { FooterLinksList } from "./FooterLinksList";

export const FooterItem = ({ item }) => {
  const [show, setShow] = useState(null);

  function toggle(i) {
    if (show === i) {
      return setShow(null);
    }

    setShow(i);
  }

  return (
    <div className={s.list}>
      <div className={s.wrapper}>
        <FooterTitle type="primary">{item.title}</FooterTitle>
        <PlusIconWrapper onShow={() => toggle(item.id)}>
          <PlusIcon />
        </PlusIconWrapper>
      </div>

      <br />

      <FooterLinksList show={show}>
        {item.option.map((option) => (
          <FooterTitle type="secondary" key={option}>
            {option.option}
          </FooterTitle>
        ))}
      </FooterLinksList>
    </div>
  );
};
