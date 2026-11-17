/* ===== SAP Fiori (UI5 Web Components, тема Morning Horizon) ===== */
import { setDefaultFontLoading } from "@ui5/webcomponents-base/dist/config/Fonts.js";
import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { registerLocaleDataLoader } from "@ui5/webcomponents-base/dist/asset-registries/LocaleData.js";
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";
import ruCldr from "@ui5/webcomponents-localization/dist/generated/assets/cldr/uk.json";
import ruMain from "@ui5/webcomponents/dist/generated/assets/i18n/messagebundle_uk.json";
import ruFiori from "@ui5/webcomponents-fiori/dist/generated/assets/i18n/messagebundle_uk.json";

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/SplitButton.js";
import "@ui5/webcomponents/dist/Menu.js";
import "@ui5/webcomponents/dist/MenuItem.js";
import "@ui5/webcomponents-icons/dist/history.js";
import "@ui5/webcomponents-icons/dist/hint.js";
import "@ui5/webcomponents-icons/dist/edit.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/SuggestionItem.js";
import "@ui5/webcomponents/dist/TextArea.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Text.js";
import "@ui5/webcomponents/dist/Tag.js";
import "@ui5/webcomponents/dist/Card.js";
import "@ui5/webcomponents/dist/CardHeader.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/ListItemStandard.js";
import "@ui5/webcomponents/dist/ListItemCustom.js";
import "@ui5/webcomponents/dist/SegmentedButton.js";
import "@ui5/webcomponents/dist/SegmentedButtonItem.js";
import "@ui5/webcomponents/dist/ProgressIndicator.js";
import "@ui5/webcomponents/dist/MessageStrip.js";
import "@ui5/webcomponents/dist/DatePicker.js";
import "@ui5/webcomponents/dist/Dialog.js";
import "@ui5/webcomponents/dist/Bar.js";
import "@ui5/webcomponents/dist/Toast.js";
import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents/dist/Tab.js";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Select.js";
import "@ui5/webcomponents/dist/Option.js";
import "@ui5/webcomponents/dist/RadioButton.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Link.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableHeaderRow.js";
import "@ui5/webcomponents/dist/TableHeaderCell.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";
import "@ui5/webcomponents-fiori/dist/DynamicPage.js";
import "@ui5/webcomponents-fiori/dist/DynamicPageTitle.js";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";
import "@ui5/webcomponents-fiori/dist/illustrations/NoSearchResults.js";
import "@ui5/webcomponents-fiori/dist/illustrations/BeforeSearch.js";
import "@ui5/webcomponents-fiori/dist/illustrations/SuccessScreen.js";
import "@ui5/webcomponents-fiori/dist/illustrations/NoEntries.js";
import "@ui5/webcomponents-icons/dist/phone.js";
import "@ui5/webcomponents-icons/dist/email.js";
import "@ui5/webcomponents-icons/dist/document-text.js";
import "@ui5/webcomponents-icons/dist/database.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/undo.js";
import "@ui5/webcomponents-icons/dist/signature.js";
import "@ui5/webcomponents-icons/dist/print.js";
import "@ui5/webcomponents-icons/dist/accept.js";
import "@ui5/webcomponents-icons/dist/paper-plane.js";
import "@ui5/webcomponents-icons/dist/inspection.js";
import "@ui5/webcomponents-icons/dist/pdf-attachment.js";

setDefaultFontLoading(false); // шрифт 72 вбудовано в сторінку
registerLocaleDataLoader("uk", async () => ruCldr);
registerI18nLoader("@ui5/webcomponents", "uk", async () => ruMain);
registerI18nLoader("@ui5/webcomponents-fiori", "uk", async () => ruFiori);
setLanguage("uk");

/* ===================== Дані (змодельовані) ===================== */
const DEG = { light: "Легкий", medium: "Середній", heavy: "Важкий" };
const BASE_DAYS = { light: 5, medium: 14, heavy: 30 };
const SRC = { sap: ["SAP", "Information", "database"], phone: ["Телефон", "Critical", "phone"], email: ["Email", "Critical", "email"], paper: ["Папір", "Critical", "document-text"] };
const MIL = {
  "41207": { name: "1-ша танкова бригада", phone: "внутр. 12-07" },
  "41315": { name: "2-га механізована бригада", phone: "внутр. 13-15" },
  "42088": { name: "3-тя механізована бригада", phone: "внутр. 20-88" },
  "43510": { name: "4-та танкова бригада", phone: "внутр. 35-10" },
};
const REG = [
  ["t1", "Т-64БВ", "2001-0457", "41207"], ["t2", "Т-64БВ", "2001-0475", "41207"],
  ["t3", "Т-72АМТ", "7214-038", "41315"], ["t4", "Т-72АМТ", "7214-083", "42088"],
  ["t5", "Т-64БВ", "3315-0745", "42088"], ["t6", "Т-64БВ", "3351-0745", "43510"],
  ["t7", "Т-80БВ", "6620-112", "41207"], ["t8", "Т-80БВ", "6620-121", "41315"],
  ["t9", "Т-64БВ", "5502-0912", "43510"], ["t10", "Т-64БВ", "5502-0921", "43510"],
  ["t11", "Т-72АМТ", "7230-551", "41207"], ["t12", "Т-80БВ", "6631-204", "42088"],
  ["t13", "Т-64БВ", "2010-1188", "41315"], ["t14", "Т-72АМТ", "7241-310", "43510"],
  ["t15", "Т-64БВ", "2014-0033", "41207"], ["t16", "Т-80БВ", "6640-777", "43510"],
  ["t17", "Т-64БВ", "4401-0619", "42088"], ["t18", "Т-72АМТ", "7250-142", "41315"],
].map(([id, model, serial, unit]) => ({ id, model, serial, unit }));
const tankById = (id) => REG.find((t) => t.id === id);

