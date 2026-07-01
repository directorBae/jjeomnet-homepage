'use client';

import { useState } from 'react';
import Modal from './Modal';

const EMAIL = 'jjeomnet@gmail.com';

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: '#07080c',
  border: '1px solid rgba(255,255,255,.12)',
  borderRadius: 12,
  padding: '12px 14px',
  color: '#F0F2F6',
  fontSize: 15,
  fontFamily: 'inherit',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'rgba(240,242,246,.6)',
  marginBottom: 7,
};

export default function PartnerContact({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [msg, setMsg] = useState('');

  const sendMail = () => {
    const subject = encodeURIComponent(`[쩜넷 협업 문의]${name ? ` ${name}` : ''}`);
    const body = encodeURIComponent(
      `보내는 사람: ${name || '-'}\n회신 이메일: ${from || '-'}\n\n${msg}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          font: 'inherit',
          color: 'inherit',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        {children}
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="파트너·협업 문의">
        <p style={{ margin: '0 0 22px', fontSize: 15, lineHeight: 1.6, color: 'rgba(240,242,246,.7)', fontWeight: 500 }}>
          함께하고 싶은 이야기를 보내주세요. 아래 내용을 작성하고 <b style={{ color: '#F0F2F6' }}>메일 보내기</b>를 누르면 메일
          앱으로 연결돼요.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMail();
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <div>
            <label htmlFor="pc-name" style={labelStyle}>
              이름 / 소속
            </label>
            <input
              id="pc-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예) 홍길동 · ○○대학교"
              style={fieldStyle}
            />
          </div>
          <div>
            <label htmlFor="pc-email" style={labelStyle}>
              회신받을 이메일
            </label>
            <input
              id="pc-email"
              type="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="you@example.com"
              style={fieldStyle}
            />
          </div>
          <div>
            <label htmlFor="pc-msg" style={labelStyle}>
              문의 내용
            </label>
            <textarea
              id="pc-msg"
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="제안하고 싶은 협업/파트너십 내용을 적어주세요."
              rows={5}
              style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.6 }}
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ fontWeight: 700, fontSize: 15.5, padding: '14px 20px', borderRadius: 12, border: 'none', cursor: 'pointer' }}
          >
            메일 보내기 →
          </button>
        </form>

        <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)', fontSize: 14, color: 'rgba(240,242,246,.6)' }}>
          직접 보내기 ·{' '}
          <a href={`mailto:${EMAIL}`} className="footer-link" style={{ color: '#86C3FA', fontWeight: 600 }}>
            {EMAIL}
          </a>
        </div>
      </Modal>
    </>
  );
}
