export type CountryId = "sa" | "eg" | "ae" | "jo";

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

export const countries: Country[] = [
  {
    id: "sa",
    name: "السعودية",
    flag: "🇸🇦",
    emergency: [
      { label: "الشرطة / الطوارئ", value: "911" },
      { label: "الإسعاف", value: "997" },
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
    ],
    support: [
      {
        label: "المجلس القومي للمرأة",
        value: "15115",
        note: "خط نجدة المرأة",
      },
      {
        label: "خط نجدة الطفل",
        value: "16000",
      },
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
    ],
    support: [
      {
        label: "خط الدعم الأسري",
        value: "8007283",
        note: "خدمة مجتمعية للدعم الأسري",
      },
      {
        label: "خط حماية الطفل",
        value: "8001111",
      },
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
      { label: "الإسعاف", value: "911" },
    ],
    support: [
      {
        label: "إدارة حماية الأسرة",
        value: "911",
        note: "اطلب تحويل لحماية الأسرة",
      },
      {
        label: "خط نجدة الطفل",
        value: "111",
      },
    ],
    cyberNote:
      "يمكن التواصل مع وحدة الجرائم الإلكترونية في مديرية الأمن العام أو أقرب مركز أمني.",
  },
];

export function getCountry(id: CountryId | null | undefined) {
  return countries.find((c) => c.id === id) ?? null;
}