const REQS = [
  { id: "З-2318", source: "sap", time: "07:42", tank: "t13", act: { suggest: "light", defects: ["Електрообладнання: несправний стартер-генератор"] } },
  { id: "З-2319", source: "phone", time: "07:55", raw: { model: "Т64БВ", serial: "2OO1-O457", unit: "41207" }, note: "Дзвінок чергового 1 ТБр: «Т64БВ, заводський 2OO1-O457 (продиктували літерою «О»), двигун не запускається».", act: { serial: "2001-0457", suggest: "medium", defects: ["Двигун: не запускається, падіння тиску оливи", "Система охолодження: теча радіатора"] } },
  { id: "З-2320", source: "sap", time: "08:03", tank: "t11", act: { suggest: "light", defects: ["Ходова частина: знос гусеничної стрічки, заміна 12 траків"] } },
  { id: "З-2321", source: "email", time: "08:10", raw: { model: "T-72AMT", serial: "7214-0З8", unit: "в/ч 41315" }, note: "Лист із 2 МБр. Модель набрано латиницею, у номері замість цифри «3» — літера «З».", act: { serial: "7214-038", suggest: "medium", defects: ["Трансмісія: знос фрикціонів бортової коробки передач"] } },
  { id: "З-2322", source: "paper", time: "08:26", raw: { model: "Т-64 БВ", serial: "3315-0754", unit: "3-тя мех. бригада" }, note: "Рукописна заявка (скан) із 3-ї мех. бригади — номер частини не вказано. Останні цифри серійного номера, ймовірно, переставлено.", act: { serial: "3315-0754", suggest: "heavy", defects: ["Корпус: пробоїна в районі МТВ", "Двигун: руйнування блока циліндрів"] } },
  { id: "З-2323", source: "sap", time: "08:31", tank: "t16", act: { suggest: "heavy", defects: ["Двигун ГТД-1000: помпаж, руйнування лопаток турбіни"] } },
  { id: "З-2324", source: "phone", time: "08:47", raw: { model: "Т-80", serial: "6620-112", unit: "41270" }, note: "Дзвінок: «Т-80, номер 6620-112, в/ч 41270». Номер частини, схоже, названо з помилкою.", act: { serial: "6620-112", suggest: "medium", defects: ["Ходова частина: руйнування двох опорних котків", "Торсіонний вал: злам"] } },
  { id: "З-2325", source: "sap", time: "09:02", tank: "t17", act: { suggest: "light", defects: ["Зв'язок: несправна радіостанція, заміна антенного блока"] } },
  { id: "З-2326", source: "paper", time: "09:15", raw: { model: "Т-64БВ", serial: "…0912", unit: "в/ч 43510" }, note: "Паперова заявка: перші цифри номера нерозбірливі.", act: { serial: "5502-0912", suggest: "medium", defects: ["Озброєння: несправний механізм заряджання"] } },
  { id: "З-2327", source: "email", time: "09:20", raw: { model: "Т-72АМТ", serial: "9999-0001", unit: "42088" }, note: "Лист із 3 МБр. Такого номера в реєстрі корпусу, схоже, немає.", act: { serial: "9999-0001", suggest: "light", defects: ["Електрообладнання: несправна акумуляторна батарея"] } },
  { id: "З-2328", source: "sap", time: "09:34", tank: "t14", act: { suggest: "medium", defects: ["Трансмісія: теча оливи з коробки передач"] } },
  { id: "З-2329", source: "sap", time: "09:51", tank: "t6", act: { suggest: "heavy", defects: ["Корпус: деформація днища", "Ходова частина: руйнування лінивця"] } },
  { id: "З-2330", source: "phone", time: "09:58", raw: { model: "Т72АМТ", serial: "7230-551", unit: "41207" }, note: "Дзвінок з 1 ТБр щодо зносу гусениці Т-72АМТ 7230-551. Можливо, на цей танк уже подавали заявку.", act: { serial: "7230-551", suggest: "light", defects: ["Ходова частина: знос гусеничної стрічки"] } },
];
/* Наряди, що вже в роботі (з SAP) */
const EXISTING = [{ tank: "t7", no: "Н-0498", ru: "rvb", inDays: 6 }];
const WAIT_LIMIT_MS = 2 * 60 * 60 * 1000; // ожидание ответа части дольше 2 ч — прострочено
const RUS = [
  { id: "orr", name: "Окрема ремонтна рота", short: "ОРР", capacity: 8, active: 3, degrees: ["light", "medium"], models: ["Т-64БВ", "Т-72АМТ"] },
  { id: "rvb", name: "1-й ремонтно-відновлювальний батальйон", short: "1 РВБ", capacity: 12, active: 10, degrees: ["light", "medium", "heavy"], models: ["Т-64БВ", "Т-72АМТ", "Т-80БВ"] },
  { id: "prm", name: "Рухома ремонтна майстерня", short: "РРМ", capacity: 6, active: 4, degrees: ["light"], models: ["Т-64БВ", "Т-72АМТ", "Т-80БВ"] },
];
const REDIRECT_TO = ["Командування роду військ", "Командування сил логістики"];
const REDIRECT_WHY = ["Немає можливостей для такого ремонту", "Усі підрозділи перевантажені", "Потрібен заводський ремонт"];

function initState() {
  return {
    reqs: REQS.map((r) => ({ ...r, raw: r.raw ? { ...r.raw } : null, status: r.source === "sap" ? "ready" : "needs_id", tankId: r.tank || null, spent: 0, draft: null, order: null, cand: null, how: r.source === "sap" ? "sap" : null })),
    rus: RUS.map((u) => ({ ...u })), batch: [], printed: false, seq: 517, times: [],
    filter: "active", selected: "З-2318", checked: {}, newSeq: 2331,
  };
}
let S = initState();
(() => { const w = S.reqs.find((r) => r.id === "З-2327"); w.status = "waiting"; w.waitAt = Date.now() - (2 * 60 + 15) * 60000; })();
let openedAt = Date.now();
let undoSnap = null, undoLabel = "";

/* ===================== Нечіткий пошук ===================== */
const LOOK = { А: "A", В: "B", Е: "E", К: "K", М: "M", Н: "H", О: "O", Р: "P", С: "C", Т: "T", Х: "X", У: "Y", І: "I" };
const SEP = /[\s\-–—_.\/№#…?*,]/;
function normCh(ch) { ch = ch.toUpperCase(); ch = LOOK[ch] || ch; if (ch === "O") return "0"; if (ch === "I" || ch === "L") return "1"; if (ch === "З") return "3"; return ch; }
function norm(s) { let o = ""; for (const ch of String(s || "")) { if (SEP.test(ch)) continue; o += normCh(ch); } return o; }
const digits = (s) => String(s || "").replace(/\D/g, "");
function osa(a, b) {
  const m = a.length, n = b.length, d = [];
  for (let i = 0; i <= m; i++) d[i] = [i];
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    const c = a[i - 1] === b[j - 1] ? 0 : 1;
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[m][n];
}
function lcsSet(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) d[i][j] = a[i] === b[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
  const s = new Set(); let i = 0, j = 0;
  while (i < m && j < n) { if (a[i] === b[j]) { s.add(j); i++; j++; } else if (d[i + 1][j] >= d[i][j + 1]) i++; else j++; }
  return s;
}
function fixes(raw) {
  const f = [], s = String(raw || "");
  if (/[OoОо]/.test(s)) f.push("О→0");
  if (/[Зз]/.test(s)) f.push("З→3");
  if (/[IilІі]/.test(s)) f.push("I→1");
  return f;
}
/* Частина: за номером (41207) або за назвою («1 ТБр», «перша танкова», «3-тя мех. бригада») */
const ORD = { перш: "1", перв: "1", друг: "2", втор: "2", трет: "3", четв: "4" };
function unitCode(s) {
  const d = digits(s); if (d.length >= 4) return d;
  const t = String(s || "").toLowerCase();
  let n = (t.match(/(\d+)/) || [])[1];
  if (!n) { const k = Object.keys(ORD).find((o) => t.includes(o)); n = k && ORD[k]; }
  const kind = /танк|тбр/.test(t) ? "танков" : /мех|мбр/.test(t) ? "механіз" : null;
  if (!n || !kind) return d;
  return Object.keys(MIL).find((u) => { const nm = MIL[u].name.toLowerCase(); return nm.startsWith(n + "-") && nm.includes(kind); }) || d;
}
function match(raw, actSerial) {
  const na = norm(actSerial);
  const nq = norm(raw.serial), nm = norm(raw.model), nu = unitCode(raw.unit);
  if (!nq && !nm && !nu) return [];
  return REG.map((t) => {
    const ns = norm(t.serial), tm = norm(t.model);
    let ss = 0, partial = false;
    if (nq.length >= 2) { ss = 1 - osa(nq, ns) / Math.max(nq.length, ns.length); if (nq.length >= 3 && ns.includes(nq) && nq !== ns) { ss = Math.max(ss, 0.85); partial = true; } }
    let ms = 0; if (nm) ms = nm === tm ? 1 : nm.length >= 2 && (tm.startsWith(nm) || nm.startsWith(tm)) ? 0.7 : 0;
    let us = 0; if (nu) us = nu === t.unit ? 1 : Math.max(0, 1 - osa(nu, t.unit) / 5);
    let score = nq.length >= 2 ? ss * 0.7 + us * 0.2 + ms * 0.1 : Math.min(0.6, us * 0.6 + ms * 0.4);
    const actMatch = na.length >= 4 && na === ns;
    if (actMatch) score = Math.min(1, Math.max(score, 0.6) + 0.1);
    return { t, score, ss, us, ms, partial, actMatch, exact: nq.length >= 2 && nq === ns };
  }).filter((c) => c.score >= 0.55).sort((a, b) => b.score - a.score).slice(0, 5);
}

/* ===================== Допоміжні ===================== */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const cur = () => S.reqs.find((r) => r.id === S.selected);
const isActive = (r) => ["needs_id", "ready", "waiting"].includes(r.status);
const ST = { needs_id: ["Потребує ідентифікації", "Critical"], ready: ["Готова до рішення", "Information"], waiting: ["Чекає уточнення", "Negative"], ordered: ["Наряд на підписі", "Information"], unblocked: ["Наряд розблоковано", "Positive"], redirected: ["Переадресовано", "None"], duplicate: ["Дублікат", "None"] };
const FILTERS = [
  ["active", "Усі", (r) => isActive(r), "Neutral"],
  ["sap", "SAP", (r) => r.source === "sap" && isActive(r), "Neutral"],
  ["ext", "Зовнішні", (r) => r.source !== "sap" && isActive(r), "Critical"],
  ["waiting", "Чекають", (r) => r.status === "waiting", "Negative"],
  ["sign", "На підписі", (r) => r.status === "ordered", "Neutral"],
  ["done", "Готово", (r) => !isActive(r) && r.status !== "ordered", "Positive"],
];
const tagDesign = (s) => (s === "None" ? "Neutral" : s);
const tag = (t, d, icon) => `<ui5-tag design="${d || "Neutral"}" ${!d || d === "Neutral" ? "hide-state-icon" : ""}>${esc(t)}</ui5-tag>`;
const fmtMs = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const today = new Date(); today.setHours(0, 0, 0, 0);
const addDays = (n) => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };
const iso = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const ru = (d) => { if (!d) return "—"; const [y, m, dd] = d.split("-"); return dd + "." + m + "." + y; };
const nowHM = () => { const d = new Date(); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); };
const ruById = (id) => S.rus.find((u) => u.id === id);
function capab(u, model, deg) { if (!u.models.includes(model)) return "Не обслуговує " + model; if (!u.degrees.includes(deg)) return DEG[deg] + " ремонт не виконує"; return null; }
const days = (u, deg) => Math.round(BASE_DAYS[deg] * (1 + u.active / u.capacity));
function recommend(model, deg) { const ok = S.rus.filter((u) => !capab(u, model, deg) && u.active < u.capacity); if (!ok.length) return null; return ok.sort((a, b) => days(a, deg) - days(b, deg))[0].id; }
function dupFor(tankId, selfId) {
  const o = S.reqs.find((x) => x.id !== selfId && x.tankId === tankId && !["redirected", "duplicate"].includes(x.status));
  if (o) return o.order ? `наряд ${o.order.no} (${ruById(o.order.ruId).short})` : `заявка ${o.id}`;
  const e = EXISTING.find((x) => x.tank === tankId);
  if (e) return `наряд ${e.no} у роботі (${ruById(e.ru).short}, до ${ru(iso(addDays(e.inDays)))})`;
  return null;
}
const waitMs = (r) => Date.now() - (r.waitAt || Date.now());
const fmtAge = (ms) => { const m = Math.floor(ms / 60000); return m >= 60 ? `${Math.floor(m / 60)} год ${m % 60} хв` : `${m} хв`; };
const overdue = (r) => r.status === "waiting" && waitMs(r) > WAIT_LIMIT_MS;
function loadLevel(n) { return n >= 9 ? { cls: "hi", word: "високе" } : n >= 5 ? { cls: "mid", word: "середнє" } : { cls: "lo", word: "низьке" }; }
function plural(n, a, b, c) { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; }
function flushTimer() { const r = cur(); if (r && isActive(r)) r.spent += Date.now() - openedAt; openedAt = Date.now(); }

