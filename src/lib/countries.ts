export type CountryId =
  | "sa"
  | "eg"
  | "ae"
  | "jo"
  | "kw"
  | "bh"
  | "qa"
  | "om"
  | "ye"
  | "iq"
  | "sy"
  | "lb"
  | "ps"
  | "ly"
  | "tn"
  | "dz"
  | "ma"
  | "mr"
  | "sd"
  | "so"
  | "dj"
  | "km";

export type Helpline = {
  label: string;
  value: string;
  note?: string;
};

export type Country = {
  id: CountryId;
  name: string;
  flag: string;
  emergency: Helpline[];
  support: Helpline[];
  cyberNote: string;
};

/**
 * أرقام الطوارئ من مصادر عامة شائعة (ويكيبيديا / وزارات داخلية / أدلة سفر).
 * قد تتغيّر — تحقق محلياً عند الإمكان. المحتوى إرشادي وليس بديلاً عن الطوارئ.
 */
export const countries: Country[] = [
  {
    id: "sa",
    name: "السعودية",
    flag: "🇸🇦",
    emergency: [
      { label: "الطوارئ الموحّد", value: "911" },
      { label: "الشرطة", value: "999" },
      { label: "الإسعاف", value: "997" },
      { label: "الدفاع المدني", value: "998" },
    ],
    support: [
      {
        label: "مركز بلاغات العنف الأسري",
        value: "1919",
        note: "دعم وحماية للعنف الأسري",
      },
    ],
    cyberNote:
      "يمكن تقديم بلاغ عبر منصة أبشر أو أقرب مركز شرطة / وحدة الجرائم المعلوماتية.",
  },
  {
    id: "eg",
    name: "مصر",
    flag: "🇪🇬",
    emergency: [
      { label: "الشرطة", value: "122" },
      { label: "الإسعاف", value: "123" },
      { label: "المطافئ", value: "180" },
      { label: "طوارئ من الجوال", value: "112", note: "يعمل على كثير من الشبكات" },
    ],
    support: [
      { label: "المجلس القومي للمرأة", value: "15115", note: "خط نجدة المرأة" },
      { label: "خط نجدة الطفل", value: "16000" },
    ],
    cyberNote:
      "يمكن التوجه لوحدة مكافحة جرائم الحاسبات وشبكات المعلومات أو أقرب قسم شرطة.",
  },
  {
    id: "ae",
    name: "الإمارات",
    flag: "🇦🇪",
    emergency: [
      { label: "الشرطة", value: "999" },
      { label: "الإسعاف", value: "998" },
      { label: "الدفاع المدني", value: "997" },
    ],
    support: [
      {
        label: "خط الدعم الأسري",
        value: "8007283",
        note: "خدمة مجتمعية للدعم الأسري",
      },
      { label: "خط حماية الطفل", value: "8001111" },
    ],
    cyberNote:
      "يمكن الإبلاغ عبر شرطة الإمارات الإلكترونية أو مراكز الشرطة المحلية.",
  },
  {
    id: "jo",
    name: "الأردن",
    flag: "🇯🇴",
    emergency: [
      { label: "الطوارئ / الشرطة", value: "911" },
      { label: "من الجوال", value: "112", note: "يعمل على كثير من الشبكات" },
    ],
    support: [
      {
        label: "إدارة حماية الأسرة",
        value: "911",
        note: "اطلب تحويل لحماية الأسرة",
      },
      { label: "خط نجدة الطفل", value: "111" },
    ],
    cyberNote:
      "يمكن التواصل مع وحدة الجرائم الإلكترونية في مديرية الأمن العام أو أقرب مركز أمني.",
  },
  {
    id: "kw",
    name: "الكويت",
    flag: "🇰🇼",
    emergency: [
      {
        label: "الطوارئ الموحّد",
        value: "112",
        note: "شرطة · إسعاف · إطفاء",
      },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى وزارة الداخلية أو أقرب مركز شرطة بشأن الجرائم الإلكترونية.",
  },
  {
    id: "bh",
    name: "البحرين",
    flag: "🇧🇭",
    emergency: [
      { label: "الشرطة / الطوارئ", value: "999" },
      { label: "الإسعاف", value: "998" },
      { label: "الدفاع المدني", value: "997" },
    ],
    support: [],
    cyberNote:
      "يمكن الإبلاغ عبر وزارة الداخلية أو المنصات الإلكترونية الرسمية للشرطة.",
  },
  {
    id: "qa",
    name: "قطر",
    flag: "🇶🇦",
    emergency: [
      {
        label: "الطوارئ الموحّد",
        value: "999",
        note: "شرطة · دفاع مدني · طوارئ",
      },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ عبر شرطة قطر أو الخدمات الإلكترونية التابعة لوزارة الداخلية.",
  },
  {
    id: "om",
    name: "عُمان",
    flag: "🇴🇲",
    emergency: [
      {
        label: "الطوارئ الموحّد",
        value: "9999",
        note: "شرطة · إسعاف · إطفاء",
      },
      { label: "من الجوال", value: "112", note: "يعمل على كثير من الشبكات" },
    ],
    support: [],
    cyberNote:
      "يمكن التواصل مع شرطة عُمان السلطانية أو أقرب مركز شرطة للجرائم الإلكترونية.",
  },
  {
    id: "ye",
    name: "اليمن",
    flag: "🇾🇪",
    emergency: [
      { label: "الشرطة", value: "194" },
      { label: "الإسعاف", value: "191" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب مركز أمني أو جهة محلية مختصة عند توفرها في منطقتك.",
  },
  {
    id: "iq",
    name: "العراق",
    flag: "🇮🇶",
    emergency: [
      { label: "الطوارئ", value: "112" },
      { label: "الشرطة", value: "104" },
      { label: "الإسعاف", value: "122" },
      { label: "الإطفاء", value: "115" },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى مديرية مكافحة الجريمة المنظمة / الجرائم الإلكترونية أو أقرب مركز شرطة.",
  },
  {
    id: "sy",
    name: "سوريا",
    flag: "🇸🇾",
    emergency: [
      { label: "الشرطة", value: "112" },
      { label: "الإسعاف", value: "110" },
      { label: "الإطفاء", value: "113" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب جهة أمنية أو طبية متاحة في منطقتك وفق الوضع المحلي.",
  },
  {
    id: "lb",
    name: "لبنان",
    flag: "🇱🇧",
    emergency: [
      { label: "الطوارئ / الشرطة", value: "112" },
      { label: "الصليب الأحمر (إسعاف)", value: "140" },
      { label: "الإطفاء", value: "175" },
      { label: "قوى الأمن", value: "160" },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى قوى الأمن الداخلي أو النيابة العامة المختصة بالجرائم المعلوماتية.",
  },
  {
    id: "ps",
    name: "فلسطين",
    flag: "🇵🇸",
    emergency: [
      { label: "الشرطة", value: "100" },
      { label: "الإسعاف", value: "101" },
      { label: "الإطفاء", value: "102" },
    ],
    support: [],
    cyberNote:
      "يمكن التواصل مع الشرطة الفلسطينية أو وحدة الجرائم الإلكترونية عند توفرها.",
  },
  {
    id: "ly",
    name: "ليبيا",
    flag: "🇱🇾",
    emergency: [
      { label: "الشرطة", value: "1515" },
      { label: "الإسعاف", value: "193" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب مركز شرطة أو جهة أمنية محلية متاحة في منطقتك.",
  },
  {
    id: "tn",
    name: "تونس",
    flag: "🇹🇳",
    emergency: [
      { label: "الشرطة", value: "197" },
      { label: "الإسعاف", value: "190" },
      { label: "الحماية المدنية", value: "198" },
      { label: "الحرس الوطني", value: "193" },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى الأمن الوطني أو الوحدات المختصة بالجرائم السيبرانية.",
  },
  {
    id: "dz",
    name: "الجزائر",
    flag: "🇩🇿",
    emergency: [
      { label: "الشرطة", value: "1548" },
      { label: "الإسعاف", value: "14" },
      { label: "الدرك الوطني", value: "1055" },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى الشرطة أو الدرك أو المنصات الرسمية لمكافحة الجرائم الإلكترونية.",
  },
  {
    id: "ma",
    name: "المغرب",
    flag: "🇲🇦",
    emergency: [
      { label: "الشرطة", value: "19" },
      { label: "الإسعاف", value: "15" },
      { label: "الدرك الملكي", value: "177" },
      { label: "من الجوال", value: "112", note: "يعمل على كثير من الشبكات" },
    ],
    support: [],
    cyberNote:
      "يمكن تقديم بلاغ لدى الشرطة أو الدرك أو المنصات الرسمية للجرائم الإلكترونية.",
  },
  {
    id: "mr",
    name: "موريتانيا",
    flag: "🇲🇷",
    emergency: [
      { label: "الشرطة", value: "117" },
      { label: "الإسعاف", value: "101" },
      { label: "الإطفاء", value: "118" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب مركز شرطة أو جهة أمنية محلية.",
  },
  {
    id: "sd",
    name: "السودان",
    flag: "🇸🇩",
    emergency: [{ label: "الطوارئ / الشرطة", value: "999" }],
    support: [],
    cyberNote:
      "تواصل مع أقرب جهة أمنية أو طبية متاحة وفق الوضع المحلي.",
  },
  {
    id: "so",
    name: "الصومال",
    flag: "🇸🇴",
    emergency: [
      { label: "الشرطة", value: "888" },
      { label: "الإسعاف", value: "999" },
      { label: "الإطفاء", value: "555" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب جهة أمنية أو طبية متاحة في منطقتك.",
  },
  {
    id: "dj",
    name: "جيبوتي",
    flag: "🇩🇯",
    emergency: [
      { label: "الشرطة", value: "17" },
      { label: "الإسعاف", value: "19" },
      { label: "الإطفاء", value: "18" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب مركز شرطة أو جهة أمنية محلية.",
  },
  {
    id: "km",
    name: "جزر القمر",
    flag: "🇰🇲",
    emergency: [
      { label: "الشرطة", value: "17" },
      { label: "الإطفاء", value: "18" },
    ],
    support: [],
    cyberNote:
      "تواصل مع أقرب مركز شرطة أو جهة أمنية محلية.",
  },
];

export function getCountry(id: CountryId | null | undefined) {
  return countries.find((c) => c.id === id) ?? null;
}

export function searchCountries(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return countries;
  return countries.filter(
    (c) =>
      c.name.includes(query.trim()) ||
      c.id.includes(q) ||
      c.name.replace(/[أإآ]/g, "ا").includes(query.trim().replace(/[أإآ]/g, "ا")),
  );
}
