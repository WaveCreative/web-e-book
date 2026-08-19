import { useState } from "react";
import { TbCopyFilled, TbCheck } from "react-icons/tb";

export default function CopyEmail() {
  const email = "wav.enterprisecreative@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-(--primary) bg-(--primary)/5 px-4 py-3 my-8">
      <span className="truncate text-sm text-(--highemphasis)">
        {email}
      </span>

      <button
        onClick={handleCopy}
        className="ml-3 cursor-pointer rounded-md p-2 transition hover:bg-(--primary)/20"
      >
        {copied ? (
          <TbCheck size={16} className="text-(--primary)" />
        ) : (
          <TbCopyFilled size={16} className="text-(--primary)" />
        )}
      </button>
    </div>
  );
}