/* ===================== Рендер ===================== */
function render() { renderShell(); renderStart(); renderPage(); renderBatch(); }

function renderShell() { const n = S.batch.length; $("#batchItem").count = n ? String(n) : ""; }
function renderStart() {
  const active = S.reqs.filter(isActive).length, done = S.reqs.filter((r) => !isActive(r)).length;
  const avg = S.times.length ? fmtMs(S.times.reduce((a, b) => a + b, 0) / S.times.length) : "—";
  $("#kpis").innerHTML = `<div class="kpi"><span class="kv">${active}</span><span class="kl">у черзі</span></div><div class="kpi"><span class="kv">${done}</span><span class="kl">опрацьовано</span></div><div class="kpi"><span class="kv">${avg}</span><span class="kl">середній час</span></div><button class="kpi kpi-btn" id="kpiSign" title="Показати наряди на підписі"><span class="kv">${S.batch.length}</span><span class="kl">на підписі ›</span></button>`;
  $("#kpiSign").onclick = () => { S.filter = "sign"; renderStart(); };
  $("#tabs").innerHTML = FILTERS.map(([k, l, f, d]) => `<ui5-tab text="${l}" additional-text="${S.reqs.filter(f).length}" design="${d}" data-id="${k}" ${S.filter === k ? "selected" : ""}></ui5-tab>`).join("");
  renderQueue();
}
function renderQueue() {
  const f = FILTERS.find((x) => x[0] === S.filter)[2];
  const q = norm(S.q || "");
  const hay = (r) => { const t = r.tankId ? tankById(r.tankId) : null; return norm([r.id, r.raw && r.raw.serial, r.raw && r.raw.unit, t && t.serial, t && t.unit, t && t.model, r.order && r.order.no].join(" ")); };
  const list = q ? S.reqs.filter((r) => hay(r).includes(q)) : S.reqs.filter(f);
  $("#tabs").style.display = q ? "none" : "";
  const ql = $("#qlist");
  ql.noDataText = q ? "Нічого не знайдено" : S.filter === "done" ? "Поки нічого не опрацьовано" : S.filter === "sign" ? "Нарядів на підписі немає" : "Заявок у цьому фільтрі немає";
  ql.innerHTML = list.map((r) => {
    const [sl, , icon] = SRC[r.source]; const [stl, stc] = ST[r.status];
    let text, desc;
    if (r.tankId) { const t = tankById(r.tankId); text = `${t.model} · ${t.serial}`; desc = `${r.id} · ${r.time} · в/ч ${t.unit}`; }
    else { const raw = r.raw || {}; text = raw.model || raw.serial ? `«${raw.model || "?"} · ${raw.serial || "?"}»` : "Нова заявка"; desc = `${r.id} · ${r.time} · в/ч ${unitCode(raw.unit) || "?"}`; }
    const addT = r.status === "waiting" ? `Чекає ${fmtAge(waitMs(r))}` : stl, addS = r.status === "waiting" ? (overdue(r) ? "Negative" : "Critical") : stc;
    return `<ui5-li icon="${icon}" tooltip="${sl}" description="${esc(desc)}" additional-text="${addT}" additional-text-state="${addS}" data-id="${r.id}" ${r.id === S.selected ? "selected" : ""}>${esc(text)}</ui5-li>`;
  }).join("");
}

/* --- Кроки внутри заявки: 1 Танк → 2 Рішення --- */
function stepHead(n, title, state, summary, action) {
  // state: open | done | locked
  return `<div class="st-head ${state}">
    <span class="st-n">${state === "done" ? '<ui5-icon name="accept"></ui5-icon>' : n}</span>
    <span class="st-title">${title}</span>
    ${summary ? `<span class="st-sum">${summary}</span>` : ""}
    ${action || ""}</div>`;
}
function tankSummary(r) {
  const t = tankById(r.tankId);
  return `<b>${t.model}</b> · ${t.serial} · в/ч ${t.unit} <span class="muted">(${MIL[t.unit].name})</span>`;
}
function renderPage() {
  const r = cur();
  const title = $("#dpTitle"), content = $("#dpContent"), footer = $("#dpFooter"), dp = $("#dp");
  const undoBtn = undoSnap ? `<ui5-button slot="actionsBar" id="undoBtn" icon="undo" design="Transparent">Скасувати: ${esc(undoLabel)}</ui5-button>` : "";
  if (!r) {
    title.innerHTML = `<ui5-title slot="heading" level="H2">Чергу розібрано</ui5-title>${undoBtn}`;
    content.innerHTML = `<div class="pad"><ui5-illustrated-message name="SuccessScreen" title-text="Усі заявки опрацьовано" subtitle-text="${S.batch.length ? `Нарядів на підпис: ${S.batch.length}` : "Нових заявок немає"}">${S.batch.length ? '<ui5-button design="Emphasized" icon="signature" data-act="batch">Пакет на підпис</ui5-button>' : ""}</ui5-illustrated-message></div>`;
    footer.innerHTML = ""; dp.showFooter = false; wire(); return;
  }
  const [sl, sc, sicon] = SRC[r.source]; const [stl, stc] = ST[r.status];
  title.innerHTML = `<ui5-title slot="heading" level="H2">Заявка ${r.id}</ui5-title>
    <ui5-title slot="snappedHeading" level="H3">Заявка ${r.id}</ui5-title>
    <div slot="subheading" class="sub">${tag(stl, tagDesign(stc))}<span class="meta"><ui5-icon name="${sicon}"></ui5-icon>${sl} · ${r.time}</span></div>
    ${undoBtn}`;

  const idOpen = r.status === "needs_id" || r.status === "waiting";
  const decOpen = r.status === "ready";
  const done = !idOpen && !decOpen;
  const left = [];
  // Шаг 1 — Танк
  if (idOpen) left.push(`<section class="step-card open">${stepHead(1, "Танк", "open", r.status === "waiting" ? tag(`чекає відповіді частини ${fmtAge(waitMs(r))}${overdue(r) ? " · прострочено" : ""}`, overdue(r) ? "Negative" : "Critical") : "")}${identBody(r)}</section>`);
  else left.push(`<section class="step-card">${stepHead(1, "Танк", "done", tankSummary(r), r.how === "sap" ? tag("з SAP", "Information") : (decOpen ? '<ui5-button design="Transparent" icon="edit" data-act="edit-tank">Змінити</ui5-button>' : ""))}</section>`);
  // Шаг 2 — Рішення
  if (idOpen) left.push(`<section class="step-card locked">${stepHead(2, "Рішення", "locked", '<span class="muted">після підтвердження танка</span>')}</section>`);
  else if (decOpen) left.push(`<section class="step-card open">${stepHead(2, "Рішення", "open", "")}${decisionBody(r)}</section>`);
  else left.push(`<section class="step-card">${stepHead(2, "Рішення", "done", decisionSummary(r))}</section>`);
  if (done) left.push(resultCard(r));

  content.innerHTML = `<div class="pad"><div class="work">${left.join("")}</div></div>`;
  footer.innerHTML = idOpen ? identFooter(r) : decOpen ? decisionFooter(r) : doneFooter(r);
  dp.showFooter = !!footer.innerHTML.trim();
  wire();
  if (idOpen) { renderCands(r); if (!r._focused) { r._focused = true; const f = $("#f-serial"); if (f) setTimeout(() => f.focus(), 60); } }
}

