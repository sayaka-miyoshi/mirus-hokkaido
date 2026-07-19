"use client";

import Link from "next/link";
import { contactInquiryTypes } from "@/lib/company";

const FORM_NAME = "contact";

export function ContactForm() {
  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/contact/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot — leave empty; hidden from users */}
      <p className="contact-honeypot" aria-hidden="true">
        <label>
          Don’t fill this out if you’re human:
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-field">
        <label htmlFor="organization">
          会社名または団体名 <span className="contact-optional">任意</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          inputMode="text"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="name">
          お名前 <span className="contact-required">必須</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          inputMode="text"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="email">
          メールアドレス <span className="contact-required">必須</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="inquiryType">
          お問い合わせ種別 <span className="contact-optional">任意</span>
        </label>
        <select id="inquiryType" name="inquiryType" defaultValue="">
          <option value="">選択してください</option>
          {contactInquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-field">
        <label htmlFor="message">
          お問い合わせ内容 <span className="contact-required">必須</span>
        </label>
        <textarea id="message" name="message" required rows={6} />
      </div>

      <div className="contact-consent">
        <label className="contact-consent-label">
          <input type="checkbox" name="privacy" value="agreed" required />
          <span>
            <Link href="/privacy" className="text-[var(--accent)] underline underline-offset-2">
              プライバシーポリシー
            </Link>
            に同意する <span className="contact-required">必須</span>
          </span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        送信する
      </button>
    </form>
  );
}
