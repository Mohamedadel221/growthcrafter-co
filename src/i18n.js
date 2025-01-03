import { createI18n } from "vue-i18n";
const messages = {
  en: {
    partenerTitle: "our partener",
    photographyTitle: "Photography",
    photographyContent:
      "From product photography to lifestyle shots, our team ensures that every image reflects your brand's identity",
    socialMediaTitle: "social media visual ",
    socialMediaContent:
      "Social media visuals that works to improve, display the brand image and deliver a clear and simple message to the customer.",
    videoTitle: "Commercial & advertising videography",
    growthInsights: "Growth insights",
    growthTitleOne: "Market Research & Analysis.",
    growthTitleTwo: "Consumer Insights",
    growthContentOne:
      "We conduct in-depth market research to understand industry trends,customer behaviors, and competitive dynamics.",
    growthContentTwo:
      "Understanding your customers is crucial to your business success. We analyze consumer data to gain insights into",
    viewGrowth: "view growth",
    whyChosese: "why should you choose ",
    growthCrafter: "growth Crafterco",
    whyChoseseContentOne:
      "hesitate to reach out for a free consultation or to answer any inquiries. Whether you’re looking to grow your business or enhance your digital presence, our team of experts is ready",
    whyChoseseContentTwo:
      "We are here to support you and provide the best solutions toachieve your goals. Don’t to stand by your side every step ofthe way.",
    contactWhyChoes: "contact us",
  },
  ar: {
    // navbar //
    navbarHome: "الرئسية",
    navbarOurWork: "اعمالنا",
    navbarContact: "التواصل",
    navbarPrice: "الاسعار",
    // navbar //
    partenerTitle: "عن شريكنا",
    photographyTitle: "التصوير الفوتوغرافي",
    photographyContent:
      "من تصوير المنتجات إلى اللقطات الحياتية، يضمن فريقنا أن تعكس كل صورة هوية علامتك التجارية",
    socialMediaTitle: "المرئيات الخاصة بوسائل التواصل الاجتماعي",
    socialMediaContent:
      "مرئيات وسائل التواصل الاجتماعي التي تعمل على تحسين وعرض صورة العلامة التجارية وتوصيل رسالة واضحة وبسيطة للعميل.",
    videoTitle: "تصوير الفيديو التجاري والإعلاني",
    growthInsights: "رؤى جروس كرفتار",
    growthTitleOne: "أبحاث السوق والتحليل.",
    growthTitleTwo: "رؤى المستهلك",
    growthContentOne:
      "نقوم بإجراء أبحاث سوقية متعمقة لفهم اتجاهات الصناعة وسلوكيات العملاء والديناميكيات التنافسية.",
    growthContentTwo:
      "إن فهم عملائك أمر بالغ الأهمية لنجاح عملك. نحن نحلل بيانات المستهلك للحصول على نظرة ثاقبة",
    viewGrowth: "مشاهدة التحليلات",
    whyChosese: "ليه لازم تختار ",
    growthCrafter: "جروس كرافتر كو",
    whyChoseseContentOne:
      "لا تتردد في التواصل للحصول على استشارة مجانية أو للإجابة على أي استفسارات. سواء كنت تتطلع إلى تنمية عملك أو تعزيز وجودك الرقمي، فإن فريقنا من الخبراء جاهز للمساعدة.",
    whyChoseseContentTwo:
      "نحن هنا لدعمك وتوفير أفضل الحلول لتحقيق أهدافك. نحن معك في كل خطوة على الطريق.",
    contactWhyChoes: "للتواصل",
    // footer//

    // footer //
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