/* --- Документи --- */
function docsHTML(r) {
  const t = r.tankId ? tankById(r.tankId) : null;
  let req = "";
  if (r.source !== "sap") {
    req = r.isNew
      ? `<div class="doc"><div class="doc-h">Текст заявки</div>
          <ui5-segmented-button id="srcSeg" accessible-name="Джерело" class="src-seg">${["phone", "email", "paper"].map((k) => `<ui5-segmented-button-item data-id="${k}" icon="${SRC[k][2]}" ${r.source === k ? "selected" : ""}>${SRC[k][0]}</ui5-segmented-button-item>`).join("")}</ui5-segmented-button>
          <ui5-textarea id="f-note" rows="3" placeholder="Що повідомили: несправність, хто дзвонив" value="${esc(r.note || "")}"></ui5-textarea></div>`
      : `<div class="doc"><div class="doc-h"><ui5-icon name="${SRC[r.source][2]}"></ui5-icon>Текст заявки</div><p class="quote">${esc(r.note)}</p></div>`;
  }
  return `${req}<div class="doc"><div class="doc-h"><ui5-icon name="pdf-attachment"></ui5-icon>Акт технічного стану<ui5-link data-act="pdf" class="doc-link">Відкрити</ui5-link></div>${actHTML(r, t)}</div>`;
}
function reqNoteHTML(r) {
  if (r.source === "sap") return "";
  if (r.isNew) return `<div class="field"><ui5-label>Звідки заявка</ui5-label><ui5-segmented-button id="srcSeg" accessible-name="Джерело">${["phone", "email", "paper"].map((k) => `<ui5-segmented-button-item data-id="${k}" icon="${SRC[k][2]}" ${r.source === k ? "selected" : ""}>${SRC[k][0]}</ui5-segmented-button-item>`).join("")}</ui5-segmented-button></div>
    <div class="field"><ui5-label for="f-note">Що повідомили</ui5-label><ui5-textarea id="f-note" rows="2" placeholder="Несправність, хто дзвонив" value="${esc(r.note || "")}"></ui5-textarea></div>`;
  return `<div class="src-note"><ui5-icon name="${SRC[r.source][2]}"></ui5-icon><div><div class="sn-k">Текст заявки · ${SRC[r.source][0].toLowerCase()}</div>${esc(r.note)}</div></div>`;
}
function actSumHTML(r) {
  const a = r.act;
  return `<div class="act-sum"><div class="as-h"><ui5-icon name="pdf-attachment"></ui5-icon><span>Акт технічного стану № ${r.id.replace("З-", "")}/ТС</span><ui5-link data-act="act-open">Відкрити акт</ui5-link></div>
    <ul>${a.defects.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
    <div class="as-c">Висновок комісії: <b>${DEG[a.suggest].toLowerCase()} ремонт</b></div></div>`;
}
function actHTML(r, t) {
  const a = r.act, raw = r.raw || {};
  const model = t ? t.model : raw.model, serial = a.serial || (t ? t.serial : raw.serial), unit = t ? "в/ч " + t.unit : raw.unit;
  return `<div class="act"><h4>АКТ ТЕХНІЧНОГО СТАНУ № ${r.id.replace("З-", "")}/ТС</h4><div class="c">от ${ru(iso(today))}</div>
    <table><tr><td>Зразок ОВТ</td><td>${esc(model || "—")}</td></tr><tr><td>Заводський номер</td><td>${esc(serial || "—")}</td></tr><tr><td>Військова частина</td><td>${esc(unit || "—")}</td></tr></table>
    <b>Несправності:</b><ol>${a.defects.map((d) => `<li>${esc(d)}</li>`).join("")}</ol>
    <b>Висновок:</b> <mark>${DEG[a.suggest].toLowerCase()} ремонт</mark></div>`;
}

