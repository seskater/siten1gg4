/**
 * Sales-pitch deck: the "Батьківщина" digital party platform, pitched white-label
 * to other political parties.
 *
 * Content is grounded in (a) the live platform at btkvshn.vercel.app and
 * (b) the party's internal funnel / conversion / budget documents.
 *
 * Build:  node build.js
 */
const pptxgen = require('pptxgenjs');

const { C, F, W, H, M, bg, title, lede, card, badge, dot, cardText, foot } = require('./theme');

// ------------------------------------------------------------------ build ---
(async () => {
  const p = new pptxgen();
  p.layout = 'LAYOUT_WIDE';
  p.author = 'Платформа «Батьківщина»';
  p.title = 'Партія як цифрова платформа';

  let n = 0;
  const S = (dark) => {
    const s = p.addSlide();
    bg(s, dark ? C.ink : C.paper);
    n += 1;
    return s;
  };

  // ============================================================== 1. TITLE ==
  {
    const s = S(true);
    // Motif: a quiet constellation of status dots in the upper right.
    const marks = [
      [10.4, 1.05, 0.5, C.red], [11.5, 1.62, 0.3, C.amber], [12.2, 1.1, 0.19, C.green],
      [10.9, 2.35, 0.22, C.mutedDark], [11.95, 2.6, 0.38, C.navySoft],
    ];
    marks.forEach(([x, y, d, c]) => dot(s, x, y, d, c));

    s.addText('ЦИФРОВА ІНФРАСТРУКТУРА ПОЛІТИЧНОЇ ПАРТІЇ', {
      x: M, y: 2.28, w: 9, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 12, bold: true, charSpacing: 2.6, color: C.red,
    });
    s.addText('Партія, яка не зникає\nміж виборами', {
      x: M, y: 2.72, w: 9.4, h: 1.9, isTextBox: true, margin: 0,
      fontFace: F.head, fontSize: 48, bold: true, color: C.white, lineSpacingMultiple: 0.98,
    });
    s.addText(
      'Готова до впровадження платформа: звернення громадян, документообіг із контролем строків, ' +
      'CRM виборця, польова мережа та AI-відбір кадрів — в одній системі.',
      {
        x: M, y: 4.75, w: 8.6, h: 0.95, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 15, color: C.mutedDark, lineSpacingMultiple: 1.2,
      },
    );

    dot(s, M, 6.06, 0.13, C.green);
    s.addText('Працює в продакшені  ·  btkvshn.vercel.app', {
      x: M + 0.24, y: 5.96, w: 6, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 12.5, bold: true, color: C.white,
    });
    s.addText('Пропозиція для політичних партій  ·  White-label впровадження', {
      x: M, y: 6.42, w: 8, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11.5, color: C.muted,
    });
    s.addNotes(
      'Відкриваємо не продуктом, а обіцянкою: партія, яка присутня 365 днів на рік. ' +
      'Наголосити: це не макет і не концепція — система працює, її можна показати наживо в цій кімнаті.',
    );
    foot(s, n, true);
  }

  // ============================================================ 2. PROBLEM ==
  {
    const s = S(false);
    title(s, 'Чому партії втрачають виборця', { kicker: 'Проблема' });
    lede(s, 'Кампанія закінчується — і вся зібрана база перестає працювати. Чотири типові розриви:', 1.62);

    const items = [
      ['Контакт живе в таблиці', 'Списки в Excel і зошитах агітаторів. Профілю людини немає — кампанія починається з нуля.'],
      ['Звернення зникає', 'Заяву прийняли — і слід загубився. Ніхто не знає стадії й чи відповіли в строк.'],
      ['Поле не кероване', 'Агітатор працює «як вийде»: без задач, дедлайнів і видимого результату по адресах.'],
      ['Кадри відбирають на око', 'Помічників призначають за знайомством, без вимірюваної оцінки компетенцій.'],
    ];
    const cw = 2.95, gap = 0.25, y0 = 2.3;
    items.forEach(([h, b], i) => {
      const x = M + i * (cw + gap);
      card(s, x, y0, cw, 3.0);
      badge(s, x + 0.3, y0 + 0.32, 0.46, i + 1, { fill: C.ink, size: 14 });
      cardText(s, x + 0.3, y0 + 1.02, cw - 0.6, h, b, {
        headSize: 14.5, headH: 0.62, bodySize: 11, bodyH: 1.25,
      });
    });

    card(s, M, 5.58, W - 2 * M, 1.06, { fill: C.ink, line: C.ink });
    s.addText('Наслідок:', {
      x: M + 0.42, y: 5.9, w: 1.5, h: 0.42, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 14, bold: true, color: C.red,
    });
    s.addText(
      'партія розмовляє з виборцем 6 тижнів на 4 роки. Довіра будується на постійності, а постійність — це система, а не ентузіазм.',
      {
        x: M + 1.98, y: 5.9, w: W - 2 * M - 2.42, h: 0.42, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 14, color: C.white,
      },
    );
    s.addNotes('Це слайд-дзеркало. Дати аудиторії впізнати себе — майже кожна партія має всі чотири розриви.');
    foot(s, n, false);
  }

  // =========================================================== 3. PRINCIPLE ==
  {
    const s = S(true);
    title(s, 'Одна людина — один профіль — одна історія', { kicker: 'Принцип системи', dark: true, size: 30 });
    lede(s, 'Усі канали — дзвінки, розсилки, месенджери, QR, офіс, польові агенти — пишуть у ту саму базу.', 1.62, { dark: true });

    // Flow: 5 stages
    const stages = [
      ['Контакт', 'Будь-який канал створює профіль'],
      ['Подія', 'Дзвінок, візит, зустріч, повідомлення'],
      ['Кейс', 'Звернення зі строком і відповідальним'],
      ['Результат', 'Відповідь + фіксація задоволеності'],
      ['Роль', 'Прихильник → помічник → агент'],
    ];
    const bw = 2.32, bgap = 0.22, by = 2.42;
    stages.forEach(([h, b], i) => {
      const x = M + i * (bw + bgap);
      card(s, x, by, bw, 1.72, { fill: C.navy, line: C.navySoft, shadow: false });
      badge(s, x + 0.28, by + 0.26, 0.4, i + 1, { fill: C.red, size: 12 });
      s.addText(h, {
        x: x + 0.78, y: by + 0.28, w: bw - 1.0, h: 0.36, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 14.5, bold: true, color: C.white,
      });
      s.addText(b, {
        x: x + 0.28, y: by + 0.82, w: bw - 0.56, h: 0.76, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11, color: C.mutedDark, lineSpacingMultiple: 1.1,
      });
      if (i < stages.length - 1) {
        s.addText('›', {
          x: x + bw + 0.01, y: by + 0.58, w: 0.2, h: 0.4, isTextBox: true, margin: 0, align: 'center',
          fontFace: F.body, fontSize: 20, bold: true, color: C.navySoft,
        });
      }
    });

    // Lead-state scale
    s.addText('Уніфікована шкала стану ліда', {
      x: M, y: 4.55, w: 6, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13, bold: true, color: C.white,
    });
    const states = ['NEW', 'CONFIRMED', 'REGISTERED', 'TAGGED', 'ASSIGNED', 'ACTIVATED', 'RESOLVED', 'CONVERTED', 'ENGAGED', 'ADVOCATE'];
    let sx = M;
    states.forEach((st, i) => {
      const w = 0.34 + st.length * 0.088;
      s.addShape('roundRect', {
        x: sx, y: 4.98, w, h: 0.42, rectRadius: 0.06,
        fill: { color: i >= 7 ? C.red : C.navy },
        line: { color: i >= 7 ? C.red : C.navySoft, width: 0.75 },
      });
      s.addText(st, {
        x: sx, y: 4.98, w, h: 0.42, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
        fontFace: F.body, fontSize: 9.5, bold: true, color: C.white, charSpacing: 0.4,
      });
      sx += w + 0.11;
    });

    card(s, M, 5.78, W - 2 * M, 0.94, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText(
      'Кожна зміна стану автоматично створює наступну задачу з дедлайном (SLA) і відповідальним. ' +
      'Воронка перестає бути презентацією і стає робочим процесом.',
      {
        x: M + 0.42, y: 5.78, w: W - 2 * M - 0.84, h: 0.94, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 13.5, color: C.white, lineSpacingMultiple: 1.15,
      },
    );
    s.addNotes('Ключова думка слайду: різниця між «у нас є база» і «у нас є система» — у тому, що кожен стан породжує задачу.');
    foot(s, n, true);
  }

  // ============================================================ 4. APPEALS ==
  {
    const s = S(false);
    title(s, 'Звернення громадян: 24 готові сценарії', { kicker: 'Модуль 1 · Ядро продукту' });
    lede(s, 'Людина обирає життєву ситуацію — система сама знає, куди писати, які поля потрібні й які документи додати.', 1.62);

    const tpl = [
      'Забезпечення житлом', 'Забезпечення ліками', 'Лікування', 'Оздоровлення',
      'Матеріальна допомога', 'Призначення пенсії', 'Перерахунок пенсії', 'Призначення субсидії',
      'Отримання статусу ВПО', 'Пільги ВПО', 'Звільнення з полону', 'Пошук зниклих безвісти',
      'Скарга на дії ТЦК', 'Група інвалідності', 'Засоби реабілітації', 'Навчання у закладах',
      'Комунальні послуги', 'Умови проживання', 'Транспорт і дороги', 'Озеленення та відпочинок',
      'Профспілки і праця', 'ФОП — поточна проблема', 'Дії органів МВС', 'Затягування розслідування',
    ];
    const listW = 8.0;
    card(s, M, 2.3, listW, 3.3);
    const colW = (listW - 0.7) / 3;
    tpl.forEach((t, i) => {
      const col = Math.floor(i / 8), row = i % 8;
      const x = M + 0.35 + col * colW;
      const y = 2.5 + row * 0.345;
      dot(s, x, y + 0.115, 0.085, col === 2 && row >= 5 ? C.amber : C.red);
      s.addText(t, {
        x: x + 0.17, y, w: colW - 0.27, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 10, color: C.ink,
      });
    });
    s.addText('+ окрема категорія: пропозиції та законодавчі ініціативи', {
      x: M + 0.35, y: 5.24, w: listW - 0.7, h: 0.28, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10, italic: true, color: C.muted,
    });

    const rx = M + listW + 0.28;
    const rw = W - M - rx;
    const rows = [
      ['Цільові організації', 'Шаблон містить перелік органів, куди подається саме це звернення.'],
      ['Обов\'язкові поля', 'Форма не дасть надіслати неповну заяву — менше відмов.'],
      ['Необхідні документи', 'Список додатків показується одразу, до подання.'],
      ['Інструкції на e-mail', 'Людина отримує покрокову пам\'ятку й може подати заяву самостійно.'],
    ];
    let ry = 2.3;
    rows.forEach(([h, b], i) => {
      card(s, rx, ry, rw, 0.76, { shadow: false });
      badge(s, rx + 0.22, ry + 0.18, 0.4, i + 1, { fill: C.ink, size: 12 });
      s.addText(h, {
        x: rx + 0.72, y: ry + 0.1, w: rw - 0.92, h: 0.28, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12.5, bold: true, color: C.ink,
      });
      s.addText(b, {
        x: rx + 0.72, y: ry + 0.37, w: rw - 0.92, h: 0.34, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10, color: C.muted, lineSpacingMultiple: 1.05,
      });
      ry += 0.82;
    });

    card(s, M, 5.72, W - 2 * M, 1.0, { fill: C.ink, line: C.ink });
    s.addText('Політика вбудована у форму', {
      x: M + 0.42, y: 5.88, w: 3.2, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13, bold: true, color: C.red,
    });
    s.addText(
      'Шаблон «ФОП» пропонує підтримати конкретний законопроєкт — звернення громадянина стає вимірюваним політичним голосом.',
      {
        x: M + 0.42, y: 6.2, w: W - 2 * M - 0.84, h: 0.36, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12.5, color: C.white,
      },
    );
    s.addNotes(
      'Це найсильніший слайд для демонстрації наживо. Показати вибір шаблону і те, як змінюються ' +
      'цільові організації та список документів. 24 сценарії — це готовий продукт, а не порожня форма.',
    );
    foot(s, n, false);
  }

  // ============================================== 5. DOC WORKFLOW / TRACKER ==
  {
    const s = S(true);
    title(s, 'Документообіг зі світлофором строків', { kicker: 'Модуль 2 · Контроль', dark: true });
    lede(s, 'Кожне звернення проходить сім кроків з інтеграцією в АСКОД. Три відмітки фіксують рух документа.', 1.62, { dark: true });

    const steps = [
      'Заявник надсилає звернення',
      'Депутат МР або ВР отримує його',
      'Помічник завантажує документи — перша відмітка',
      'Документи йдуть в АСКОД, стартують строки',
      'Відповідь в АСКОД: часткова або повна',
      'Помічник вивантажує відповідь — друга відмітка',
      'Відповідь у платформі — третя відмітка, строк закрито',
    ];
    const cw2 = (W - 2 * M - 0.3) / 2;
    steps.forEach((t, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const x = M + col * (cw2 + 0.3);
      const y = 2.34 + row * 0.66;
      card(s, x, y, cw2, 0.56, { fill: C.navy, line: C.navySoft, shadow: false });
      badge(s, x + 0.2, y + 0.11, 0.34, i + 1, { fill: i >= 4 ? C.green : C.red, size: 11 });
      s.addText(t, {
        x: x + 0.66, y, w: cw2 - 0.86, h: 0.56, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 11.8, color: C.white,
      });
    });

    // Traffic-light legend
    const ty = 5.06;
    card(s, M + cw2 + 0.3, ty, cw2, 1.62, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('Трекер-світлофор', {
      x: M + cw2 + 0.54, y: ty + 0.16, w: cw2 - 0.48, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13, bold: true, color: C.white,
    });
    const lights = [[C.green, 'У строк'], [C.amber, 'Строк наближається'], [C.red, 'Строк порушено']];
    lights.forEach(([c, label], i) => {
      const y = ty + 0.56 + i * 0.34;
      dot(s, M + cw2 + 0.56, y + 0.05, 0.17, c);
      s.addText(label, {
        x: M + cw2 + 0.84, y, w: cw2 - 1.1, h: 0.27, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 11.5, color: C.mutedDark,
      });
    });

    card(s, M, ty, cw2, 1.62, { fill: C.red, line: C.red, shadow: false });
    s.addText('Керівник бачить не звіт про роботу,\nа список прострочень — поіменно.', {
      x: M + 0.34, y: ty + 0.2, w: cw2 - 0.68, h: 0.8, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.white, lineSpacingMultiple: 1.1,
    });
    s.addText('Ескалація: прострочення → нагадування → координатор району → керівник округу.', {
      x: M + 0.34, y: ty + 1.06, w: cw2 - 0.68, h: 0.44, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10.8, color: 'FBDDE1', lineSpacingMultiple: 1.05,
    });
    s.addNotes('Світлофор — це те, що перетворює обіцянку «ми допоможемо» на контрольований строк. Саме тут виникає довіра виборця.');
    foot(s, n, true);
  }

  // ============================================== 6. CRM / SEGMENTATION =====
  {
    const s = S(false);
    title(s, 'CRM виборця: сегментація за 30–60 секунд', { kicker: 'Модуль 3 · База', size: 30 });
    lede(s, 'Короткий скрипт або міні-анкета дають три виміри, за якими система сама маршрутизує контакт.', 1.62);

    const segs = [
      ['N+', 'Наш', C.green, 'Ядро. Веде до ролі: волонтер, помічник, агент.'],
      ['N0', 'Нейтральний', C.amber, 'Головний ресурс зростання. Конвертується через вирішену проблему.'],
      ['N−', 'Не наш', C.muted, 'Не витрачаємо ресурс. Виключається з дорогих каналів.'],
    ];
    const sw = 3.6, sgap = 0.28;
    segs.forEach(([tag, name, col, desc], i) => {
      const x = M + i * (sw + sgap);
      card(s, x, 2.3, sw, 1.82);
      badge(s, x + 0.3, 2.56, 0.62, tag, { fill: col, size: 15 });
      s.addText(name, {
        x: x + 1.06, y: 2.6, w: sw - 1.3, h: 0.36, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 15, bold: true, color: C.ink,
      });
      s.addText(desc, {
        x: x + 0.3, y: 3.3, w: sw - 0.6, h: 0.66, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.2, color: C.muted, lineSpacingMultiple: 1.12,
      });
    });

    const halfW = (W - 2 * M - 0.3) / 2;
    card(s, M, 4.36, halfW, 2.34);
    s.addText('Сегмент і теги', {
      x: M + 0.34, y: 4.56, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.ink,
    });
    s.addText(
      [
        { text: 'ФОП і малий бізнес · підприємства · будинки та ОСББ', options: { bullet: true, breakLine: true } },
        { text: 'Пенсіонери · ВПО · військові, родини, ветерани', options: { bullet: true, breakLine: true } },
        { text: 'Багатодітні родини · соціально незахищені', options: { bullet: true, breakLine: true } },
        { text: 'Інтенсивність: гарячий · теплий · холодний', options: { bullet: true } },
      ],
      {
        x: M + 0.34, y: 4.96, w: halfW - 0.68, h: 1.5, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.8, color: C.ink, paraSpaceAfter: 7,
      },
    );

    const rx2 = M + halfW + 0.3;
    card(s, rx2, 4.36, halfW, 2.34, { fill: C.ink, line: C.ink });
    s.addText('Автоматична маршрутизація', {
      x: rx2 + 0.34, y: 4.56, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.white,
    });
    s.addText(
      'Після реєстрації система сама призначає відповідального за географією (район, вулиця, будинок), ' +
      'сегментом і точкою концентрації — та ставить задачу зі строком.',
      {
        x: rx2 + 0.34, y: 4.96, w: halfW - 0.68, h: 0.78, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.8, color: C.mutedDark, lineSpacingMultiple: 1.14,
      },
    );
    const slas = [['2 год', 'підтвердження контакту'], ['24 год', 'контакт відповідального'], ['48 год', 'візит або зустріч'], ['72 год', 'повторний контакт']];
    slas.forEach(([v, l], i) => {
      const x = rx2 + 0.34 + (i % 2) * ((halfW - 0.68) / 2);
      const y = 5.84 + Math.floor(i / 2) * 0.44;
      s.addText(v, {
        x, y, w: 0.85, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 13, bold: true, color: C.red,
      });
      s.addText(l, {
        x: x + 0.85, y, w: (halfW - 0.68) / 2 - 0.95, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 10.3, color: C.mutedDark,
      });
    });
    s.addNotes('Підкреслити: SLA — не декларація, а тригер ескалації. Без строку сегментація нічого не варта.');
    foot(s, n, false);
  }

  // ==================================================== 7. AI LAYER =========
  {
    const s = S(true);
    title(s, 'AI-контур: обдзвін, консультант, екзамен', { kicker: 'Модуль 4 · Масштаб', dark: true });
    lede(s, 'Там, де партія не має людського ресурсу, працює автоматизація — з живим голосом і збереженням історії.', 1.62, { dark: true });

    const ai = [
      ['AI-обдзвін', 'Сегментовані бази, скрипт на 30–60 секунд, автоматична фіксація статусу та потреби під час розмови.'],
      ['Голосовий консультант', 'Віджет у платформі: людина натискає «Подзвонити» й отримує відповідь голосом. Історія лишається в профілі.'],
      ['RPG-інтерв\'ю', 'Game Master веде інтерактивний політичний сценарій: кандидат ухвалює рішення хід за ходом, з розпізнаванням мови.'],
    ];
    const aw = (W - 2 * M - 0.56) / 3;
    ai.forEach(([h, b], i) => {
      const x = M + i * (aw + 0.28);
      card(s, x, 2.34, aw, 2.5, { fill: C.navy, line: C.navySoft, shadow: false });
      badge(s, x + 0.32, 2.62, 0.5, i + 1, { fill: C.red, size: 14 });
      s.addText(h, {
        x: x + 0.32, y: 3.3, w: aw - 0.64, h: 0.38, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 15, bold: true, color: C.white,
      });
      s.addText(b, {
        x: x + 0.32, y: 3.74, w: aw - 0.64, h: 1.0, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.2, color: C.mutedDark, lineSpacingMultiple: 1.14,
      });
    });

    card(s, M, 5.08, W - 2 * M, 1.6, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('Навіщо партії екзаменувати людей грою', {
      x: M + 0.42, y: 5.26, w: 5.4, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
    });
    s.addText(
      'Анкета показує, що людина про себе думає. Сценарій показує, як вона діє під тиском: розставляє пріоритети, ' +
      'тримає позицію, домовляється. Це дає партії відбір за поведінкою, а не за резюме.',
      {
        x: M + 0.42, y: 5.62, w: W - 2 * M - 0.84, h: 0.86, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12.8, color: C.mutedDark, lineSpacingMultiple: 1.18,
      },
    );
    s.addNotes('Якщо в залі є скепсис до AI — показати голосовий віджет наживо. Він переконує швидше за будь-який слайд.');
    foot(s, n, true);
  }

  // ==================================================== 8. CADRE PIPELINE ===
  {
    const s = S(false);
    title(s, 'Кадровий резерв: від прихильника до депутата', { kicker: 'Модуль 5 · Люди', size: 28 });
    lede(s, 'Повна анкета кандидата — понад 30 полів: досвід управління, цінності, реакція на критику, рішення в кризі.', 1.62);

    const ladder = [['Прихильник', C.muted], ['Помічник', C.amber], ['Агент і координатор', C.red], ['Лідер округу', C.ink]];
    const lw = (W - 2 * M - 0.66) / 4;
    ladder.forEach(([t, c], i) => {
      const x = M + i * (lw + 0.22);
      const h = 0.9 + i * 0.22;
      const y = 4.15 - h;
      card(s, x, y, lw, h, { fill: i === 3 ? C.ink : C.white, line: i === 3 ? C.ink : C.line });
      dot(s, x + 0.28, y + h / 2 - 0.08, 0.16, c);
      s.addText(t, {
        x: x + 0.54, y, w: lw - 0.74, h, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 13, bold: true, color: i === 3 ? C.white : C.ink,
      });
      if (i < 3) {
        s.addText('›', {
          x: x + lw + 0.01, y: y + h / 2 - 0.2, w: 0.2, h: 0.4, isTextBox: true, margin: 0, align: 'center',
          fontFace: F.body, fontSize: 18, bold: true, color: C.line,
        });
      }
    });

    const halfW = (W - 2 * M - 0.3) / 2;
    card(s, M, 4.68, halfW, 2.0);
    s.addText('Що фіксує анкета', {
      x: M + 0.34, y: 4.88, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.ink,
    });
    s.addText(
      [
        { text: 'Досвід: управлінський, держслужба, ГО, кампанії', options: { bullet: true, breakLine: true } },
        { text: 'Галузь інтересу й готовність балотуватися', options: { bullet: true, breakLine: true } },
        { text: 'Як організує команду з 10 осіб; реакція на критику', options: { bullet: true, breakLine: true } },
        { text: 'Статус модерації та рівень із датою присвоєння', options: { bullet: true } },
      ],
      {
        x: M + 0.34, y: 5.26, w: halfW - 0.68, h: 1.2, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.5, color: C.ink, paraSpaceAfter: 6,
      },
    );

    const rx3 = M + halfW + 0.3;
    card(s, rx3, 4.68, halfW, 2.0, { fill: C.ink, line: C.ink });
    s.addText('Ринок, який партія може зайняти', {
      x: rx3 + 0.34, y: 4.88, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.white,
    });
    const stats = [['40 000', 'депутатських мандатів усіх рівнів в Україні'], ['300 000+', 'працівників комунальних і муніципальних структур']];
    stats.forEach(([v, l], i) => {
      const y = 5.3 + i * 0.66;
      s.addText(v, {
        x: rx3 + 0.34, y, w: 1.9, h: 0.46, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.head, fontSize: 24, bold: true, color: C.red,
      });
      s.addText(l, {
        x: rx3 + 2.3, y, w: halfW - 2.64, h: 0.46, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 11, color: C.mutedDark, lineSpacingMultiple: 1.05,
      });
    });
    s.addNotes(
      'Аргумент для лідера партії: це не «застосунок для звернень», а машина відбору кадрів. ' +
      'Партія, яка системно готує людей, через два цикли має лаву, якої немає в конкурентів.',
    );
    foot(s, n, false);
  }

  // ==================================================== 9. FUNNEL + CHART ===
  {
    const s = S(false);
    title(s, 'Звідки береться контакт', { kicker: 'Воронка · Трафік' });
    lede(s, 'Розподіл ресурсу за каналами першого дотику. Кожен канал веде в ту саму базу.', 1.62);

    s.addChart(
      p.ChartType.bar,
      [{
        name: 'Частка ресурсу',
        labels: ['Дзвінки та AI-обдзвін', 'Агенти депутатів', 'QR біля будинків', 'QR на заходах', 'Сайт партії', 'Соцмережі та ЗМІ', 'Таргетована реклама', 'Локальні чати й боти', 'E-mail', 'Партнерства з НГО'],
        values: [40, 20, 10, 8, 7, 5, 4, 3, 2, 1],
      }],
      {
        x: M, y: 2.28, w: 7.5, h: 4.4,
        barDir: 'bar',
        chartColors: [C.red],
        showTitle: false,
        showLegend: false,
        showValue: true,
        dataLabelPosition: 'outEnd',
        dataLabelColor: C.ink,
        dataLabelFontFace: F.body,
        dataLabelFontSize: 10.5,
        dataLabelFormatCode: '0"%"',
        catAxisLabelColor: C.ink,
        catAxisLabelFontFace: F.body,
        catAxisLabelFontSize: 10.5,
        catAxisLineShow: false,
        catGridLine: { style: 'none' },
        valAxisHidden: true,
        valGridLine: { style: 'none' },
        valAxisMaxVal: 46,
        barGapWidthPct: 42,
        plotArea: { fill: { color: C.paper } },
        chartArea: { fill: { color: C.paper } },
      },
    );

    const rx4 = M + 7.8;
    const rw4 = W - M - rx4;
    card(s, rx4, 2.28, rw4, 2.06, { fill: C.ink, line: C.ink });
    s.addText('Дзвінок — половина кампанії', {
      x: rx4 + 0.34, y: 2.48, w: rw4 - 0.68, h: 0.34, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.white,
    });
    s.addText(
      'Усередині 40% телефонного ресурсу: пенсіонери — 30%, соціально незахищені — 25%, ' +
      'ФОП і малий бізнес — 20%, військові та ветерани — 15%, гендерні кампанії — 10%.',
      {
        x: rx4 + 0.34, y: 2.88, w: rw4 - 0.68, h: 1.26, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.8, color: C.mutedDark, lineSpacingMultiple: 1.18,
      },
    );

    card(s, rx4, 4.56, rw4, 2.12);
    s.addText('Follow-up без втрати контакту', {
      x: rx4 + 0.34, y: 4.76, w: rw4 - 0.68, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 14, bold: true, color: C.ink,
    });
    s.addText(
      [
        { text: 'СМС або месенджер після розмови', options: { bullet: true, breakLine: true } },
        { text: 'Персональне посилання та QR агента', options: { bullet: true, breakLine: true } },
        { text: 'Нагадування через 6–12 годин', options: { bullet: true, breakLine: true } },
        { text: 'Мовчання — контакт іде агенту в поле', options: { bullet: true } },
      ],
      {
        x: rx4 + 0.34, y: 5.14, w: rw4 - 0.68, h: 1.3, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.3, color: C.ink, paraSpaceAfter: 7,
      },
    );
    s.addNotes('Цифри — це модель розподілу ресурсу, а не звіт про досягнуті результати. Проговорити це чесно.');
    foot(s, n, false);
  }

  // ==================================================== 10. FIELD NETWORK ===
  {
    const s = S(true);
    title(s, 'Поле: покриття за точками концентрації', { kicker: 'Воронка · Офлайн', dark: true });
    lede(s, 'Онлайн-контакт стає довірою тільки в живій зустрічі. Місто ділиться на точки, за кожною — відповідальний.', 1.62, { dark: true });

    const pts = [['76', 'ринків і торгових майданчиків', 'групи агентів біля локацій'], ['1 140', 'промислових підприємств, з них 340 великих', 'представники по змінах і підрозділах'], ['11 920', 'багатоквартирних будинків', 'будинкові агенти: 1 або 2–5 будинків']];
    const pw = (W - 2 * M - 0.56) / 3;
    pts.forEach(([v, l, b], i) => {
      const x = M + i * (pw + 0.28);
      card(s, x, 2.34, pw, 2.16, { fill: C.navy, line: C.navySoft, shadow: false });
      s.addText(v, {
        x: x + 0.32, y: 2.54, w: pw - 0.64, h: 0.68, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.head, fontSize: 36, bold: true, color: C.red,
      });
      s.addText(l, {
        x: x + 0.32, y: 3.24, w: pw - 0.64, h: 0.54, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12, bold: true, color: C.white, lineSpacingMultiple: 1.06,
      });
      s.addText(b, {
        x: x + 0.32, y: 3.82, w: pw - 0.64, h: 0.5, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.8, color: C.mutedDark, lineSpacingMultiple: 1.1,
      });
    });
    s.addText('Масштаб Києва — як приклад розрахунку. Модель переноситься на будь-яке місто.', {
      x: M, y: 4.58, w: W - 2 * M, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10.5, italic: true, color: C.muted,
    });

    const halfW = (W - 2 * M - 0.3) / 2;
    card(s, M, 5.0, halfW, 1.72, { fill: C.navy, line: C.navySoft, shadow: false });
    s.addText('Модель «зірочка-5»', {
      x: M + 0.34, y: 5.18, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
    });
    s.addText(
      '1 помічник + 4 прихильники = 5 пов\'язаних людей, часто одна родина. Мережа росте ядрами, а не списками.',
      {
        x: M + 0.34, y: 5.54, w: halfW - 0.68, h: 0.96, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12, color: C.mutedDark, lineSpacingMultiple: 1.16,
      },
    );

    const rx5 = M + halfW + 0.3;
    card(s, rx5, 5.0, halfW, 1.72, { fill: C.red, line: C.red, shadow: false });
    s.addText('135–270', {
      x: rx5 + 0.34, y: 5.18, w: 2.2, h: 0.56, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 30, bold: true, color: C.white,
    });
    s.addText('помічників на округ депутата ВР', {
      x: rx5 + 2.6, y: 5.18, w: halfW - 2.94, h: 0.56, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 12, bold: true, color: C.white, lineSpacingMultiple: 1.05,
    });
    s.addText(
      'База 90 = 30 помічників депутата ВР + 12 місцевих депутатів по 5. Коефіцієнт добору 1,5–3,0 дає 675–1 350 людей прямої мережі.',
      {
        x: rx5 + 0.34, y: 5.82, w: halfW - 0.68, h: 0.76, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.8, color: 'FBDDE1', lineSpacingMultiple: 1.12,
      },
    );
    s.addNotes('Тут партія має побачити свою власну географію. Запитати в залі: скільки будинків у вашому окрузі?');
    foot(s, n, true);
  }

  // ==================================================== 11. DISTRICT MATH ===
  {
    const s = S(false);
    title(s, 'Округ 300 000: як це рахується в голоси', { kicker: 'Результат' });
    lede(s, 'Приклад керованої мобілізації на окрузі — три контури покриття, один центр управління.', 1.62);

    const halfW = (W - 2 * M - 0.3) / 2;
    card(s, M, 2.3, halfW, 4.4);
    s.addText('Організаційна модель', {
      x: M + 0.36, y: 2.54, w: halfW - 0.72, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 15, bold: true, color: C.ink,
    });
    const org = [
      ['Народний депутат', 'Лідер округу: стратегія, публічні зустрічі'],
      ['Штаб округу', 'Координація, приймальня, кейс-менеджмент'],
      ['10–12 депутатів МР', 'Опорні точки в мікрозонах'],
      ['До 80 помічників', 'Польовий контур: двори, ринки, прохідні'],
    ];
    org.forEach(([h, b], i) => {
      const y = 3.04 + i * 0.86;
      badge(s, M + 0.36, y + 0.06, 0.42, i + 1, { fill: i < 2 ? C.ink : C.red, size: 12 });
      s.addText(h, {
        x: M + 0.94, y, w: halfW - 1.3, h: 0.3, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 13, bold: true, color: C.ink,
      });
      s.addText(b, {
        x: M + 0.94, y: y + 0.3, w: halfW - 1.3, h: 0.42, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11, color: C.muted, lineSpacingMultiple: 1.08,
      });
    });

    const rx6 = M + halfW + 0.3;
    card(s, rx6, 2.3, halfW, 1.5, { fill: C.ink, line: C.ink });
    s.addText('300 000', {
      x: rx6 + 0.36, y: 2.54, w: 2.3, h: 0.62, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 30, bold: true, color: C.white,
    });
    s.addText('→', {
      x: rx6 + 2.6, y: 2.54, w: 0.5, h: 0.62, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
      fontFace: F.body, fontSize: 22, color: C.muted,
    });
    s.addText('20 000', {
      x: rx6 + 3.1, y: 2.54, w: 2.2, h: 0.62, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 30, bold: true, color: C.red,
    });
    s.addText('населення округу → цільовий результат мобілізації', {
      x: rx6 + 0.36, y: 3.2, w: halfW - 0.72, h: 0.34, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11.5, color: C.mutedDark,
    });

    const contours = [
      ['Дома та мікрорайони', '900 будинків · 12 помічників · вечори та вихідні'],
      ['ФОП-контур', '12 ринків · 24 помічники по двоє · будні в пікові години'],
      ['Підприємства', '25 підприємств · 25 відповідальних · зміни, прохідні, колективні звернення'],
    ];
    contours.forEach(([h, b], i) => {
      const y = 4.0 + i * 0.94;
      card(s, rx6, y, halfW, 0.82);
      dot(s, rx6 + 0.36, y + 0.34, 0.15, [C.red, C.amber, C.green][i]);
      s.addText(h, {
        x: rx6 + 0.62, y: y + 0.11, w: halfW - 0.98, h: 0.28, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 12.5, bold: true, color: C.ink,
      });
      s.addText(b, {
        x: rx6 + 0.62, y: y + 0.4, w: halfW - 0.98, h: 0.32, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.3, color: C.muted,
      });
    });
    s.addNotes(
      'Обережно з обіцянками: 20 000 — це ціль моделі, а не гарантія. Сила аргументу в тому, що ціль ' +
      'розкладена на конкретні будинки, ринки й прохідні, за які відповідають конкретні люди.',
    );
    foot(s, n, false);
  }

  // ==================================================== 12. ECONOMICS =======
  {
    const s = S(false);
    title(s, 'Економіка першого місяця', { kicker: 'Бюджет · приклад Києва' });
    lede(s, 'Активна фаза на місто з електоратом 2 млн: повний розрахунок за фактичними ставками.', 1.62);

    s.addChart(
      p.ChartType.bar,
      [{
        name: 'тис. грн',
        labels: ['Вхідні дзвінки', 'Матеріали на 440 точок', 'SMS-розсилка', 'Соцмережі, 10 районів', 'Платформа, 1 місяць', 'QR по місту'],
        values: [1350, 1320, 800, 400, 400, 120],
      }],
      {
        x: M, y: 2.34, w: 7.4, h: 3.1,
        barDir: 'bar',
        chartColors: [C.ink],
        showTitle: false,
        showLegend: false,
        showValue: true,
        dataLabelPosition: 'outEnd',
        dataLabelColor: C.ink,
        dataLabelFontFace: F.body,
        dataLabelFontSize: 10.5,
        dataLabelFormatCode: '0',
        catAxisLabelColor: C.ink,
        catAxisLabelFontFace: F.body,
        catAxisLabelFontSize: 10.5,
        catAxisLineShow: false,
        catGridLine: { style: 'none' },
        valAxisHidden: true,
        valGridLine: { style: 'none' },
        valAxisMaxVal: 1580,
        barGapWidthPct: 40,
        plotArea: { fill: { color: C.paper } },
        chartArea: { fill: { color: C.paper } },
      },
    );
    s.addText('тис. грн за перший місяць активної фази', {
      x: M + 1.6, y: 5.5, w: 5.8, h: 0.28, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 10, italic: true, color: C.muted,
    });

    card(s, M, 5.92, 7.4, 0.74, { fill: C.ink, line: C.ink });
    s.addText('Платформа — менше 10% бюджету кампанії.', {
      x: M + 0.34, y: 5.92, w: 3.6, h: 0.74, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 12.5, bold: true, color: C.white,
    });
    s.addText('Решту партія витрачає й так — тільки без системи це не лишає активу.', {
      x: M + 4.0, y: 5.92, w: 3.1, h: 0.74, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 10.5, color: C.mutedDark, lineSpacingMultiple: 1.08,
    });

    const rx7 = M + 7.7;
    const rw7 = W - M - rx7;
    card(s, rx7, 2.34, rw7, 1.42, { fill: C.ink, line: C.ink });
    s.addText('4,39 млн грн', {
      x: rx7 + 0.34, y: 2.52, w: rw7 - 0.68, h: 0.6, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.head, fontSize: 30, bold: true, color: C.white,
    });
    s.addText('разом за перший місяць по Києву', {
      x: rx7 + 0.34, y: 3.14, w: rw7 - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11.5, color: C.mutedDark,
    });

    const eco = [
      ['2 000 000', 'абонентів у першому дотику SMS'],
      ['200 000', 'потенційних вхідних дзвінків'],
      ['100 000', 'з них — наші прихильники'],
      ['440 000 грн', 'матеріали з другого місяця, разова частина не повторюється'],
    ];
    eco.forEach(([v, l], i) => {
      const y = 3.96 + i * 0.7;
      card(s, rx7, y, rw7, 0.6, { shadow: false });
      s.addText(v, {
        x: rx7 + 0.28, y, w: 1.7, h: 0.6, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 13, bold: true, color: C.red,
      });
      s.addText(l, {
        x: rx7 + 2.02, y, w: rw7 - 2.3, h: 0.6, isTextBox: true, margin: 0, valign: 'middle',
        fontFace: F.body, fontSize: 10.2, color: C.muted, lineSpacingMultiple: 1.05,
      });
    });
    s.addNotes(
      'Головний комерційний факт: платформа — 400 тис. грн з 4,39 млн, менше 10% бюджету. ' +
      'Решта — це кампанійні витрати, які партія несе й так, тільки без системи вони не лишають активу.',
    );
    foot(s, n, false);
  }

  // ==================================================== 13. ARCHITECTURE ====
  {
    const s = S(true);
    title(s, 'Архітектура, доступ і персональні дані', { kicker: 'Технологія', dark: true });
    lede(s, 'Хмарна платформа без власного серверного парку. Розгортання під доменом партії.', 1.62, { dark: true });

    const tech = [
      ['Стек', 'Next.js на Vercel, хмарне сховище файлів та аватарів. Горизонтальне масштабування без адміністрування заліза.'],
      ['Доступ', 'JWT-сесія з коротким токеном і оновленням, HttpOnly-cookie, ролі користувача й адміністратора, прив\'язка профілю до регіону.'],
      ['Мобільність', 'Адаптивний веб: планшет або смартфон помічника в полі — окремий застосунок не потрібен.'],
    ];
    const tw = (W - 2 * M - 0.56) / 3;
    tech.forEach(([h, b], i) => {
      const x = M + i * (tw + 0.28);
      card(s, x, 2.34, tw, 2.06, { fill: C.navy, line: C.navySoft, shadow: false });
      s.addText(h, {
        x: x + 0.32, y: 2.54, w: tw - 0.64, h: 0.32, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 14.5, bold: true, color: C.white,
      });
      s.addText(b, {
        x: x + 0.32, y: 2.94, w: tw - 0.64, h: 1.24, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.3, color: C.mutedDark, lineSpacingMultiple: 1.16,
      });
    });

    card(s, M, 4.62, W - 2 * M, 2.06, { fill: C.navy, line: C.navySoft, shadow: false });
    dot(s, M + 0.42, 4.93, 0.17, C.amber);
    s.addText('Про що варто домовитися до запуску', {
      x: M + 0.7, y: 4.82, w: 6, h: 0.32, isTextBox: true, margin: 0, valign: 'middle',
      fontFace: F.body, fontSize: 14, bold: true, color: C.white,
    });
    s.addText(
      'Система обробляє персональні дані й політичні вподобання — це чутлива категорія за Законом України «Про захист персональних даних». ' +
      'У платформі вже є явна згода на обробку в анкеті та вибір каналу комунікації. Перед запуском партія узгоджує: ' +
      'хто є володільцем бази, строки зберігання, регламент доступу помічників до чужих профілів і порядок видалення на вимогу людини. ' +
      'Це не юридична формальність — це те, що захищає партію від скандалу в розпал кампанії.',
      {
        x: M + 0.42, y: 5.26, w: W - 2 * M - 0.84, h: 1.28, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.8, color: C.mutedDark, lineSpacingMultiple: 1.2,
      },
    );
    s.addNotes(
      'Не пропускати цей слайд. Партія, яка чує ризик від постачальника першою, довіряє більше. ' +
      'Готувати відповідь на питання «а де фізично лежать дані?».',
    );
    foot(s, n, true);
  }

  // ==================================================== 14. ROLLOUT =========
  {
    const s = S(false);
    title(s, 'Впровадження за чотири кроки', { kicker: 'Як почати' });
    lede(s, 'Партія отримує готову систему під власним брендом. Перший округ запускається, поки конкуренти пишуть технічне завдання.', 1.62);

    const phases = [
      ['Тиждень 1–2', 'Розгортання', 'Домен і брендинг партії, ролі та регіони, імпорт наявної бази контактів.'],
      ['Тиждень 3–4', 'Пілотний округ', 'Один округ: шаблони звернень під місцеву специфіку, навчання штабу й помічників.'],
      ['Місяць 2', 'Поле', 'Точки концентрації, персональні QR, SLA й трекер строків у робочому режимі.'],
      ['Місяць 3+', 'Масштаб', 'Тиражування на інші округи, кадровий резерв, AI-контур, звітність по KPI.'],
    ];
    const phw = (W - 2 * M - 0.66) / 4;
    phases.forEach(([t, h, b], i) => {
      const x = M + i * (phw + 0.22);
      card(s, x, 2.3, phw, 2.6, { fill: i === 0 ? C.ink : C.white, line: i === 0 ? C.ink : C.line });
      s.addText(t.toUpperCase(), {
        x: x + 0.3, y: 2.54, w: phw - 0.6, h: 0.26, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 9.5, bold: true, charSpacing: 1.6, color: i === 0 ? C.red : C.muted,
      });
      s.addText(h, {
        x: x + 0.3, y: 2.86, w: phw - 0.6, h: 0.36, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 15, bold: true, color: i === 0 ? C.white : C.ink,
      });
      s.addText(b, {
        x: x + 0.3, y: 3.3, w: phw - 0.6, h: 1.34, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.2, color: i === 0 ? C.mutedDark : C.muted, lineSpacingMultiple: 1.16,
      });
    });

    const halfW = (W - 2 * M - 0.3) / 2;
    card(s, M, 5.12, halfW, 1.56);
    s.addText('Що входить у впровадження', {
      x: M + 0.34, y: 5.3, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.ink,
    });
    s.addText(
      [
        { text: 'Платформа під брендом і доменом партії', options: { bullet: true, breakLine: true } },
        { text: 'Налаштування шаблонів звернень під регіон', options: { bullet: true, breakLine: true } },
        { text: 'Навчання штабу, помічників і кол-центру', options: { bullet: true } },
      ],
      {
        x: M + 0.34, y: 5.68, w: halfW - 0.68, h: 0.9, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.3, color: C.ink, paraSpaceAfter: 5,
      },
    );

    const rx8 = M + halfW + 0.3;
    card(s, rx8, 5.12, halfW, 1.56, { fill: C.ink, line: C.ink });
    s.addText('Модель оплати', {
      x: rx8 + 0.34, y: 5.3, w: halfW - 0.68, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
    });
    s.addText(
      'Абонентська плата за активну базу контактів у регіоні плюс разове впровадження. ' +
      'Орієнтир із київського розрахунку — 400 тис. грн на місяць на 400 тис. абонентів у 10 районах.',
      {
        x: rx8 + 0.34, y: 5.68, w: halfW - 0.68, h: 0.9, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 11.3, color: C.mutedDark, lineSpacingMultiple: 1.16,
      },
    );
    s.addNotes('Ціну називати як орієнтир із реального розрахунку, а не як прайс. Фінальна цифра залежить від розміру бази й кількості округів.');
    foot(s, n, false);
  }

  // ==================================================== 15. CLOSE ===========
  {
    const s = S(true);
    const marks = [[11.2, 1.3, 0.42, C.red], [12.1, 1.95, 0.24, C.amber], [10.65, 2.15, 0.16, C.green]];
    marks.forEach(([x, y, d, c]) => dot(s, x, y, d, c));

    s.addText('НАСТУПНИЙ КРОК', {
      x: M, y: 2.0, w: 8, h: 0.32, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 12, bold: true, charSpacing: 2.6, color: C.red,
    });
    s.addText('Демонстрація наживо\nна вашому окрузі', {
      x: M, y: 2.44, w: 9, h: 1.7, isTextBox: true, margin: 0,
      fontFace: F.head, fontSize: 42, bold: true, color: C.white, lineSpacingMultiple: 1.0,
    });
    s.addText(
      'Година в залі зі штабом: показуємо подання звернення, трекер строків і картку виборця — ' +
      'на прикладі вашого міста, з вашими типами проблем.',
      {
        x: M, y: 4.28, w: 8.4, h: 0.9, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 14.5, color: C.mutedDark, lineSpacingMultiple: 1.2,
      },
    );

    const asks = [['Демо', 'Показ системи штабу партії'], ['Пілот', 'Один округ, вісім тижнів'], ['Оцінка', 'Розрахунок бюджету під ваш регіон']];
    const aw2 = (W - 2 * M - 0.56) / 3;
    asks.forEach(([h, b], i) => {
      const x = M + i * (aw2 + 0.28);
      card(s, x, 5.42, aw2, 1.1, { fill: C.navy, line: C.navySoft, shadow: false });
      dot(s, x + 0.3, 5.68, 0.15, [C.red, C.amber, C.green][i]);
      s.addText(h, {
        x: x + 0.56, y: 5.56, w: aw2 - 0.8, h: 0.3, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 13.5, bold: true, color: C.white,
      });
      s.addText(b, {
        x: x + 0.3, y: 5.92, w: aw2 - 0.6, h: 0.42, isTextBox: true, margin: 0,
        fontFace: F.body, fontSize: 10.8, color: C.mutedDark,
      });
    });
    s.addNotes('Закрити одним питанням: «Який округ беремо в пілот?» — не «чи цікаво вам».');
    foot(s, n, true);
  }

  await p.writeFile({ fileName: 'platforma-partii-prezentaciya.pptx' });
  console.log('written: platforma-partii-prezentaciya.pptx (' + n + ' slides)');
})();
