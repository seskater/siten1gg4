/**
 * Condensed 4-page version of the sales pitch — the whole story on four slides.
 *
 * Build:  node build4.js
 */
const pptxgen = require('pptxgenjs');

const { C, F, W, H, M, bg, title, lede, card, badge, dot, foot } = require('./theme');

(async () => {
  const p = new pptxgen();
  p.layout = 'LAYOUT_WIDE';
  p.author = 'Платформа «Батьківщина»';
  p.title = 'Партія як цифрова платформа — коротко';

  let n = 0;
  const S = (dark) => {
    const s = p.addSlide();
    bg(s, dark ? C.ink : C.paper);
    n += 1;
    return s;
  };

  // ======================================================== 1. WHAT & WHY ===
  {
    const s = S(true);
    [[10.9, 0.86, 0.44, C.red], [11.85, 1.34, 0.26, C.amber], [12.5, 0.92, 0.16, C.green]]
      .forEach(([x, y, d, c]) => dot(s, x, y, d, c));

    s.addText('ЦИФРОВА ІНФРАСТРУКТУРА ПОЛІТИЧНОЇ ПАРТІЇ', {
      x: M, y: 0.52, w: 9.6, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11.5, bold: true, charSpacing: 2.4, color: C.red,
    });
    s.addText('Партія, яка не зникає між виборами', {
      x: M, y: 0.92, w: W - 2 * M, h: 0.86, isTextBox: true, margin: 0,
      fontFace: F.head, fontSize: 32, bold: true, color: C.white,
    });
    s.addText(
      'Готова до впровадження платформа: звернення громадян із контролем строків, CRM виборця, ' +
      'кероване поле, AI-контур і кадровий резерв — в одній системі, під брендом вашої партії.',
      {
        x: M, y: 1.92, w: 11.4, h: 0.76, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 14.5, color: C.mutedDark, lineSpacingMultiple: 1.18,
      },
    );
    dot(s, M, 2.88, 0.13, C.green);
    s.addText('Працює в продакшені  ·  btkvshn.vercel.app  ·  White-label впровадження', {
      x: M + 0.24, y: 2.78, w: 9, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 12.5, bold: true, color: C.white,
    });

    const items = [
      ['Єдиний профіль виборця', 'Замість списків в Excel: усі канали пишуть в одну базу з історією.'],
      ['Звернення зі строком', 'Замість загубленої заяви: кейс, відповідальний, дедлайн, світлофор.'],
      ['Кероване поле', 'Замість «як вийде»: задача агенту за адресою й сегментом, з SLA.'],
      ['Відбір за поведінкою', 'Замість знайомств: анкета, рівні, навчання та AI-інтерв\'ю.'],
    ];
    const cw = 2.95, gap = 0.25, y0 = 3.42;
    items.forEach(([h, b], i) => {
      const x = M + i * (cw + gap);
      card(s, x, y0, cw, 2.28, { fill: C.navy, line: C.navySoft, shadow: false });
      badge(s, x + 0.28, y0 + 0.26, 0.42, i + 1, { fill: C.red, size: 12 });
      s.addText(h, {
        x: x + 0.28, y: y0 + 0.8, w: cw - 0.56, h: 0.56, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 14, bold: true, color: C.white, lineSpacingMultiple: 1.04,
      });
      s.addText(b, {
        x: x + 0.28, y: y0 + 1.42, w: cw - 0.56, h: 0.72, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.8, color: C.mutedDark, lineSpacingMultiple: 1.14,
      });
    });

    card(s, M, 5.94, W - 2 * M, 0.88, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('Принцип:', {
      x: M + 0.4, y: 5.94, w: 1.3, h: 0.88, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 13, bold: true, color: C.red,
    });
    s.addText(
      'одна людина — один профіль — одна історія. Кожна зміна стану ліда (NEW → … → ADVOCATE) автоматично створює наступну задачу з дедлайном і відповідальним.',
      {
        x: M + 1.76, y: 5.94, w: W - 2 * M - 2.2, h: 0.88, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 12.8, color: C.white, lineSpacingMultiple: 1.12,
      },
    );
    s.addNotes(
      'Перший слайд закриває два питання одразу: що це і яку саме дірку закриває. ' +
      'Наголосити, що система вже працює — її можна показати наживо в цій кімнаті. ' +
      'Чотири картки — це чотири типові розриви, які має майже кожна партія.',
    );
    foot(s, n, true);
  }

  // ========================================================== 2. PRODUCT ====
  {
    const s = S(false);
    title(s, 'Шість модулів в одній системі', { kicker: 'Продукт' });
    lede(s, 'Не набір сервісів, а один робочий процес: контакт → сегмент → кейс → результат → роль.', 1.6);

    const mods = [
      ['Звернення громадян',
        '24 готові шаблони — від субсидій і ліків до полону, ТЦК і проблем ФОП. Для кожного: цільові організації, обов\'язкові поля, перелік документів та інструкція на e-mail.'],
      ['Документообіг і строки',
        'Інтеграція з АСКОД: три відмітки руху документа й трекер-світлофор. Керівник бачить не звіт про роботу, а список прострочень — поіменно.'],
      ['CRM виборця',
        'Профіль, події, кейси. Сегментація за 30–60 секунд: теги N+/N0/N−, сегмент і температура. Відповідального система призначає сама — за гео й точкою концентрації.'],
      ['AI-контур',
        'AI-обдзвін сегментованих баз, голосовий консультант у застосунку та RPG-інтерв\'ю з Game Master: кандидат ухвалює рішення в сценарії, а не заповнює анкету.'],
      ['Кадровий резерв',
        'Анкета на 30+ полів: досвід, цінності, реакція на критику, рішення в кризі. Рівні: прихильник → помічник → агент → лідер округу, зі статусом модерації.'],
      ['Події, карта, кабінет',
        'Календар заходів із фільтрами за статусом, карта округу та особистий кабінет, де людина бачить статус свого звернення й отримує сповіщення.'],
    ];
    const cw = (W - 2 * M - 0.6) / 3;
    mods.forEach(([h, b], i) => {
      const x = M + (i % 3) * (cw + 0.3);
      const y = 2.2 + Math.floor(i / 3) * 2.24;
      card(s, x, y, cw, 2.1);
      badge(s, x + 0.3, y + 0.26, 0.42, i + 1, { fill: C.ink, size: 12 });
      s.addText(h, {
        x: x + 0.86, y: y + 0.24, w: cw - 1.16, h: 0.46, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 14.5, bold: true, color: C.ink, lineSpacingMultiple: 1.0,
      });
      if (i === 1) {
        [C.green, C.amber, C.red].forEach((col, k) => dot(s, cw + x - 0.82 + k * 0.22, y + 0.41, 0.13, col));
      }
      s.addText(b, {
        x: x + 0.3, y: y + 0.9, w: cw - 0.6, h: 1.06, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.8, color: C.muted, lineSpacingMultiple: 1.14,
      });
    });
    s.addNotes(
      'Якщо є час тільки на одну демонстрацію — показувати перший модуль: вибір шаблону звернення, ' +
      'як змінюються цільові організації та список документів. Далі — світлофор строків. ' +
      'Це два екрани, які продають систему найкраще.',
    );
    foot(s, n, false);
  }

  // ======================================================== 3. HOW IT RUNS ==
  {
    const s = S(true);
    title(s, 'Від контакту до голосу на окрузі', { kicker: 'Як це працює', dark: true });
    lede(s, 'Трафік заводиться в базу, база розкладається на конкретні адреси з конкретними відповідальними.', 1.6, { dark: true });

    const colW = (W - 2 * M - 0.6) / 3;
    const cy = 2.05, ch = 3.62;

    // --- col 1: traffic
    card(s, M, cy, colW, ch, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('ТРАФІК · звідки контакт', {
      x: M + 0.3, y: cy + 0.22, w: colW - 0.6, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11, bold: true, charSpacing: 1.4, color: C.red,
    });
    const chans = [
      ['Дзвінки та AI-обдзвін', '40%'], ['Агенти депутатів', '20%'], ['QR біля будинків', '10%'],
      ['QR на заходах', '8%'], ['Сайт партії', '7%'], ['Соцмережі та ЗМІ', '5%'],
      ['Реклама, чати, e-mail, НГО', '10%'],
    ];
    chans.forEach(([l, v], i) => {
      const y = cy + 0.62 + i * 0.33;
      s.addText(l, {
        x: M + 0.3, y, w: colW - 1.25, h: 0.3, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 10.8, color: i === 0 ? C.white : C.mutedDark,
      });
      s.addText(v, {
        x: M + colW - 0.92, y, w: 0.62, h: 0.3, isTextBox: true, margin: 0, align: 'right', valign: 'middle',
        fontFace: F.body, fontSize: 11, bold: true, color: i === 0 ? C.red : C.white,
      });
    });
    s.addText('Усередині дзвінків: пенсіонери 30%, соцнезахищені 25%, ФОП 20%, військові 15%.', {
      x: M + 0.3, y: cy + 2.96, w: colW - 0.6, h: 0.44, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 9.6, italic: true, color: C.muted, lineSpacingMultiple: 1.1,
    });

    // --- col 2: field
    const x2 = M + colW + 0.3;
    card(s, x2, cy, colW, ch, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('ПОЛЕ · точки концентрації', {
      x: x2 + 0.3, y: cy + 0.22, w: colW - 0.6, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11, bold: true, charSpacing: 1.4, color: C.amber,
    });
    [['76', 'ринків і торгових майданчиків'], ['1 140', 'промислових підприємств (340 великих)'], ['11 920', 'багатоквартирних будинків']]
      .forEach(([v, l], i) => {
        const y = cy + 0.6 + i * 0.58;
        s.addText(v, {
          x: x2 + 0.3, y, w: 1.25, h: 0.52, isTextBox: true, margin: 0, valign: 'middle',
          fontFace: F.head, fontSize: 21, bold: true, color: C.white,
        });
        s.addText(l, {
          x: x2 + 1.6, y, w: colW - 1.9, h: 0.52, isTextBox: true, margin: 0, valign: 'middle',
          fontFace: F.body, fontSize: 10.2, color: C.mutedDark, lineSpacingMultiple: 1.06,
        });
      });
    s.addText('Київ — як приклад розрахунку; модель переноситься на будь-яке місто.', {
      x: x2 + 0.3, y: cy + 2.36, w: colW - 0.6, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 9.6, italic: true, color: C.muted,
    });
    card(s, x2 + 0.24, cy + 2.9, colW - 0.48, 0.6, { fill: C.navySoft, line: C.navySoft, shadow: false });
    s.addText('«Зірочка-5»: 1 помічник + 4 прихильники. 135–270 помічників на округ = 675–1 350 людей мережі.', {
      x: x2 + 0.42, y: cy + 2.9, w: colW - 0.84, h: 0.6, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 9.8, color: C.white, lineSpacingMultiple: 1.08,
    });

    // --- col 3: district
    const x3 = M + 2 * (colW + 0.3);
    card(s, x3, cy, colW, ch, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('ОКРУГ · керована мобілізація', {
      x: x3 + 0.3, y: cy + 0.22, w: colW - 0.6, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11, bold: true, charSpacing: 1.4, color: C.green,
    });
    s.addText('300 000', {
      x: x3 + 0.3, y: cy + 0.62, w: 1.5, h: 0.5, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 22, bold: true, color: C.white,
    });
    s.addText('→', {
      x: x3 + 1.82, y: cy + 0.62, w: 0.36, h: 0.5, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
      fontFace: F.body, fontSize: 16, color: C.muted,
    });
    s.addText('20 000', {
      x: x3 + 2.2, y: cy + 0.62, w: 1.5, h: 0.5, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 22, bold: true, color: C.red,
    });
    s.addText('населення округу → цільовий результат мобілізації', {
      x: x3 + 0.3, y: cy + 1.14, w: colW - 0.6, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10, color: C.mutedDark,
    });
    [['Дома', '900 будинків · 12 помічників', C.red],
      ['ФОП', '12 ринків · 24 помічники', C.amber],
      ['Підприємства', '25 об\'єктів · 25 відповідальних', C.green]]
      .forEach(([h, b, col], i) => {
        const y = cy + 1.48 + i * 0.44;
        dot(s, x3 + 0.3, y + 0.09, 0.14, col);
        s.addText(h, {
          x: x3 + 0.54, y, w: colW - 0.84, h: 0.24, isTextBox: true, margin: 0,
          fontFace: F.body, fontSize: 11, bold: true, color: C.white,
        });
        s.addText(b, {
          x: x3 + 0.54, y: y + 0.23, w: colW - 0.84, h: 0.24, isTextBox: true, margin: 0,
          fontFace: F.body, fontSize: 9.8, color: C.mutedDark,
        });
      });
    card(s, x3 + 0.24, cy + 2.9, colW - 0.48, 0.6, { fill: C.navySoft, line: C.navySoft, shadow: false });
    s.addText('Штаб округу: народний депутат + 10–12 депутатів місцевої ради + до 80 помічників.', {
      x: x3 + 0.42, y: cy + 2.9, w: colW - 0.84, h: 0.6, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 9.8, color: C.white, lineSpacingMultiple: 1.08,
    });

    // --- SLA strip
    card(s, M, 5.84, W - 2 * M, 0.96, { fill: C.red, line: C.red, shadow: false });
    s.addText('SLA', {
      x: M + 0.4, y: 5.84, w: 0.8, h: 0.96, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 14, bold: true, color: C.white,
    });
    const slas = [['2 год', 'підтвердження'], ['24 год', 'контакт агента'], ['48 год', 'візит або зустріч'], ['72 год', 'повторний контакт']];
    slas.forEach(([v, l], i) => {
      const x = M + 1.35 + i * 2.2;
      s.addText(v, {
        x, y: 5.94, w: 1.0, h: 0.34, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
      });
      s.addText(l, {
        x, y: 6.28, w: 2.05, h: 0.3, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 10, color: C.redSoft,
      });
    });
    s.addText('Прострочення → нагадування → координатор району → керівник округу', {
      x: M + 10.15, y: 5.84, w: 1.9, h: 0.96, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 9.4, color: C.white, lineSpacingMultiple: 1.1,
    });
    s.addNotes(
      'Головне тут — 20 000 голосів і 800 000 прихильників є цільовими показниками моделі, ' +
      'а не досягнутим результатом. Проговорити це прямо. Сила аргументу не в цифрі, ' +
      'а в тому, що вона розкладена на конкретні адреси з конкретними відповідальними.',
    );
    foot(s, n, true);
  }

  // ==================================================== 4. MONEY & START ====
  {
    const s = S(false);
    title(s, 'Скільки коштує і як почати', { kicker: 'Економіка, дані, впровадження' });
    lede(s, 'Розрахунок першого місяця активної фази на місто з електоратом 2 млн (приклад Києва).', 1.6);

    // --- left: budget
    const lw = 5.5;
    card(s, M, 2.2, lw, 2.9);
    s.addText('Бюджет першого місяця', {
      x: M + 0.34, y: 2.38, w: lw - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.ink,
    });
    const budget = [['Вхідні дзвінки', '1 350'], ['Матеріали на 440 точок', '1 320'], ['SMS-розсилка, 2 млн', '800'],
      ['Соцмережі, 10 районів', '400'], ['Платформа, 1 місяць', '400'], ['QR по місту, разово', '120']];
    budget.forEach(([l, v], i) => {
      const y = 2.76 + i * 0.35;
      s.addText(l, {
        x: M + 0.34, y, w: lw - 1.7, h: 0.3, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 11, color: i === 4 ? C.red : C.ink, bold: i === 4,
      });
      s.addText(v, {
        x: M + lw - 1.4, y, w: 1.06, h: 0.3, isTextBox: true, margin: 0, align: 'right', valign: 'middle',
        fontFace: F.body, fontSize: 11, bold: true, color: i === 4 ? C.red : C.ink,
      });
    });
    s.addText('тис. грн', {
      x: M + lw - 1.4, y: 4.82, w: 1.06, h: 0.24, isTextBox: true, margin: 0, align: 'right',
      fontFace: F.body, fontSize: 9.5, italic: true, color: C.muted,
    });

    card(s, M, 5.24, lw, 1.16, { fill: C.ink, line: C.ink });
    s.addText('4,39 млн грн', {
      x: M + 0.34, y: 5.38, w: 2.9, h: 0.46, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 21, bold: true, color: C.white,
    });
    s.addText('разом за перший місяць', {
      x: M + 3.0, y: 5.38, w: lw - 3.34, h: 0.46, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 11, color: C.mutedDark,
    });
    s.addText('Платформа — 400 тис., менше 10% бюджету. Решту партія витрачає й так — тільки без системи це не лишає активу.', {
      x: M + 0.34, y: 5.84, w: lw - 0.68, h: 0.44, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10, color: C.mutedDark, lineSpacingMultiple: 1.08,
    });

    // --- right: architecture + rollout
    const rx = M + lw + 0.3;
    const rw = W - M - rx;
    card(s, rx, 2.2, rw, 2.0);
    s.addText('Технологія і персональні дані', {
      x: rx + 0.34, y: 2.38, w: rw - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.ink,
    });
    s.addText(
      'Хмарна платформа (Next.js на Vercel) без власного серверного парку, під доменом партії. ' +
      'JWT-сесія в HttpOnly-cookie, ролі користувача й адміністратора, прив\'язка профілю до регіону. ' +
      'Адаптивний веб — окремий застосунок помічнику не потрібен.',
      {
        x: rx + 0.34, y: 2.74, w: rw - 0.68, h: 0.86, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.6, color: C.muted, lineSpacingMultiple: 1.12,
      },
    );
    dot(s, rx + 0.34, 3.7, 0.14, C.amber);
    s.addText(
      'Система обробляє політичні вподобання — чутлива категорія персональних даних. Згода в анкеті вже є; ' +
      'до запуску узгоджуємо володільця бази, строки зберігання й доступ помічників.',
      {
        x: rx + 0.58, y: 3.62, w: rw - 0.92, h: 0.58, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.2, color: C.ink, lineSpacingMultiple: 1.12,
      },
    );

    card(s, rx, 4.44, rw, 1.94, { fill: C.ink, line: C.ink });
    s.addText('Впровадження', {
      x: rx + 0.34, y: 4.58, w: rw - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
    });
    const steps = [['Тиждень 1–2', 'Розгортання'], ['Тиждень 3–4', 'Пілот'], ['Місяць 2', 'Поле'], ['Місяць 3+', 'Масштаб']];
    const stw = (rw - 0.68) / 4;
    steps.forEach(([t, h], i) => {
      const x = rx + 0.34 + i * stw;
      badge(s, x, 4.96, 0.34, i + 1, { fill: i === 0 ? C.red : C.navySoft, size: 11 });
      s.addText(t.toUpperCase(), {
        x, y: 5.36, w: stw - 0.16, h: 0.22, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 8.6, bold: true, charSpacing: 1.0, color: C.mutedDark,
      });
      s.addText(h, {
        x, y: 5.58, w: stw - 0.12, h: 0.26, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.5, bold: true, color: C.white,
      });
    });
    s.addText(
      'Оплата: абонплата за активну базу в регіоні + разове впровадження. Орієнтир — 400 тис. грн/міс на 400 тис. абонентів у 10 районах.',
      {
        x: rx + 0.34, y: 5.92, w: rw - 0.68, h: 0.38, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10, color: C.mutedDark, lineSpacingMultiple: 1.06,
      },
    );

    // --- CTA line
    dot(s, M, 6.62, 0.13, C.red);
    s.addText('Наступний крок:', {
      x: M + 0.24, y: 6.52, w: 1.95, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 12.5, bold: true, color: C.red,
    });
    s.addText('демонстрація на вашому окрузі  ·  пілот на 8 тижнів  ·  розрахунок бюджету під ваш регіон', {
      x: M + 2.25, y: 6.52, w: W - 2 * M - 2.85, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 12.5, color: C.ink,
    });
    s.addNotes(
      'Ціну називати як орієнтир із реального розрахунку, а не як прайс — фінальна цифра залежить ' +
      'від розміру бази й кількості округів. Слайд про дані не пропускати: партія, яка чує ризик ' +
      'від постачальника першою, довіряє більше. Закривати питанням «який округ беремо в пілот?».',
    );
    foot(s, n, false);
  }

  await p.writeFile({ fileName: 'platforma-partii-korotko-4.pptx' });
  console.log('written: platforma-partii-korotko-4.pptx (' + n + ' slides)');
})();