/* --- Крок 1: ідентифікація --- */
const shortUnit = (u) => (MIL[u] ? MIL[u].name.replace(/-\S+ танкова бригада/, " ТБр").replace(/-\S+ механізована бригада/, " МБр") : "");
function identBody(r) {
  const raw = r.raw;
  if (!match(raw, r.act.serial).length) r.editing = true;
  const fields = r.editing ? `<div class="fields">
      <div><ui5-label for="f-model">Модель</ui5-label><ui5-input id="f-model" data-raw="model" value="${esc(raw.model)}" placeholder="Т-64БВ" show-suggestions no-typeahead>${[...new Set(REG.map((t) => t.model))].map((m) => `<ui5-suggestion-item text="${m}"></ui5-suggestion-item>`).join("")}</ui5-input></div>
      <div><ui5-label for="f-serial">Серійний №</ui5-label><ui5-input id="f-serial" data-raw="serial" value="${esc(raw.serial)}" placeholder="2001-0457"></ui5-input></div>
      <div><ui5-label for="f-unit">Військова частина</ui5-label><ui5-input id="f-unit" data-raw="unit" value="${esc(raw.unit)}" placeholder="41207" show-suggestions no-typeahead>${Object.keys(MIL).map((u) => `<ui5-suggestion-item text="${u}" additional-text="${shortUnit(u)}"></ui5-suggestion-item>`).join("")}</ui5-input></div>
    </div>` : "";
  return `<div class="st-body">${reqNoteHTML(r)}${fields}<div id="cands"></div></div>`;
}
/* Порівняння «у заявці → у реєстрі» за одним полем */
function cmpStatus(kind, rawV, regV) {
  const rv = String(rawV || "").trim();
  if (!rv) return ["fix", "доповнено з реєстру"];
  if (kind === "unit") return unitCode(rv) !== regV ? ["diff", "відрізняється"] : digits(rv) === regV ? ["ok", "збігається"] : ["fix", "розпізнано за назвою"];
  if (rv === regV) return ["ok", "збігається"];
  const nr = norm(rv), ng = norm(regV);
  if (nr === ng) {
    const n = [];
    if (kind !== "model") {
      if (/[OoОо]/.test(rv)) n.push("літера «О» → цифра 0");
      if (/[Зз]/.test(rv)) n.push("літера «З» → цифра 3");
      if (/[IilІі]/.test(rv)) n.push("літера «I» → цифра 1");
    } else if (/[A-Za-z]/.test(rv)) n.push("латиниця → кирилиця");
    return ["fix", n.length ? "виправлено: " + n.join(", ") : "інший формат запису"];
  }
  if (kind === "model" && nr.length >= 2 && ng.startsWith(nr)) return ["fix", "уточнено за реєстром"];
  if (kind !== "model" && nr.length >= 3 && ng.includes(nr)) return ["fix", "доповнено за реєстром"];
  if (nr.length === ng.length && osa(nr, ng) === 1 && [...nr].sort().join("") === [...ng].sort().join("")) return ["diff", "переставлено дві цифри"];
  return ["diff", "відрізняється"];
}
function rawHL(kind, rv, regV, st) {
  rv = String(rv || "").trim(); if (!rv) return '<span class="muted">не вказано</span>';
  if (kind === "unit") {
    if (st !== "diff") return esc(rv);
    const d = digits(rv), m = lcsSet(regV, d); let o = "";
    [...d].forEach((ch, i) => { o += m.has(i) ? ch : `<mark>${ch}</mark>`; });
    return "в/ч " + o;
  }
  if (st === "fix" && kind !== "model") return [...rv].map((ch) => /[OoОоЗзIilІі]/.test(ch) ? `<mark>${esc(ch)}</mark>` : esc(ch)).join("");
  if (st === "diff") { const m = lcsSet(norm(regV), norm(rv)); let k = 0, o = ""; for (const ch of rv) { if (SEP.test(ch)) { o += esc(ch); continue; } o += m.has(k++) ? esc(ch) : `<mark>${esc(ch)}</mark>`; } return o; }
  return esc(rv);
}
const ST_ICON = { ok: "accept", fix: "hint", diff: "alert" };
function cmpTable(r, t) {
  const rows = [["model", "Модель", r.raw.model, t.model, t.model], ["serial", "Серійний №", r.raw.serial, t.serial, t.serial], ["unit", "Військова частина", r.raw.unit, t.unit, `в/ч ${t.unit} · ${shortUnit(t.unit)}`]];
  if (r.act.serial) rows.push(["act", "№ в акті", r.act.serial, t.serial, t.serial]);
  return `<table class="cmp"><thead><tr><th></th><th>У заявці</th><th>У реєстрі</th><th></th></tr></thead><tbody>${rows.map(([k, l, rv, regV, regShow]) => {
    const [st, note] = cmpStatus(k === "act" ? "serial" : k, rv, regV);
    return `<tr><td class="k">${l}</td><td class="raw">${rawHL(k === "act" ? "serial" : k, rv, regV, st)}</td><td class="v">${esc(regShow)}</td><td><span class="st ${st}"><ui5-icon name="${ST_ICON[st]}"></ui5-icon>${note}</span></td></tr>`;
  }).join("")}</tbody></table>`;
}
function altSummary(r, c) {
  const t = c.t, out = [];
  const s = cmpStatus("serial", r.raw.serial, t.serial)[0], u = cmpStatus("unit", r.raw.unit, t.unit)[0], m = cmpStatus("model", r.raw.model, t.model)[0];
  if (s === "diff") out.push(["інший номер", "diff"]); else if (s === "fix") out.push(["номер з помилкою", "fix"]);
  if (u === "diff") out.push(["інша частина", "diff"]);
  if (m === "diff") out.push(["інша модель", "diff"]);
  if (c.actMatch) out.push(["номер як в акті", "ok"]);
  if (dupFor(t.id, r.id)) out.push(["уже є наряд", "diff"]);
  if (!out.length) out.push(["усе збігається", "ok"]);
  return out.map(([x, k]) => `<span class="st ${k}">${x}</span>`).join('<span class="muted"> · </span>');
}
function altRow(r, c) {
  return `<button class="alt ${r.cand === c.t.id ? "on" : ""}" data-act="pick" data-id="${c.t.id}"><span class="radio"></span>
    <span class="alt-b"><span><span class="serial">${esc(c.t.serial)}</span> <span class="muted">${c.t.model} · в/ч ${c.t.unit} · ${shortUnit(c.t.unit)}</span></span><span class="alt-d">${altSummary(r, c)}</span></span></button>`;
}
function renderCands(r) {
  const box = $("#cands"); if (!box) return;
  const list = match(r.raw, r.act.serial); const ids = list.map((c) => c.t.id);
  const margin = list.length ? list[0].score - (list[1] ? list[1].score : 0) : 0;
  const unitBad = list.length && unitCode(r.raw.unit) && list[0].us < 1;
  const autoOk = list.length && list[0].score >= 0.95 && margin >= 0.05 && !unitBad;
  if (!list.length) r.cand = null;
  else if (!r.candManual || !ids.includes(r.cand)) { r.cand = autoOk ? list[0].t.id : null; r.candManual = false; }
  const raw = r.raw, unit = MIL[unitCode(raw.unit)];
  const editLink = r.editing ? "" : `<div class="links"><ui5-link data-act="edit-raw">Виправити дані заявки</ui5-link></div>`;
  if (!list.length) {
    box.innerHTML = !raw.model && !raw.serial && !raw.unit
      ? `<ui5-illustrated-message name="BeforeSearch" design="Dot" title-text="Введіть дані із заявки" subtitle-text="Танк із реєстру знайдеться одразу, навіть з помилками"></ui5-illustrated-message>`
      : `<div class="match-card"><div class="match-h warn"><ui5-icon name="alert"></ui5-icon>Танк із такими даними в реєстрі не знайдено</div><div class="match-p">Перевірте номер у полях вище або уточніть у частині${unit ? ` (${shortUnit(unitCode(raw.unit))}, ${unit.phone})` : ""}. Поки чекаєте відповіді — натисніть «Відкласти», черга не зупиниться.</div></div>`;
  } else if (r.cand) {
    const c = list.find((x) => x.t.id === r.cand), alts = list.filter((x) => x !== c);
    const dup = dupFor(c.t.id, r.id);
    box.innerHTML = `<div class="match-card">
      <div class="match-h ${r.candManual ? "pick" : "ok"}"><ui5-icon name="accept"></ui5-icon>${r.candManual ? "Обрано танк із реєстру" : "Танк знайдено в реєстрі"}<span class="match-sub">перевірте й підтвердьте</span></div>
      ${cmpTable(r, c.t)}
      ${dup ? `<div class="match-dup"><ui5-icon name="alert"></ui5-icon>На цей танк уже є ${esc(dup)}</div>` : ""}
      ${alts.length ? `<button class="alt-toggle" data-act="toggle-alt">${r.showAlt ? "▴ Сховати" : "▾ Не той? Інші схожі"} (${alts.length})</button>${r.showAlt ? alts.map((x) => altRow(r, x)).join("") : ""}` : ""}
    </div>${editLink}`;
  } else {
    box.innerHTML = `<div class="match-card"><div class="match-h warn"><ui5-icon name="alert"></ui5-icon>${unitBad ? "Номер знайдено, але частина в заявці інша — оберіть вручну" : "Точного збігу немає — оберіть відповідний танк"}</div>
      ${list.map((c) => altRow(r, c)).join("")}</div>${editLink}`;
  }
  wire(box); updConfirm(r);
}
function updConfirm(r) { const f = $("#dpFooter"); if (!f || !(r.status === "needs_id" || r.status === "waiting")) return; f.innerHTML = identFooter(r); wire(f); }
function identFooter(r) {
  const u = unitCode(r.raw.unit), unit = MIL[u];
  return `${unit && !r.cand ? `<span slot="startContent" class="meta"><ui5-icon name="phone"></ui5-icon>Уточнити в ${shortUnit(u)}: ${unit.phone}</span>` : ""}
    ${r.status === "waiting" ? "" : `<ui5-button slot="endContent" design="${r.cand ? "Transparent" : "Default"}" data-act="wait" tooltip="Заявка перейде на вкладку «Чекають» і не блокуватиме чергу">Відкласти</ui5-button>`}
    <ui5-button slot="endContent" design="Emphasized" id="confirmBtn" data-act="confirm" ${r.cand ? "" : "disabled"} tooltip="Enter">${r.cand ? "Так, це він — підтвердити" : "Оберіть танк"}</ui5-button>`;
}

