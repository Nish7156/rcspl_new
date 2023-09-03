import React from "react";

function Link({ link, linkText }) {
  return (
    <a
      href={`${link}`}
      class="font-display max-w-sm text-2xl font-bold leading-tight"
    >
      <span class="link link-underline link-underline-black text-black">
        {linkText}
      </span>
    </a>
  );
}

export default Link;
