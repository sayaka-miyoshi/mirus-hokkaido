"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { contactInquiryTypes } from "@/lib/company";

const FORM_NAME = "contact";

type Status = "idle" | "submitting" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });

    try {
      // Next.js pages are not static HTML targets — POST to the detection file.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error(`送信に失敗しました（${response.status}）`);
      }

      router.push("/contact/thanks");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

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

      {status === "error" ? (
        <p className="text-sm text-red-300" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