/* --- Крок 2: рішення --- */
function ensureDraft(r) {
  if (r.draft) return r.draft;
  const t = tankById(r.tankId); const deg = r.act.suggest; const id = recommend(t.model, deg);
  r.draft = { degree: deg, ruId: id, date: id ? iso(addDays(days(ruById(id), deg))) : "", touched: false, ruTouched: false };
  return r.draft;
}
function decisionBody(r) {
  const t = tankById(r.tankId); const d = ensureDraft(r); const rec = recommend(t.model, d.degree);
  const capable = S.rus.filter((u) => !capab(u, t.model, d.degree));
  const strip = !capable.length ? `<ui5-message-strip design="Critical" hide-close-button class="strip">Корпус не виконує такий ремонт ${t.model} — переадресуйте заявку</ui5-message-strip>`
    : !rec ? `<ui5-message-strip design="Critical" hide-close-button class="strip">Придатні підрозділи заповнені — призначте з перевантаженням або переадресуйте</ui5-message-strip>` : "";
  const rus = S.rus.map((u, i) => {
    const why = capab(u, t.model, d.degree); const lv = loadLevel(u.active); const dd = days(u, d.degree); const on = d.ruId === u.id;
    const dots = Array.from({ length: Math.max(u.active, 1) }, (_, k) => `<i class="${k < u.active ? lv.cls : "empty"}"></i>`).join("");
    return `<button class="ruc ${on ? "on" : ""} ${why ? "off" : ""}" data-act="ru" data-id="${u.id}" ${why ? 'aria-disabled="true"' : ""} aria-pressed="${on}" title="Клавіша ${i + 1}">
      <span class="c-name"><span class="radio"></span><span class="nm"><span class="ruc-name">${u.name}</span>${u.id === rec ? tag("Рекомендовано", "Positive") : ""}</span></span>
      <span class="c-can" data-k="Може виконати">${why ? `<span class="st diff"><ui5-icon name="decline"></ui5-icon>${esc(why.replace("Не обслуговує", "не обслуговує").replace(/^(\S+) ремонт не виконує$/, (m, d) => d.toLowerCase() + " не робить"))}</span>` : '<span class="st ok"><ui5-icon name="accept"></ui5-icon>да</span>'}</span>
      <span class="c-load" data-k="Завантаження"><span class="dots" aria-hidden="true">${dots}</span><span><b>${u.active}</b> ${plural(u.active, "наряд", "наряди", "нарядів")} · <span class="lv ${lv.cls}">${lv.word}</span></span></span>
      <span class="c-eta" data-k="Закінчить">${why ? '<span class="muted">—</span>' : `<span><b>~${ru(iso(addDays(dd))).slice(0, 5)}</b> <span class="muted">(${dd} дн.)</span></span>`}</span>
    </button>`;
  }).join("");
  const dup = dupFor(r.tankId, r.id);
  const dupStrip = dup ? `<div class="dup"><ui5-icon name="alert"></ui5-icon><div class="dup-t">На цей танк уже є <b>${esc(dup)}</b>. Можливо, заявка повторна.</div><ui5-button design="Transparent" data-act="dup">Закрити як дублікат</ui5-button></div>` : "";
  return `<div class="st-body">${dupStrip}${actSumHTML(r)}${strip}
    <div class="field"><ui5-label>Ступінь ремонту</ui5-label>
      <ui5-segmented-button id="degSeg" accessible-name="Ступінь ремонту">${Object.keys(DEG).map((k) => `<ui5-segmented-button-item data-id="${k}" ${d.degree === k ? "selected" : ""} ${r.act.suggest === k ? 'tooltip="Рекомендовано актом"' : ""}>${DEG[k]}${r.act.suggest === k ? " ✦" : ""}</ui5-segmented-button-item>`).join("")}</ui5-segmented-button>
      <span class="muted small">✦ за висновком акта</span></div>
    <div class="field"><ui5-label>Ремонтний підрозділ</ui5-label>
      <div class="rucs" role="group" aria-label="Ремонтний підрозділ"><div class="ruh" aria-hidden="true"><span>Підрозділ</span><span>Може виконати</span><span>Завантаження</span><span>Закінчить</span></div>${rus}</div>
      <div class="ruc-legend muted small">Завантаження — кількість нарядів у роботі: до 4 — низьке, 5–8 — середнє, 9 і більше — високе</div></div>
    <div class="field"><ui5-label for="f-date">Закінчення ремонту</ui5-label>
      <div class="row"><ui5-date-picker id="f-date" value-format="yyyy-MM-dd" display-format="dd.MM.yyyy" value="${d.date}" min-date="${iso(today)}"></ui5-date-picker>
      ${d.touched ? '<span class="muted small">змінено вручну</span>' : '<span class="muted small">розраховано</span><ui5-icon name="hint" class="info" tooltip="Строк за умовними нормами (легкий 5, середній 14, важкий 30 дн.) з поправкою на завантаження. Нормативи уточнити в замовника."></ui5-icon>'}</div></div>
  </div>`;
}
function decisionFooter(r) {
  const t = tankById(r.tankId); const d = r.draft; const noGood = !recommend(t.model, d.degree); const ok = d.ruId && d.date;
  return `<ui5-button slot="startContent" design="${noGood ? "Emphasized" : "Transparent"}" icon="paper-plane" data-act="redir-open">Переадресувати</ui5-button>
    <ui5-split-button slot="endContent" id="orderBtn" design="${noGood ? "Default" : "Emphasized"}" ${ok ? "" : "disabled"} tooltip="Ctrl+Enter — у пакет · Ctrl+Shift+Enter — підписати одразу">Оформити наряд</ui5-split-button>
    <ui5-menu id="orderMenu" opener="orderBtn"><ui5-menu-item text="Оформити й підписати одразу" icon="signature" data-id="now"></ui5-menu-item></ui5-menu>`;
}
function decisionSummary(r) {
  if (r.status === "redirected") return `Переадресовано: <b>${esc(r.redirect.to)}</b>`;
  if (r.status === "duplicate") return `Закрито як дублікат`;
  const o = r.order; return `<b>${ruById(o.ruId).short}</b> · ${DEG[o.degree].toLowerCase()} · до ${ru(o.date)}`;
}

/* --- Підсумок: життєвий цикл наряду --- */
function resultCard(r) {
  if (r.status === "duplicate") return `<section class="result"><div class="r-top"><span class="r-title">Заявку закрито як дублікат</span></div><div class="muted">Уже є: ${esc(r.dupOf)}. Новий наряд не створювався.</div></section>`;
  if (r.status === "redirected") return `<section class="result"><ui5-icon name="paper-plane" class="r-ic"></ui5-icon><div><div class="r-title">Заявку передано: ${esc(r.redirect.to)}</div><div class="muted">${esc(r.redirect.why)}</div></div></section>`;
  const o = r.order; const signed = r.status === "unblocked", printed = signed || o.printed;
  const st = (t, on, cur) => `<div class="lc ${on ? "on" : ""} ${cur ? "cur" : ""}"><span class="dot"></span>${t}</div>`;
  return `<section class="result"><div class="r-top"><span class="r-title">Наряд ${o.no}</span>${tag(signed ? "розблоковано" : printed ? "у командира на підписі" : "треба надрукувати", signed ? "Positive" : "Information")}</div>
    <div class="lifecycle">${st("Оформлено", true)}${st("Надрукований", printed, !printed)}${st("Підписаний командиром", signed, printed && !signed)}${st("Розблоковано", signed)}</div></section>`;
}
function doneFooter(r) {
  if (r.status !== "ordered") return "";
  return `<ui5-button slot="startContent" design="Transparent" icon="document-text" data-act="preview-open" data-id="${r.id}">Перегляд наряду</ui5-button>
    ${r.order.printed
      ? `<ui5-button slot="endContent" design="Emphasized" icon="accept" data-act="unblock-one" data-id="${r.id}">Командир підписав — розблокувати</ui5-button>`
      : `<ui5-button slot="endContent" icon="print" data-act="sign-one" data-id="${r.id}">Надрукувати лише цей</ui5-button>
    <ui5-button slot="endContent" design="Emphasized" icon="signature" data-act="batch">Усі наряди на підпис (${S.batch.length})</ui5-button>`}`;
}

