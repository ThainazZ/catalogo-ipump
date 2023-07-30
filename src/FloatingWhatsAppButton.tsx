import React from 'react';

interface FloatingWhatsAppButtonProps {
  whatsappLink: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ whatsappLink }) => {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <a href="https://api.whatsapp.com/send?phone=5588993730036" target="_blank" rel="noopener noreferrer">
        <img src="/assets/whatsapp.png" alt="WhatsApp" style={{ width: '50px', height: '50px' }} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
