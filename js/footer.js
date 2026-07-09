(function () {
  const cfg = window.MIRUS_SITE;
  if (!cfg) return;

  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.className = "footer";
  footer.innerHTML = `
    <div class="footer-company-bar">
      <div class="container footer-company-inner">
        <div class="footer-company-block">
          <strong>${cfg.companyName}</strong>
          <p>${cfg.addressFull}</p>
        </div>
        <div class="footer-company-block">
          <p>TEL：<a href="tel:${cfg.phoneTel}">${cfg.phone}</a></p>
          <p>MAIL：<a href="mailto:${cfg.email}">${cfg.email}</a></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo">MI<span>RUS</span></span>
          <p>北海道を拠点に、SNS運用・映像制作・インフルエンサーマーケティング・観光PRを行う${cfg.companyName}</p>
        </div>
        <div class="footer-col">
          <h4 class="font-en">Services</h4>
          <ul>
            <li><a href="/#representative">代表者</a></li>
            <li><a href="/#services">事業内容</a></li>
            <li><a href="/#works">実績・活動</a></li>
            <li><a href="/#company">会社概要</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="font-en">Links</h4>
          <ul>
            <li><a href="${cfg.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram ${cfg.instagramHandle}</a></li>
            <li><a href="${cfg.miraizukanUrl}" target="_blank" rel="noopener noreferrer">${cfg.miraizukanName}</a></li>
            <li><a href="/privacy/">プライバシーポリシー</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="font-en">Contact</h4>
          <ul>
            <li><a href="/#contact">お問い合わせ</a></li>
            <li><a href="/contact/">お問い合わせフォーム</a></li>
            <li><a href="mailto:${cfg.email}">${cfg.email}</a></li>
            <li><a href="tel:${cfg.phoneTel}">${cfg.phone}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} ${cfg.companyNameEn} All rights reserved.</span>
        <span>法人番号 ${cfg.corporateNumber}</span>
      </div>
    </div>
  `;
})();