/* --- Предпросмотр наряди --- */
function orderDoc(r) {
  const t = tankById(r.tankId), o = r.order, u = ruById(o.ruId);
  return `<div class="act order-doc"><h4>НАРЯД НА РЕМОНТ № ${o.no}</h4><div class="c">от ${ru(iso(today))} · за заявкою ${r.id}</div>
    <table><tr><td>Зразок ОВТ</td><td>${t.model}</td></tr><tr><td>Заводський номер</td><td>${t.serial}</td></tr><tr><td>Військова частина</td><td>в/ч ${t.unit}, ${MIL[t.unit].name}</td></tr>
    <tr><td>Виконавець</td><td>${u.name}</td></tr><tr><td>Ступінь ремонту</td><td>${DEG[o.degree]}</td></tr><tr><td>Строк закінчення</td><td>${ru(o.date)}</td></tr>
    <tr><td>Підстава</td><td>Акт технічного стану № ${r.id.replace("З-", "")}/ТС</td></tr></table>
    <div class="sign">Офіцер відділу ремонту ____________ &nbsp;&nbsp;&nbsp; Командир корпусу ____________</div></div>`;
}
/* --- Пакет на підпис --- */
function batchRow(r, action) {
  const t = tankById(r.tankId), o = r.order;
  return `<div class="brow"><span class="b-no">${o.no}</span><span class="b-t">${t.model} · ${t.serial}</span><span class="b-m muted">${ruById(o.ruId).short} · ${DEG[o.degree].toLowerCase()} · до ${ru(o.date).slice(0, 5)}</span>
    <span class="b-a"><ui5-button design="Transparent" data-act="preview" data-id="${r.id}">${S.preview === r.id ? "Сховати" : "Перегляд"}</ui5-button>${action}</span></div>${S.preview === r.id ? orderDoc(r) : ""}`;
}
function renderBatch() {
  const dlg = $("#batchDlg"); if (!dlg.open) return;
  const items = S.batch.map((id) => S.reqs.find((r) => r.id === id));
  const toPrint = items.filter((r) => !r.order.printed), atCmd = items.filter((r) => r.order.printed);
  const st = (n, t, state) => `<div class="bstep ${state}"><span class="bn">${state === "done" ? "✓" : n}</span>${t}</div>`;
  const cur1 = toPrint.length ? "cur" : "done", cur2 = !toPrint.length && atCmd.length ? "cur" : "";
  $("#batchBody").innerHTML = !items.length
    ? `<ui5-illustrated-message name="NoEntries" design="Dialog" title-text="Нарядів на підпис немає" subtitle-text="Оформленоі наряди з'являться тут"></ui5-illustrated-message>`
    : `<div class="bsteps">${st(1, "Надрукувати", cur1)}<span class="barr">→</span>${st(2, "Віднести командиру", cur2)}<span class="barr">→</span>${st(3, "Позначити підписані", atCmd.length && !toPrint.length ? "cur" : "")}</div>
      ${toPrint.length ? `<section class="bsec"><div class="bsec-h"><span><b>Треба надрукувати</b> <span class="muted">· ${toPrint.length}</span></span><ui5-button design="Emphasized" icon="print" data-act="print">Надрукувати ${toPrint.length > 1 ? `все ${toPrint.length} одним документом` : ""}</ui5-button></div>
        ${toPrint.map((r) => batchRow(r, "")).join("")}</section>` : ""}
      ${atCmd.length ? `<section class="bsec"><div class="bsec-h"><span><b>У командира на підписі</b> <span class="muted">· ${atCmd.length}</span></span>${atCmd.length > 1 ? `<ui5-button design="${toPrint.length ? "Default" : "Emphasized"}" icon="accept" data-act="unblock-all">Усі підписані — розблокувати</ui5-button>` : ""}</div>
        <div class="bhint muted small">Коли наряд завернеться з підписом — позначте його, і ремонтний підрозділ отримає його в роботу.</div>
        ${atCmd.map((r) => batchRow(r, `<ui5-button design="${atCmd.length > 1 ? "Default" : "Emphasized"}" icon="accept" data-act="unblock-one" data-id="${r.id}">Підписано</ui5-button>`)).join("")}</section>` : ""}`;
  $("#batchFoot").innerHTML = `<ui5-button slot="endContent" design="Transparent" data-act="close-batch">Закрити</ui5-button>`;
  wire($("#batchDlg"));
}

/* ===================== Дії ===================== */
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.open = false; requestAnimationFrame(() => { t.open = true; }); }
function remember(label) { flushTimer(); undoSnap = structuredClone(S); undoLabel = label; }
function undo() { if (!undoSnap) return; S = undoSnap; undoSnap = null; const l = undoLabel; undoLabel = ""; openedAt = Date.now(); render(); toast("Скасовано: " + l); }
function select(id) { flushTimer(); S.selected = id; const r = cur(); if (r) r._focused = false; render(); $("#dpContent").scrollTop = 0; }
function next() {
  const idx = S.reqs.findIndex((r) => r.id === S.selected); const f = FILTERS.find((x) => x[0] === S.filter)[2];
  const ok = (r) => (r.status === "needs_id" || r.status === "ready") && (f(r) || ["done", "waiting", "sign"].includes(S.filter));
  const n = [...S.reqs.slice(idx + 1), ...S.reqs.slice(0, idx)].find(ok);
  S.selected = n ? n.id : null; if (n) n._focused = false; openedAt = Date.now();
}
function confirmIdent() { const r = cur(); if (!r || !r.cand) return; remember("підтвердження танка " + r.id); r.tankId = r.cand; r.status = "ready"; r.how = "id"; const t = tankById(r.tankId); render(); toast(`Танк підтверджено: ${t.model} № ${t.serial}`); }
function markWait() { const r = cur(); remember("відкладення " + r.id); r.status = "waiting"; r.waitAt = Date.now(); next(); render(); toast(`${r.id} відкладено до уточнення`); }
function issueOrder(now) {
  const r = cur(); if (!r || r.status !== "ready") return; const d = r.draft; if (!d || !d.ruId || !d.date) return;
  remember("наряд за " + r.id); S.times.push(r.spent); const u = ruById(d.ruId); u.active++;
  r.order = { no: "Н-0" + S.seq++, ruId: d.ruId, degree: d.degree, date: d.date }; r.status = "ordered"; S.batch.push(r.id); S.printed = false;
  next(); document.addEventListener("visibilitychange", () => { if (document.hidden) flushTimer(); else openedAt = Date.now(); });
render();
  if (now) signNow(r.id); else toast(`Наряд ${r.order.no} → ${u.short}, до ${ru(d.date)}. У пакеті на підпис.`);
}
function signNow(id) {
  const r = S.reqs.find((x) => x.id === id); r.order.printed = true;
  openBatch(); render(); toast(`Наряд ${r.order.no} надруковано — віднесіть командиру`);
}
function unblock(ids) {
  remember("розблокування нарядів");
  ids.forEach((x) => { S.reqs.find((r) => r.id === x).status = "unblocked"; });
  S.batch = S.batch.filter((x) => !ids.includes(x)); S.preview = null;
  if (!S.batch.length) $("#batchDlg").open = false;
  render(); toast(ids.length > 1 ? `Розблоковано нарядів: ${ids.length}` : `Наряд розблоковано й передано в роботу`);
}
function openRedirect() {
  const r = cur(); const t = tankById(r.tankId); const d = r.draft; const capable = S.rus.filter((u) => !capab(u, t.model, d.degree));
  const def = capable.length ? 1 : 0;
  $("#redirBody").innerHTML = `<div class="sec"><ui5-label for="f-to" show-colon>Новий виконавець</ui5-label><ui5-select id="f-to">${REDIRECT_TO.map((x) => `<ui5-option value="${x}">${x}</ui5-option>`).join("")}</ui5-select></div>
    <ui5-label show-colon>Причина</ui5-label><div class="radios">${REDIRECT_WHY.map((x, i) => `<ui5-radio-button name="why" text="${x}" value="${x}" ${i === def ? "checked" : ""}></ui5-radio-button>`).join("")}</div>`;
  $("#redirDlg").open = true;
}
function redirect() {
  const r = cur(); const to = $("#f-to").value; const rb = [...document.querySelectorAll('ui5-radio-button[name="why"]')].find((x) => x.checked); const why = rb ? rb.text : "";
  $("#redirDlg").open = false; remember("переадресація " + r.id); S.times.push(r.spent); r.redirect = { to, why }; r.status = "redirected"; next(); render(); toast(`${r.id} переадресовано: ${to}`);
}
function setDeg(k) {
  const r = cur(); const d = ensureDraft(r); const t = tankById(r.tankId); d.degree = k;
  const u = ruById(d.ruId); if (!u || capab(u, t.model, k) || !d.ruTouched) d.ruId = recommend(t.model, k);
  if (!d.touched) { const u2 = ruById(d.ruId); d.date = u2 ? iso(addDays(days(u2, k))) : ""; }
  renderPage();
}
function setRu(id) {
  const r = cur(); const d = ensureDraft(r); const t = tankById(r.tankId); const u = ruById(id); if (!u || capab(u, t.model, d.degree)) return;
  d.ruId = id; d.ruTouched = true; if (!d.touched) d.date = iso(addDays(days(u, d.degree))); renderPage();
}
function newExternal() {
  flushTimer(); const id = "З-" + S.newSeq++;
  S.reqs.push({ id, source: "phone", time: nowHM(), raw: { model: "", serial: "", unit: "" }, note: "", isNew: true, act: { suggest: "medium", defects: ["Зі слів частини — акт надійде окремо"] }, status: "needs_id", tankId: null, spent: 0, draft: null, order: null, cand: null });
  S.filter = "active"; S.selected = id; render();
}
function openBatch() { $("#batchDlg").open = true; renderBatch(); }

