import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import 'react-toastify/dist/ReactToastify.css';

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setIsDisabled(true);
    toast.success('Username copied successfully!');
    setTimeout(() => {
      setIsCopied(false);
      setIsDisabled(false);
    }, 5000);
  };

  return (
    <div>
      <CopyToClipboard text="kunkchroma" onCopy={handleCopy}>
        <button disabled={isDisabled} 
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: isDisabled ? 'default' : 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center'
          }}>
          {isCopied ? <LuCopyCheck fontSize={20}/> : <LuCopy fontSize={20}/>}
        </button>
      </CopyToClipboard>
      <ToastContainer />
    </div>
  );
};

export default CopyButton;