/* Прив'язка подій до щойно відмальованих елементів */
function wire(root = document) {
  root.querySelectorAll("[data-act]").forEach((el) => {
    if (el._wired) return; el._wired = true;
    el.addEventListener("click", (e) => {
      const act = el.dataset.act;
      if (act === "confirm") confirmIdent();
      else if (act === "wait") markWait();
      else if (act === "order") issueOrder(false);
      else if (act === "order-now") issueOrder(true);
      else if (act === "sign-one") signNow(el.dataset.id);
      else if (act === "ru") { if (el.getAttribute("aria-disabled") !== "true") setRu(el.dataset.id); }
      else if (act === "pick") { const r = cur(); r.cand = el.dataset.id; r.candManual = true; r.showAlt = false; renderCands(r); }
      else if (act === "toggle-alt") { const r = cur(); r.showAlt = !r.showAlt; renderCands(r); }
      else if (act === "edit-raw") { const r = cur(); r.editing = true; r._focused = false; renderPage(); }
      else if (act === "preview") { S.preview = S.preview === el.dataset.id ? null : el.dataset.id; renderBatch(); }
      else if (act === "preview-open") { S.preview = el.dataset.id; openBatch(); }
      else if (act === "dup") { const r = cur(); remember("закриття дубліката " + r.id); r.dupOf = dupFor(r.tankId, r.id); S.times.push(r.spent); r.status = "duplicate"; next(); render(); toast(`${r.id} закрито як дублікат`); }
      else if (act === "edit-tank") { const r = cur(); remember("зміна танка " + r.id); r.cand = r.tankId; r.candManual = true; r.tankId = null; r.draft = null; r.status = "needs_id"; r._focused = false; render(); }
      else if (act === "redir-open") openRedirect();
      else if (act === "batch") openBatch();
      else if (act === "print") { const n = S.batch.map((id) => S.reqs.find((r) => r.id === id)).filter((r) => !r.order.printed); n.forEach((r) => { r.order.printed = true; }); S.preview = null; render(); toast(n.length > 1 ? `Надруковано одним документом: ${n.length} нарядів. Віднесіть командиру` : "Наряд надруковано. Віднесіть командиру"); }
      else if (act === "unblock-one") unblock([el.dataset.id]);
      else if (act === "unblock-all") unblock(S.batch.filter((x) => S.reqs.find((r) => r.id === x).order.printed));
      else if (act === "close-batch") $("#batchDlg").open = false;
      else if (act === "act-open") { const r = cur(); $("#actBody").innerHTML = actHTML(r, r.tankId ? tankById(r.tankId) : null); $("#actDlg").open = true; }
      else if (act === "pdf") { e.preventDefault(); toast("У прототипі акт показано копією-прев'ю на цій сторінці"); }
    });
  });
  const ob = root.querySelector("#orderBtn");
  if (ob && !ob._wired) { ob._wired = true; ob.addEventListener("click", () => issueOrder(false)); ob.addEventListener("arrow-click", () => { const m = $("#orderMenu"); m.opener = ob; m.open = true; }); }
  const om = root.querySelector("#orderMenu");
  if (om && !om._wired) { om._wired = true; om.addEventListener("item-click", () => issueOrder(true)); }
  const ub = $("#undoBtn"); if (ub && !ub._wired) { ub._wired = true; ub.addEventListener("click", undo); }
  root.querySelectorAll("ui5-input[data-raw]").forEach((el) => { const h = () => { const r = cur(); if (!r || !r.raw || r.raw[el.dataset.raw] === el.value) return; r.raw[el.dataset.raw] = el.value; renderCands(r); renderQueue(); }; el.addEventListener("input", h); el.addEventListener("change", h); el.addEventListener("selection-change", () => setTimeout(h, 0)); });
  const note = root.querySelector("#f-note"); if (note) note.addEventListener("input", () => { cur().note = note.value; });
  const srcSeg = root.querySelector("#srcSeg"); if (srcSeg) srcSeg.addEventListener("selection-change", (e) => { const r = cur(); r.source = e.detail.selectedItems[0].dataset.id; renderStart(); });
  const deg = root.querySelector("#degSeg"); if (deg) deg.addEventListener("selection-change", (e) => setDeg(e.detail.selectedItems[0].dataset.id));
  const rl = root.querySelector("#ruList"); if (rl) rl.addEventListener("selection-change", (e) => { const it = e.detail.selectedItems[0]; if (it) setRu(it.dataset.id); });
  const dp = root.querySelector("#f-date"); if (dp) dp.addEventListener("change", (e) => { const r = cur(); r.draft.date = dp.value; r.draft.touched = true; ["#orderBtn", "#orderNowBtn"].forEach((s) => { const b = $(s); if (b) b.disabled = !(r.draft.ruId && dp.value); }); });
  root.querySelectorAll("ui5-checkbox[data-chk]").forEach((el) => el.addEventListener("change", () => { S.checked[el.dataset.chk] = el.checked; renderBatch(); }));
}

/* Статичні елементи */
$("#qlist").addEventListener("item-click", (e) => select(e.detail.item.dataset.id));
$("#tabs").addEventListener("tab-select", (e) => { S.filter = e.detail.tab.dataset.id; renderStart(); });
$("#batchItem").addEventListener("click", openBatch);
$("#newBtn").addEventListener("click", newExternal);
$("#qsearch").addEventListener("input", (e) => { S.q = e.target.value; renderQueue(); });
$("#actClose").addEventListener("click", () => { $("#actDlg").open = false; });
$("#redirOk").addEventListener("click", redirect);
$("#redirCancel").addEventListener("click", () => { $("#redirDlg").open = false; });

let sugOpen = false;
document.addEventListener("keydown", (e) => { sugOpen = e.composedPath().some((el) => el.tagName === "UI5-INPUT" && el.open); }, true);
document.addEventListener("keydown", (e) => {
  if ($("#batchDlg").open || $("#redirDlg").open || $("#actDlg").open) return;
  const r = cur(); const path = e.composedPath();
  const tagOf = (el) => (el && el.tagName) || "";
  const inField = path.some((el) => /^(INPUT|TEXTAREA|UI5-INPUT|UI5-TEXTAREA|UI5-DATE-PICKER|UI5-SELECT)$/.test(tagOf(el)));
  const inList = path.some((el) => /^(UI5-LIST|UI5-TABCONTAINER|UI5-SEGMENTED-BUTTON)$/.test(tagOf(el)));
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { if (r && r.status === "ready") { e.preventDefault(); issueOrder(e.shiftKey); } return; }
  if (e.key === "Enter" && r && (r.status === "needs_id" || r.status === "waiting") && !path.some((el) => tagOf(el) === "UI5-TEXTAREA" || el.id === "qlist")) {
    if (r.cand && !sugOpen) { e.preventDefault(); setTimeout(confirmIdent, 0); } return;
  }
  if (inField) return;
  if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !inList) {
    const f = FILTERS.find((x) => x[0] === S.filter)[2]; const list = S.reqs.filter(f); if (!list.length) return;
    let i = list.findIndex((x) => x.id === S.selected); i = e.key === "ArrowDown" ? Math.min(list.length - 1, i + 1) : Math.max(0, i - 1);
    e.preventDefault(); select(list[i].id); return;
  }
  if (r && r.status === "ready" && ["1", "2", "3"].includes(e.key)) { const u = S.rus[+e.key - 1]; if (u) setRu(u.id); }
});
setInterval(() => { const el = $("#timer"); const r = cur(); if (el && r && isActive(r)) el.textContent = fmtMs(r.spent + Date.now() - openedAt); }, 1000);
render();
