/* Speaking Genie — prototype Arabic translation layer.
   Translates rendered text nodes + placeholders in place (MutationObserver), so screens stay written in English.
   Production should use real i18n keys; this file doubles as the EN→AR glossary. */
(function () {
  const PAIRS = [
    // platform additions
    ["Student progress report","تقرير تقدّم الطالب"],["Monthly progress report","تقرير التقدّم الشهري"],["Weekly progress report","تقرير التقدّم الأسبوعي"],["Overall progress","التقدّم العام"],["Learning metrics","مقاييس التعلّم"],["Areas to improve","مجالات التحسين"],["Problem","المشكلة"],["Suggestion","الاقتراح"],["What the student said","ما قاله الطالب"],["Current level","المستوى الحالي"],["Sessions in this period","الجلسات في هذه الفترة"],["Message to the student","رسالة إلى الطالب"],["Share with student","مشاركة مع الطالب"],["Regenerate","إعادة الإنشاء"],["Not completed","غير مكتملة"],["Result","النتيجة"],["Messages","الرسائل"],["Overall","الإجمالي"],["Task goal","هدف المهمة"],["Transcript","نص المحادثة"],["Areas for improvement","مجالات التحسين"],["Assign again","إسناد مرة أخرى"],["Excellent","ممتاز"],["Good progress","تقدّم جيد"],["Needs practice","يحتاج إلى تدريب"],["Needs improvement","يحتاج إلى تحسين"],["Weekly","أسبوعي"],["Monthly","شهري"],["Tasks completed","المهام المكتملة"],["vs previous","مقارنة بالسابق"],["Task execution","تنفيذ المهمة"],
    ["What students said this week","ما قاله الطلاب هذا الأسبوع"],["Copy for lesson","نسخ للدرس"],["Practice time","وقت الممارسة"],["vs last week","مقارنة بالأسبوع الماضي"],["Weakness","نقطة ضعف"],["Strength","نقطة قوة"],["Teaching tip · ","نصيحة تدريس · "],
    ["Ranking","الترتيب"],["This week","هذا الأسبوع"],["This month","هذا الشهر"],["By practice hours","حسب ساعات الممارسة"],["By sessions","حسب الجلسات"],["Share with group","مشاركة مع المجموعة"],["Sessions","الجلسات"],["Hours","الساعات"],["Practice hours","ساعات الممارسة"],["Avg / session","المتوسط لكل جلسة"],["Move","التغيّر"],["From the conversation","من المحادثة"],["Suggested next step","الخطوة التالية المقترحة"],["Review session","مراجعة الجلسة"],["Assign practice","إسناد تدريب"],["Play recording","تشغيل التسجيل"],["Overall","الإجمالي"],["Past simple errors","أخطاء الماضي البسيط"],
    ["Performance","الأداء"],["Engagement","التفاعل"],["Usage & hours","الاستخدام والساعات"],["7 days","7 أيام"],["30 days","30 يومًا"],["This term","هذا الفصل"],["Export PDF","تصدير PDF"],["Average overall score","متوسط الدرجة الإجمالية"],["Task completion rate","معدل إكمال المهام"],["Students improving","طلاب في تحسّن"],["Students at risk","طلاب معرّضون للخطر"],["Score trend by skill","اتجاه الدرجات حسب المهارة"],["Skill breakdown","تفصيل المهارات"],["Range","المدى"],["Accuracy","الدقة"],["Fluency","الطلاقة"],["Pronunciation","النطق"],["Score distribution","توزيع الدرجات"],["Level progression","التقدّم بين المستويات"],["Ready to move up","جاهز للانتقال"],["Still practising","ما زال يتدرّب"],["Group comparison","مقارنة المجموعات"],["Active","نشط"],["Avg score","متوسط الدرجة"],["Change","التغيّر"],["On track","على المسار"],["Watch","متابعة"],["Needs support","يحتاج إلى دعم"],["Reason","السبب"],["Last session","آخر جلسة"],["Score","الدرجة"],["Remind","تذكير"],["Most improved","الأكثر تحسنًا"],["AI insights","رؤى الذكاء الاصطناعي"],["Weekly active students","الطلاب النشطون أسبوعيًا"],["Sessions per student","الجلسات لكل طالب"],["Average session length","متوسط مدة الجلسة"],["Inactive 7+ days","غير نشط منذ 7 أيام أو أكثر"],["When students practise","متى يتدرّب الطلاب"],["Task funnel","مسار المهام"],["Assigned","مُسندة"],["Started","بدأت"],["Reviewed by teacher","راجعها المعلّم"],["Active students per week","الطلاب النشطون أسبوعيًا"],["Time in session","الوقت داخل الجلسة"],["Teacher review backlog","المراجعات المتأخرة للمعلّمين"],["Waiting","بانتظار"],["Oldest","الأقدم"],["Avg turnaround","متوسط وقت الاستجابة"],["Reviewed this week","تمت مراجعتها هذا الأسبوع"],["Speaking hours this month","ساعات التحدث هذا الشهر"],["Hours per active student","الساعات لكل طالب نشط"],["Over or near their tier","تجاوزوا فئتهم أو قاربوها"],["Tier utilisation","استخدام الفئات"],["Hours by group","الساعات حسب المجموعة"],["Hours used","الساعات المستخدمة"],["Per student","لكل طالب"],["Over tier","تجاوز الفئة"],["Fewer","أقل"],["More","أكثر"],["Enrolled","المسجّلون"],["Student speaking","تحدّث الطالب"],["Listening to AI partner","الاستماع إلى الشريك الذكي"],["Silence","الصمت"],["No speaking data yet","لا توجد بيانات تحدث بعد"],
    ["Notifications","الإشعارات"],["Achievements","الإنجازات"],["AI characters","شخصيات الذكاء الاصطناعي"],["Onboarding analytics","تحليلات التهيئة"],["Incentive program","برنامج الحوافز"],["Help center","مركز المساعدة"],["Support","الدعم"],["Recharge","شحن"],["hours remaining","ساعة متبقية"],["View weekly reports","عرض التقارير الأسبوعية"],["Add student","إضافة طالب"],["Speaking hours this week","ساعات التحدث هذا الأسبوع"],["Average fluency score","متوسط درجة الطلاقة"],["Active speaking students","الطلاب النشطون في التحدث"],["Sessions completed","الجلسات المكتملة"],["This week","هذا الأسبوع"],["Students needing attention","طلاب يحتاجون إلى متابعة"],["Ranked by urgency","مرتبة حسب الأولوية"],["Common speaking issues","مشكلات التحدث الشائعة"],["Top students","أفضل الطلاب"],["Recent activities","الأنشطة الأخيرة"],["Latest speaking practice updates","آخر تحديثات ممارسة التحدث"],["AI recommendations","توصيات الذكاء الاصطناعي"],["Implement","تطبيق"],["Hours spoken","ساعات التحدث"],["Tier ceiling","سقف الفئة"],["Speaking hours per week","ساعات التحدث أسبوعيًا"],["Mark all as read","تحديد الكل كمقروء"],["All","الكل"],["Archived","مؤرشفة"],["Settings","الإعدادات"],["Today","اليوم"],["Yesterday","أمس"],["Earlier","سابقًا"],["New","جديد"],["Save settings","حفظ الإعدادات"],["Reset to defaults","استعادة الافتراضيات"],["Add course","إضافة دورة"],["Search courses","البحث في الدورات"],["Course","الدورة"],["Language","اللغة"],["Target audiences","الفئات المستهدفة"],["Levels","المستويات"],["Created","تاريخ الإنشاء"],["Course details","تفاصيل الدورة"],["Create course","إنشاء دورة"],["Description","الوصف"],["Set up with AI","الإعداد بالذكاء الاصطناعي"],["Edit course","تعديل الدورة"],["Add level","إضافة مستوى"],["Learning goals","أهداف التعلّم"],["Content summary","ملخص المحتوى"],["Course levels","مستويات الدورة"],["Analysis","التحليل"],["Total levels","إجمالي المستويات"],["Total students","إجمالي الطلاب"],["Tasks","المهام"],["Avg completion","متوسط الإكمال"],["Student distribution","توزيع الطلاب"],["Top performers","الأفضل أداءً"],["Progress timeline","الجدول الزمني للتقدّم"],["Edit level","تعديل المستوى"],["Add task","إضافة مهمة"],["Add vocabulary","إضافة مفردات"],["Add idiom","إضافة تعبير"],["Key performance indicators","مؤشرات الأداء الرئيسية"],["Learning materials","مواد التعلّم"],["Vocabularies","المفردات"],["Idioms","التعابير"],["Task","المهمة"],["Type","النوع"],["Duration","المدة"],["Priority","الأولوية"],["Status","الحالة"],["Word","الكلمة"],["Category","الفئة"],["Present","المضارع"],["Past","الماضي"],["Past participle","التصريف الثالث"],["Present participle","صيغة -ing"],["Idiom","التعبير"],["Meaning","المعنى"],["Example","مثال"],["Edit task","تعديل المهمة"],["Delete task","حذف المهمة"],["Task brief","موجز المهمة"],["Recent attempts","المحاولات الأخيرة"],["Completion","الإكمال"],["Completed","مكتمل"],["Time-based","حسب الوقت"],["Topic-based","حسب الموضوع"],["High","عالية"],["Medium","متوسطة"],["Low","منخفضة"],["Create character","إنشاء شخصية"],["Search characters","البحث في الشخصيات"],["Background","الخلفية"],["Interests","الاهتمامات"],["Conversation topics","مواضيع المحادثة"],["Used in","مستخدمة في"],["Edit character","تعديل الشخصية"],["Delete","حذف"],["Character information","معلومات الشخصية"],["Name","الاسم"],["Invitations","الدعوات"],["Import students","استيراد الطلاب"],["Student","الطالب"],["Course & level","الدورة والمستوى"],["Tier","الفئة"],["Hours this month","ساعات هذا الشهر"],["Enrolled","تاريخ التسجيل"],["Over limit","تجاوز الحد"],["Blocked","محظور"],["All students","كل الطلاب"],["Edit","تعديل"],["Send reminder","إرسال تذكير"],["Request report","طلب تقرير"],["Student reports","تقارير الطالب"],["Recent activity","النشاط الأخير"],["Learning progress","تقدّم التعلّم"],["Performance statistics","إحصاءات الأداء"],["Student information","معلومات الطالب"],["Full name","الاسم الكامل"],["Email","البريد الإلكتروني"],["Level","المستوى"],["Phone number","رقم الهاتف"],["Address","العنوان"],["Consumption tier","فئة الاستهلاك"],["Student invitations","دعوات الطلاب"],["Create invitation","إنشاء دعوة"],["Active invitations","الدعوات النشطة"],["Total registrations","إجمالي التسجيلات"],["Expiring soon","تنتهي قريبًا"],["Total invitations","إجمالي الدعوات"],["Target","الهدف"],["Uses","الاستخدامات"],["Expires","تنتهي في"],["Copy link","نسخ الرابط"],["Disable","تعطيل"],["Enable","تفعيل"],["Expired","منتهية"],["Disabled","معطّلة"],["Max reached","بلغت الحد"],["Create group","إنشاء مجموعة"],["Group","المجموعة"],["Period","الفترة"],["All groups","كل المجموعات"],["Edit group","تعديل المجموعة"],["Invite students","دعوة الطلاب"],["Content & pacing","المحتوى والإيقاع"],["Analytics","التحليلات"],["Pacing plan","خطة الإيقاع"],["Upcoming","قادمة"],["Ended","منتهية"],["Invite user","دعوة مستخدم"],["User","المستخدم"],["Role","الدور"],["Specialty","التخصص"],["Last active","آخر نشاط"],["All users","كل المستخدمين"],["Delete user","حذف المستخدم"],["Groups taught","المجموعات التي يدرّسها"],["Roles","الأدوار"],["Permission matrix","مصفوفة الصلاحيات"],["Create role","إنشاء دور"],["Publish changes","نشر التغييرات"],["Grant all","منح الكل"],["System","نظام"],["Custom","مخصص"],["Module","الوحدة"],["Permission","الصلاحية"],["Pending","قيد الانتظار"],["Active schedules","الجداول النشطة"],["Processing","قيد المعالجة"],["Completed this week","المكتملة هذا الأسبوع"],["Individual reports","التقارير الفردية"],["Group analysis","تحليل المجموعة"],["Schedules only","الجداول فقط"],["Requests only","الطلبات فقط"],["Date range","النطاق الزمني"],["Schedule","الجدول"],["Created by","أنشأه"],["View","عرض"],["Download","تنزيل"],["Generated","تم الإنشاء"],["Failed","فشل"],["Paused","متوقف"],["Resume","استئناف"],["Retry","إعادة المحاولة"],["Weekly practice report","تقرير الممارسة الأسبوعي"],["All reports","كل التقارير"],["Open student","فتح الطالب"],["Download PDF","تنزيل PDF"],["Total practice","إجمالي الممارسة"],["Speaking time","وقت التحدث"],["Listening time","وقت الاستماع"],["Silence time","وقت الصمت"],["Fluency score","درجة الطلاقة"],["Teacher focus areas","مجالات تركيز المعلّم"],["Strengths","نقاط القوة"],["Areas for improvement","مجالات التحسين"],["Topics discussed","المواضيع التي نوقشت"],["Grammar analysis","تحليل القواعد"],["Pronunciation analysis","تحليل النطق"],["Vocabulary analysis","تحليل المفردات"],["Wallet balance","رصيد المحفظة"],["Hours used this month","الساعات المستخدمة هذا الشهر"],["Over their tier","تجاوزوا فئتهم"],["Avg per student","المتوسط لكل طالب"],["Consumption tiers","فئات الاستهلاك"],["Highest usage","الاستخدام الأعلى"],["Export CSV","تصدير CSV"],["Billing & subscription","الفوترة والاشتراك"],["View all plans","عرض كل الخطط"],["Hide plans","إخفاء الخطط"],["Recharge hours","شحن الساعات"],["Current plan","الخطة الحالية"],["Plan","الخطة"],["Rate per hour","السعر لكل ساعة"],["Max students","الحد الأقصى للطلاب"],["Started","بدأت في"],["Hour wallet","محفظة الساعات"],["Avg daily usage","متوسط الاستخدام اليومي"],["Est. days left","الأيام المتبقية تقديريًا"],["Total usage","إجمالي الاستخدام"],["Usage trends","اتجاهات الاستخدام"],["Top consumers this month","الأكثر استهلاكًا هذا الشهر"],["Transaction history","سجل المعاملات"],["Subscriptions","الاشتراكات"],["Paid","مدفوع"],["Select plan","اختيار الخطة"],["Most popular","الأكثر شيوعًا"],["Request payout","طلب صرف"],["Incentive wallet","محفظة الحوافز"],["Your referral link","رابط الإحالة الخاص بك"],["Copy","نسخ"],["Clicks","النقرات"],["Sign-ups","التسجيلات"],["Total referrals","إجمالي الإحالات"],["Active subscriptions","الاشتراكات النشطة"],["Conversion rate","معدل التحويل"],["Monthly growth","النمو الشهري"],["Monthly earnings","الأرباح الشهرية"],["Payout history","سجل الصرف"],["Joined","تاريخ الانضمام"],["Earnings","الأرباح"],["Total earned","إجمالي الأرباح"],["Total withdrawn","إجمالي المسحوب"],["Personal information","المعلومات الشخصية"],["Password","كلمة المرور"],["Preferences","التفضيلات"],["Active sessions","الجلسات النشطة"],["Leave workspace","مغادرة مساحة العمل"],["Leave","مغادرة"],["Organisation","المؤسسة"],["Company name","اسم الشركة"],["Phone","الهاتف"],["Proficiency levels","مستويات الكفاءة"],["Browse by category","التصفح حسب الفئة"],["Popular articles","المقالات الشائعة"],["Frequently asked questions","الأسئلة الشائعة"],["Need more help?","تحتاج إلى مساعدة إضافية؟"],["Contact support","التواصل مع الدعم"],["Search","بحث"],["Send us a message","أرسل لنا رسالة"],["Send message","إرسال الرسالة"],["Department","القسم"],["Subject","الموضوع"],["Message","الرسالة"],["Other ways to reach us","طرق أخرى للتواصل"],["Response time","وقت الاستجابة"],["Related articles","مقالات ذات صلة"],["Was this article helpful?","هل كانت هذه المقالة مفيدة؟"],["Yes","نعم"],["No","لا"],["Share","مشاركة"],["Sign in to your account","تسجيل الدخول إلى حسابك"],["Sign in","تسجيل الدخول"],["Remember me","تذكّرني"],["Forgot password?","نسيت كلمة المرور؟"],["Create an account","إنشاء حساب"],["Create your account","أنشئ حسابك"],["Create account","إنشاء الحساب"],["Forgot password","نسيت كلمة المرور"],["Send reset link","إرسال رابط إعادة التعيين"],["Reset password","إعادة تعيين كلمة المرور"],["Join as a student","الانضمام كطالب"],["Register now","سجّل الآن"],["Join group","الانضمام إلى المجموعة"],["Page not found","الصفحة غير موجودة"],["Return to home","العودة إلى الرئيسية"],
    // shell
    ["Search…","بحث…"],["Overview","نظرة عامة"],["Teaching","التدريس"],["Insights","الرؤى"],["Administration","الإدارة"],["Account","الحساب"],
    ["Dashboard","لوحة التحكم"],["Courses","الدورات"],["Groups","المجموعات"],["Students","الطلاب"],["Reports","التقارير"],["Consumption","الاستهلاك"],
    ["Users","المستخدمون"],["Roles & permissions","الأدوار والصلاحيات"],["Billing","الفوترة"],["Company profile","ملف الشركة"],["My groups","مجموعاتي"],
    ["Course content","محتوى الدورة"],["VIEWING AS","العرض بصفة"],["Admin","مسؤول"],["Teacher","معلّم"],["Admin User","مستخدم مسؤول"],
    ["Cairo Language Center","مركز القاهرة للغات"],["General English","الإنجليزية العامة"],["Business English","الإنجليزية للأعمال"],["My profile","ملفي الشخصي"],
    ["Student progress","تقدّم الطلاب"],["English","الإنجليزية"],["Workspace","مساحة العمل"],["all students","كل الطلاب"],
    // common
    ["Cancel","إلغاء"],["Save changes","حفظ التغييرات"],["Active","نشط"],["Invited","مدعو"],["Draft","مسودة"],["Starting","قيد البدء"],["Ready","جاهز"],
    ["Processing","قيد المعالجة"],["Failed","فشل"],["Paid","مدفوعة"],["Empty","فارغة"],["Review","مراجعة"],["Over limit","تجاوز الحد"],["Inactive","غير نشط"],
    ["Complete","مكتمل"],["Behind","متأخر"],["Current","الحالي"],["Scheduled","مجدول"],["In progress","قيد التنفيذ"],["System","نظامي"],["Custom","مخصّص"],
    ["Yesterday","أمس"],["Today","اليوم"],["Never","أبدًا"],["Last 30 days","آخر 30 يومًا"],["Export CSV","تصدير CSV"],["Import CSV","استيراد CSV"],
    ["Student","الطالب"],["Course","الدورة"],["Level","المستوى"],["Tier","الفئة"],["Progress","التقدّم"],["Status","الحالة"],["Course & level","الدورة والمستوى"],
    ["Group","المجموعة"],["Schedule","الجدول"],["Hours","الساعات"],["Last session","آخر جلسة"],["Flag","تنبيه"],["User","المستخدم"],["Role","الدور"],
    ["Last active","آخر نشاط"],["Type","النوع"],["Target","الهدف"],["Range","النطاق"],["Accuracy","الدقة"],["Fluency","الطلاقة"],["Requested by","مقدّم الطلب"],
    ["Date","التاريخ"],["Description","الوصف"],["Amount","المبلغ"],["Tasks","المهام"],["Trend","الاتجاه"],["Used","المستخدم"],["Avg score","متوسط الدرجة"],
    ["of","من"],["Unassigned","غير معيّن"],["Not scheduled","غير مجدول"],["Daily","يوميًا"],["Enterprise","المؤسسات"],["Unlimited","غير محدود"],
    ["Role: All","الدور: الكل"],["Status: Active","الحالة: نشط"],["Type: All","النوع: الكل"],["Status: All","الحالة: الكل"],["Columns","الأعمدة"],["Load more","تحميل المزيد"],
    // dashboard
    ["Good morning, Admin","صباح الخير، مسؤول النظام"],["Enterprise plan","خطة المؤسسات"],["Add student","إضافة طالب"],["Hour wallet is empty.","محفظة الساعات فارغة."],
    ["Recharge to resume speaking sessions — 3 students are already blocked.","اشحن المحفظة لاستئناف جلسات المحادثة — تم إيقاف 3 طلاب بالفعل."],
    ["Recharge hours","شحن الساعات"],["Active students","الطلاب النشطون"],["Hours delivered","الساعات المقدَّمة"],["Avg completion","متوسط الإكمال"],
    ["Tasks reviewed","المهام المراجَعة"],["24 awaiting a teacher","24 بانتظار المعلّم"],["Speaking hours per week","ساعات المحادثة أسبوعيًا"],
    ["Delivered across all groups","عبر جميع المجموعات"],["Hours used","الساعات المستخدمة"],["Tier ceiling","سقف الفئة"],["Needs attention","يحتاج إلى متابعة"],
    ["Ranked by urgency","مرتبة حسب الأولوية"],["Students over their tier","طلاب تجاوزوا فئتهم"],["Sessions blocked until recharge","الجلسات موقوفة حتى الشحن"],
    ["Sessions awaiting feedback","جلسات بانتظار الملاحظات"],["Oldest is 6 days old","أقدمها منذ 6 أيام"],["Invites not accepted","دعوات لم تُقبل"],
    ["Sent more than 7 days ago","أُرسلت قبل أكثر من 7 أيام"],["Levels with no content","مستويات بلا محتوى"],["Level B2 has no scenarios","المستوى B2 بلا سيناريوهات"],
    ["Recent activity","النشاط الأخير"],["You created the Finance role with 4 permissions","أنشأتَ دور المالية بأربع صلاحيات"],
    // roles
    ["Pick a role, then grant permissions by area. Changes apply to everyone holding the role.","اختر دورًا ثم امنح الصلاحيات حسب المجال. تُطبَّق التغييرات على كل من يحمل هذا الدور."],
    ["Audit matrix","مصفوفة التدقيق"],["Create role","إنشاء دور"],["Center manager","مدير المركز"],["Finance","المالية"],["Full access · 2 users","وصول كامل · مستخدمان"],
    ["Revoke all","إلغاء الكل"],["Grant all","منح الكل"],["permissions granted ·","صلاحية ممنوحة ·"],["Role saved","تم حفظ الدور"],
    ["System roles cannot be deleted. Duplicate one to build a custom role from a known-good baseline.","لا يمكن حذف أدوار النظام. انسخ أحدها لبناء دور مخصّص من أساس موثوق."],
    ["Courses & content","الدورات والمحتوى"],["Levels, vocabulary, tasks, flashcards, scenarios","المستويات والمفردات والمهام والبطاقات والسيناريوهات"],
    ["Students & groups","الطلاب والمجموعات"],["Enrolment, tiers, cohorts","التسجيل والفئات والدفعات"],["Reports and hour consumption","التقارير واستهلاك الساعات"],
    ["Users, roles, billing, company profile","المستخدمون والأدوار والفوترة وملف الشركة"],
    ["View courses","عرض الدورات"],["Create & edit courses","إنشاء الدورات وتعديلها"],["Manage levels","إدارة المستويات"],["Manage content items","إدارة عناصر المحتوى"],
    ["Generate content with AI","إنشاء المحتوى بالذكاء الاصطناعي"],["Delete courses","حذف الدورات"],["View students","عرض الطلاب"],["Add & invite students","إضافة الطلاب ودعوتهم"],
    ["Assign tier & level","تعيين الفئة والمستوى"],["Manage groups","إدارة المجموعات"],["View reports","عرض التقارير"],["Request & schedule reports","طلب التقارير وجدولتها"],
    ["View consumption","عرض الاستهلاك"],["Manage consumption tiers","إدارة فئات الاستهلاك"],["View users","عرض المستخدمين"],["Invite & remove users","دعوة المستخدمين وإزالتهم"],
    ["Manage roles & permissions","إدارة الأدوار والصلاحيات"],["View billing","عرض الفوترة"],["Recharge hours & change plan","شحن الساعات وتغيير الخطة"],["Edit company profile","تعديل ملف الشركة"],
    // students
    ["359 enrolled across 2 courses.","359 طالبًا مسجّلًا في دورتين."],["Invitations","الدعوات"],["Search students…","ابحث عن الطلاب…"],["All students","كل الطلاب"],
    ["Change tier","تغيير الفئة"],["Move level","نقل المستوى"],["Request report","طلب تقرير"],["Course progress","تقدّم الدورة"],["12 of 35 tasks completed","12 من 35 مهمة مكتملة"],
    ["Sessions","الجلسات"],["Streak","أيام متتالية"],["consecutive days","أيام متواصلة"],["Recent speaking sessions","جلسات المحادثة الأخيرة"],
    ["Scored on range, accuracy and fluency","تُقيَّم على النطاق والدقة والطلاقة"],["View all 24 sessions","عرض كل الجلسات (24)"],["Speaking KPIs","مؤشرات أداء المحادثة"],
    ["Produces simple phrases about people and places.","يُنتج عبارات بسيطة عن الأشخاص والأماكن."],["Limited control of past tense; recurring article errors.","تحكّم محدود في الزمن الماضي؛ أخطاء متكررة في أدوات التعريف."],
    ["Short utterances, pauses shortening month over month.","عبارات قصيرة، والتوقفات تقصر شهرًا بعد شهر."],["Hours this month","ساعات هذا الشهر"],["/ 20 hrs","/ 20 ساعة"],
    ["34% of the Regular tier used · resets Sep 1","استُخدم 34% من الفئة العادية · يُعاد الضبط في 1 سبتمبر"],
    // course
    ["Generate with AI","إنشاء بالذكاء الاصطناعي"],["Course settings","إعدادات الدورة"],["Publish changes","نشر التغييرات"],["Outline","المخطط"],["+ Level","+ مستوى"],
    ["Goals & KPIs","الأهداف ومؤشرات الأداء"],["Vocabulary & idioms","المفردات والتعابير"],["Conversational tasks","مهام المحادثة"],["Flashcards","البطاقات التعليمية"],
    ["Real-life scenarios","سيناريوهات واقعية"],["Level goals & KPIs","أهداف المستوى ومؤشرات الأداء"],["Add goal","إضافة هدف"],["Add entry","إضافة مدخل"],["Add task","إضافة مهمة"],
    ["Add card","إضافة بطاقة"],["Add scenario","إضافة سيناريو"],["Reorder","إعادة الترتيب"],["items in","عنصرًا في"],
    ["Target lexis practised in this level's tasks","المفردات المستهدفة في مهام هذا المستوى"],["Live speaking prompts scored on range, accuracy and fluency","محفزات محادثة مباشرة تُقيَّم على النطاق والدقة والطلاقة"],
    ["Spaced-repetition drills unlocked with each task","تدريبات تكرار متباعد تُفتح مع كل مهمة"],["Multi-turn simulations combining the level's tasks and lexis","محاكاة متعددة الأدوار تجمع مهام المستوى ومفرداته"],
    ["What a student must demonstrate to advance","ما يجب أن يُظهره الطالب للتقدّم"],["Applied to every speaking task generated at this level.","تُطبَّق على كل مهمة محادثة تُنشأ في هذا المستوى."],
    ["Max output words","الحد الأقصى لكلمات الإخراج"],["Speaking speed","سرعة التحدث"],["Students at level","طلاب المستوى"],["Goals","الأهداف"],["+ Add goal","+ إضافة هدف"],
    // groups
    ["A group pairs a course level with a teacher and a cohort of students.","تجمع المجموعة بين مستوى دورة ومعلّم ودفعة من الطلاب."],["Create group","إنشاء مجموعة"],
    ["Search groups…","ابحث عن المجموعات…"],["All groups","كل المجموعات"],["Edit group","تعديل المجموعة"],["Add students","إضافة طلاب"],["Avg progress","متوسط التقدّم"],
    ["Hours this month","ساعات هذا الشهر"],["Needs review","بحاجة لمراجعة"],["Oldest 2 days old","أقدمها منذ يومين"],["Roster","قائمة الطلاب"],["Content & pacing","المحتوى والجدولة"],
    ["Analytics","التحليلات"],["Export roster","تصدير القائمة"],["Tasks completed per week","المهام المكتملة أسبوعيًا"],["Group total across 12 students","إجمالي المجموعة لـ12 طالبًا"],
    ["Average KPIs","متوسط مؤشرات الأداء"],["Group mean, last 30 days","متوسط المجموعة، آخر 30 يومًا"],["Completed","مكتملة"],["Pacing plan","خطة الجدولة"],
    ["content unlocks on schedule","يُفتح المحتوى حسب الجدول"],["Course content →","محتوى الدورة ←"],["Introductions & routines","التعارف والروتين"],["Describing places","وصف الأماكن"],
    ["Shopping & money","التسوق والمال"],["Travel & directions","السفر والاتجاهات"],["Work & colleagues","العمل والزملاء"],["Pacing is 1 week behind","الجدولة متأخرة أسبوعًا واحدًا"],
    ["Week 3 tasks are at 41% completion. Consider unlocking week 5 later or reducing the weekly task count.","مهام الأسبوع 3 مكتملة بنسبة 41%. فكّر في تأجيل فتح الأسبوع 5 أو تقليل عدد المهام الأسبوعية."],
    ["Adjust schedule","تعديل الجدول"],["Teacher view — progress and session feedback. Course content and billing are read-only.","عرض المعلّم — التقدّم وملاحظات الجلسات. محتوى الدورة والفوترة للقراءة فقط."],
    ["Export progress","تصدير التقدّم"],["Oldest first","الأقدم أولًا"],
    // consumption / billing
    ["Speaking hours used against each student's monthly tier.","ساعات المحادثة المستخدمة مقابل الفئة الشهرية لكل طالب."],["New tier","فئة جديدة"],
    ["Sessions are paused for 359 students until the workspace is recharged.","الجلسات متوقفة لـ359 طالبًا حتى يُعاد شحن مساحة العمل."],["Total students","إجمالي الطلاب"],
    ["Sessions blocked","جلسات موقوفة"],["Avg monthly usage","متوسط الاستخدام الشهري"],["hours per student","ساعة لكل طالب"],["Used this month","المستخدم هذا الشهر"],
    ["hours across the workspace","ساعة عبر مساحة العمل"],["Tiers","الفئات"],["Monthly hour ceiling per student","سقف الساعات الشهري لكل طالب"],["Light user","مستخدم خفيف"],
    ["Regular user","مستخدم عادي"],["Heavy user","مستخدم نشط"],["Intensive user","مستخدم مكثّف"],["Minimal usage","استخدام محدود"],["Average students","طلاب متوسطو النشاط"],
    ["Highly engaged students","طلاب شديدو التفاعل"],["DEFAULT","افتراضي"],["Highest usage this month","الأعلى استخدامًا هذا الشهر"],["Sorted by share of tier consumed","مرتبة حسب نسبة استهلاك الفئة"],
    ["August 2026","أغسطس 2026"],["Plan, hour wallet and invoices.","الخطة ومحفظة الساعات والفواتير."],["Change plan","تغيير الخطة"],["Current plan","الخطة الحالية"],
    ["Rate per hour","السعر لكل ساعة"],["Max students","الحد الأقصى للطلاب"],["Started","تاريخ البدء"],["Renews","التجديد"],["Hour wallet","محفظة الساعات"],["hours remaining","ساعة متبقية"],
    ["Purchased","المشتراة"],["Avg daily use","متوسط الاستخدام اليومي"],["Days left","الأيام المتبقية"],["Invoices & recharges","الفواتير وعمليات الشحن"],
    ["Billed to Cairo Language Center","تُصدر باسم مركز القاهرة للغات"],["Payment method","طريقة الدفع"],["Hour recharge","شحن ساعات"],["annual","سنوي"],
    ["Showing the last 4 of 11 documents","عرض آخر 4 من 11 مستندًا"],
    // users
    ["Staff accounts for this workspace. Students live under Students.","حسابات الموظفين في مساحة العمل هذه. الطلاب موجودون ضمن قسم الطلاب."],["Pending invites","دعوات معلّقة"],
    ["Invite user","دعوة مستخدم"],["Search by name or email…","ابحث بالاسم أو البريد الإلكتروني…"],["Pending assignment","بانتظار التعيين"],["All users","كل المستخدمين"],
    ["Reset password","إعادة تعيين كلمة المرور"],["Edit user","تعديل المستخدم"],["21 students in reach","21 طالبًا ضمن النطاق"],["Sessions reviewed","الجلسات المراجَعة"],
    ["Avg turnaround","متوسط وقت الاستجابة"],["Feedback after a session","الملاحظات بعد الجلسة"],["Awaiting review","بانتظار المراجعة"],["Assigned groups","المجموعات المعيّنة"],
    ["Determines which students this user can see","تحدد الطلاب الذين يمكن لهذا المستخدم رؤيتهم"],["Assign","تعيين"],["Audit log","سجل التدقيق"],
    ["Actions taken by this user","الإجراءات التي اتخذها هذا المستخدم"],["Open full audit log","فتح سجل التدقيق الكامل"],["Effective permissions","الصلاحيات الفعلية"],
    ["Inherited from the Teacher role","موروثة من دور المعلّم"],["Edit role","تعديل الدور"],
    ["Permissions are granted by role only. To give this user more access, change their role or edit the Teacher role.","تُمنح الصلاحيات عبر الأدوار فقط. لمنح هذا المستخدم وصولًا أكبر، غيّر دوره أو عدّل دور المعلّم."],
    ["Deactivate user","إلغاء تفعيل المستخدم"],["Sessions end immediately and their groups become unassigned. History is kept for reporting.","تنتهي الجلسات فورًا وتصبح مجموعاته غير معيّنة. يُحتفظ بالسجل لأغراض التقارير."],
    ["Deactivate","إلغاء التفعيل"],["Role: Teacher →","الدور: معلّم ←"],
    // reports
    ["Request a one-off report or put it on a schedule.","اطلب تقريرًا لمرة واحدة أو جدوله."],["Group summary","ملخص المجموعة"],["Teacher activity","نشاط المعلّمين"],
    ["Per-student levels, tasks and KPI trend for a date range.","مستويات كل طالب ومهامه واتجاه مؤشرات أدائه لفترة محددة."],["Cohort completion and average scores by level.","إكمال الدفعة ومتوسط الدرجات حسب المستوى."],
    ["Hours used against tier, per student or workspace-wide.","الساعات المستخدمة مقابل الفئة، لكل طالب أو لمساحة العمل كاملة."],["Sessions reviewed and feedback turnaround time.","الجلسات المراجَعة ووقت الاستجابة للملاحظات."],
    ["Request →","اطلب ←"],["History","السجل"],["Schedules","الجداول"],["All teachers","كل المعلّمين"],["monthly","شهري"],["All reports","كل التقارير"],["Share link","مشاركة الرابط"],
    ["Download PDF","تنزيل PDF"],["Filters","عوامل التصفية"],["Min. 1 session","جلسة واحدة على الأقل"],["Students covered","الطلاب المشمولون"],["47 with no session excluded","استُبعد 47 بلا جلسات"],
    ["Tasks completed","المهام المكتملة"],["Completion by level","الإكمال حسب المستوى"],["Students enrolled vs tasks completed","الطلاب المسجّلون مقابل المهام المكتملة"],["Completion %","نسبة الإكمال"],
    ["KPI averages","متوسطات مؤشرات الأداء"],["Weighted across 359 students","مرجّحة عبر 359 طالبًا"],
    ["Scores are averaged per attempt, not per student, so heavy users weigh more.","تُحسب الدرجات لكل محاولة لا لكل طالب، لذا يكون للمستخدمين الأكثر نشاطًا وزن أكبر."],
    ["Per-student detail","تفاصيل كل طالب"],["Sorted by tasks completed","مرتبة حسب المهام المكتملة"],
    // company / profile
    ["Workspace identity, contact details and defaults for new students.","هوية مساحة العمل وبيانات الاتصال والإعدادات الافتراضية للطلاب الجدد."],["Identity & contact","الهوية والاتصال"],
    ["Student defaults","إعدادات الطلاب الافتراضية"],["Branding","العلامة التجارية"],["Languages","اللغات"],["Integrations","التكاملات"],["Identity","الهوية"],["Logo","الشعار"],
    ["Workspace logo","شعار مساحة العمل"],["SVG or PNG, square, at least 256×256. Shown to students in the app.","SVG أو PNG، مربع، بحجم 256×256 على الأقل. يظهر للطلاب في التطبيق."],
    ["Upload","رفع"],["Remove","إزالة"],["Legal name","الاسم القانوني"],["Display name","الاسم المعروض"],["Primary contact","جهة الاتصال الرئيسية"],["Contact email","بريد التواصل"],
    ["Phone","الهاتف"],["Tax / VAT number","الرقم الضريبي"],["Country","الدولة"],["Time zone","المنطقة الزمنية"],["Defaults for new students","الإعدادات الافتراضية للطلاب الجدد"],
    ["Applied on enrolment unless overridden.","تُطبَّق عند التسجيل ما لم تُغيَّر."],["Consumption tier","فئة الاستهلاك"],["Interface language","لغة الواجهة"],["English (EN)","الإنجليزية (EN)"],
    ["Students may self-enrol with an invite link","يمكن للطلاب التسجيل ذاتيًا عبر رابط دعوة"],["Seats are still counted against the plan","تُحتسب المقاعد ضمن الخطة"],
    ["Block sessions when a student passes their tier","إيقاف الجلسات عند تجاوز الطالب فئته"],["Off means the workspace wallet absorbs the overage","عند الإيقاف، تتحمّل محفظة مساحة العمل الزيادة"],
    ["Weekly progress digest to group teachers","ملخص أسبوعي للتقدّم لمعلّمي المجموعات"],["Sent Monday 08:00 local time","يُرسل الاثنين 08:00 بالتوقيت المحلي"],["Discard","تجاهل"],
    ["Your account, security and notification preferences.","حسابك والأمان وتفضيلات الإشعارات."],["Change photo","تغيير الصورة"],["Full name","الاسم الكامل"],["Email","البريد الإلكتروني"],
    ["Job title","المسمى الوظيفي"],["Notifications","الإشعارات"],["Wallet running low","رصيد المحفظة منخفض"],["Below 7 days of hours at current usage","أقل من 7 أيام من الساعات بالاستخدام الحالي"],
    ["in-app","داخل التطبيق"],["In-app","داخل التطبيق"],["Student passes their tier","تجاوز طالب لفئته"],["Immediate, per student","فوري، لكل طالب"],["Report ready","التقرير جاهز"],
    ["When a requested report finishes","عند اكتمال تقرير مطلوب"],["Weekly workspace digest","ملخص أسبوعي لمساحة العمل"],["Monday morning summary","ملخص صباح الاثنين"],["Security","الأمان"],
    ["Last password change 4 months ago","آخر تغيير لكلمة المرور منذ 4 أشهر"],["Change password","تغيير كلمة المرور"],["Two-factor auth","المصادقة الثنائية"],["Authenticator app","تطبيق المصادقة"],
    ["Active sessions","الجلسات النشطة"],["THIS DEVICE","هذا الجهاز"],["This device","هذا الجهاز"],["Revoke","إلغاء"],["Cairo, EG","القاهرة، مصر"],["Alexandria, EG","الإسكندرية، مصر"],["active now","نشط الآن"],
    ["Leave workspace","مغادرة مساحة العمل"],["You will lose access to Cairo Language Center immediately. Another admin must re-invite you.","ستفقد الوصول إلى مركز القاهرة للغات فورًا. يجب أن يعيد مسؤول آخر دعوتك."],
    // flows
    ["Create & edit flows","مسارات الإنشاء والتعديل"],["Flows","المسارات"],["Roles & permissions","الأدوار والصلاحيات"],["Edit student","تعديل الطالب"],["Add course","إضافة دورة"],
    ["Add level","إضافة مستوى"],["Delete level","حذف المستوى"],["Vocabulary entry","مدخل مفردات"],["Conversational task","مهمة محادثة"],["Courses · content","الدورات · المحتوى"],
    ["Start from a baseline, then grant permissions on the role page.","ابدأ من أساس، ثم امنح الصلاحيات من صفحة الدور."],["You will land on the role's permission editor after creating it.","ستنتقل إلى محرر صلاحيات الدور بعد إنشائه."],
    ["Role name","اسم الدور"],["Key","المفتاح"],["Generated from the name. Used in the API and cannot change later.","يُولَّد من الاسم. يُستخدم في واجهة البرمجة ولا يمكن تغييره لاحقًا."],
    ["Start from","البدء من"],["No permissions","بلا صلاحيات"],["Grant everything manually","امنح كل شيء يدويًا"],["Copy Center manager","نسخ مدير المركز"],["14 permissions","14 صلاحية"],
    ["Copy Teacher","نسخ المعلّم"],["5 permissions","5 صلاحيات"],
    ["They receive an email link valid for 7 days.","يتلقى رابطًا بالبريد الإلكتروني صالحًا لمدة 7 أيام."],["Send invite","إرسال الدعوة"],["Work email","البريد الإلكتروني للعمل"],
    ["Assign to groups","التعيين في مجموعات"],["Send a welcome message with the invite","إرسال رسالة ترحيب مع الدعوة"],["Seats: 5 of 25 used. Invited users occupy a seat once they accept.","المقاعد: 5 من 25 مستخدمة. يشغل المستخدم المدعو مقعدًا بمجرد قبوله."],
    ["Enrol one student. Use Import CSV for a cohort.","سجّل طالبًا واحدًا. استخدم استيراد CSV لدفعة كاملة."],["Hours are drawn from the workspace wallet, capped by the student's tier.","تُخصم الساعات من محفظة مساحة العمل بحد أقصى حسب فئة الطالب."],
    ["Starting level","مستوى البدء"],["Run a placement task before assigning a level","إجراء مهمة تحديد مستوى قبل التعيين"],["Email the app invite now","إرسال دعوة التطبيق بالبريد الآن"],
    ["Moving a level keeps completed tasks in history.","نقل المستوى يُبقي المهام المكتملة في السجل."],["6.8 hrs already used this month.","استُخدمت 6.8 ساعة هذا الشهر بالفعل."],
    ["Reset this month's hour usage","إعادة ضبط استخدام الساعات لهذا الشهر"],["Delete student","حذف الطالب"],
    ["A group pairs a course level with a teacher and a cohort.","تجمع المجموعة بين مستوى دورة ومعلّم ودفعة."],["Group name","اسم المجموعة"],["Days","الأيام"],["Capacity","السعة"],
    ["Enrolment is blocked past capacity.","يُمنع التسجيل بعد بلوغ السعة."],["Term","الفصل"],["Students are added after the group exists, from the Students table or the group page.","يُضاف الطلاب بعد إنشاء المجموعة، من جدول الطلاب أو صفحة المجموعة."],
    ["Levels and content are added next.","تُضاف المستويات والمحتوى لاحقًا."],["Create course","إنشاء دورة"],["Course name","اسم الدورة"],["Language","اللغة"],["Level framework","إطار المستويات"],
    ["Target audiences","الفئات المستهدفة"],["Professionals","المهنيون"],["General","عام"],["Business","الأعمال"],["Create the framework's levels automatically","إنشاء مستويات الإطار تلقائيًا"],
    ["Six empty levels with CEFR goals and KPIs pre-filled.","ستة مستويات فارغة بأهداف ومؤشرات CEFR معبأة مسبقًا."],["Level name","اسم المستوى"],["Caps the length of AI turns.","يحدّ من طول ردود الذكاء الاصطناعي."],
    ["1.0 is native pace.","1.0 هي سرعة المتحدث الأصلي."],["Goals — one per line","الأهداف — هدف في كل سطر"],
    ["KPIs (range, accuracy, fluency) are inherited from the framework and editable per level.","تُورث مؤشرات الأداء (النطاق والدقة والطلاقة) من الإطار ويمكن تعديلها لكل مستوى."],
    ["Add vocabulary entry","إضافة مدخل مفردات"],["Term or idiom","المصطلح أو التعبير"],["Meaning","المعنى"],["Translation (AR)","الترجمة (AR)"],
    ["Generate reference audio at level speed","إنشاء صوت مرجعي بسرعة المستوى"],["Entries feed both flashcards and the lexis targets of conversational tasks.","تُغذي المدخلات البطاقات التعليمية ومفردات مهام المحادثة."],
    ["Add conversational task","إضافة مهمة محادثة"],["Save task","حفظ المهمة"],["Task title","عنوان المهمة"],["Format","الصيغة"],["Monologue","حديث فردي"],["Student speaks alone against a prompt","يتحدث الطالب منفردًا استجابةً لمحفز"],
    ["Role-play","لعب أدوار"],["AI takes a persona and responds","يتقمص الذكاء الاصطناعي شخصية ويرد"],["Picture prompt","محفز صوري"],["Describe an image","صِف صورة"],
    ["Prompt given to the student","المحفز المقدم للطالب"],["Target duration (seconds)","المدة المستهدفة (ثوانٍ)"],["Minimum turns","الحد الأدنى للأدوار"],["Scored on","يُقيَّم على"],["Pronunciation","النطق"],
    ["Send to the group teacher for feedback after each attempt","الإرسال لمعلّم المجموعة لإبداء الملاحظات بعد كل محاولة"],["New consumption tier","فئة استهلاك جديدة"],
    ["A monthly hour ceiling you can assign to students.","سقف ساعات شهري يمكنك تعيينه للطلاب."],["Create tier","إنشاء الفئة"],["Tier name","اسم الفئة"],["Monthly hours","الساعات الشهرية"],
    ["Marker colour","لون العلامة"],["Unused hours","الساعات غير المستخدمة"],["Make this the default tier for new students","جعلها الفئة الافتراضية للطلاب الجدد"],
    ["Changing a tier's ceiling applies from the next billing month.","يسري تغيير سقف الفئة من شهر الفوترة التالي."],["Ready reports appear in History and can be emailed.","تظهر التقارير الجاهزة في السجل ويمكن إرسالها بالبريد."],
    ["Report","التقرير"],["Levels, tasks and KPI trend","المستويات والمهام واتجاه مؤشرات الأداء"],["Cohort completion and scores","إكمال الدفعة والدرجات"],["Hours used against tier","الساعات المستخدمة مقابل الفئة"],
    ["Date range","الفترة الزمنية"],["Email me when it is ready","راسلني عندما يجهز"],["Hours land in the workspace wallet immediately.","تُضاف الساعات إلى محفظة مساحة العمل فورًا."],
    ["At the current usage of 15.3 hrs/day this lasts about 65 days.","بمعدل الاستخدام الحالي 15.3 ساعة يوميًا تكفي نحو 65 يومًا."],["Total","الإجمالي"],
    ["Auto-recharge when the wallet drops below 100 hours","الشحن التلقائي عند انخفاض المحفظة عن 100 ساعة"],["An invoice is issued to Cairo Language Center LLC, VAT 100-234-556.","تُصدر فاتورة باسم مركز القاهرة للغات ذ.م.م، الرقم الضريبي 100-234-556."],
    ["This cannot be undone.","لا يمكن التراجع عن هذا الإجراء."],["Students at this level","الطلاب في هذا المستوى"],["Content items","عناصر المحتوى"],["Move affected students to","نقل الطلاب المتأثرين إلى"],
    ["Their completed tasks stay in history and in reports.","تبقى مهامهم المكتملة في السجل والتقارير."],["Type the level name to confirm in the real product.","اكتب اسم المستوى للتأكيد في المنتج الفعلي."],
    ["Prototype only; nothing was saved.","نموذج أولي فقط؛ لم يُحفظ شيء."],["Do not roll over","لا تُرحَّل"],["Purple","بنفسجي"],["Idiom","تعبير اصطلاحي"],["One-off","لمرة واحدة"],
    ["Edit student","تعديل الطالب"]
  ];
  const D = new Map(PAIRS);
  const MON = { Jan: "يناير", Feb: "فبراير", Mar: "مارس", Apr: "أبريل", May: "مايو", Jun: "يونيو", Jul: "يوليو", Aug: "أغسطس", Sep: "سبتمبر", Oct: "أكتوبر", Nov: "نوفمبر", Dec: "ديسمبر" };
  const DAY = { Sun: "الأحد", Mon: "الاثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس", Fri: "الجمعة", Sat: "السبت" };
  const LVL = { Basic: "مستخدم أساسي", Independent: "مستخدم مستقل" };
  const TIER = { Light: "خفيف", Regular: "عادي", Heavy: "نشط", Intensive: "مكثّف" };
  const UNIT = { minute: "دقيقة", minutes: "دقيقة", min: "دقيقة", hour: "ساعة", hours: "ساعات", hr: "ساعة", day: "يوم", days: "أيام", week: "أسبوع", weeks: "أسابيع", month: "شهر", months: "أشهر" };
  const date = (m, d, y) => d + " " + MON[m] + (y ? " " + y : "");
  const R = [
    [/^(\d[\d,.]*) students?$/, m => m[1] + " طالب"],
    [/^(\d+) users?$/, m => m[1] === "2" ? "مستخدمان" : m[1] + " مستخدمين"],
    [/^(\d+) groups?$/, m => m[1] + " مجموعات"],
    [/^(\d+) rows$/, m => m[1] + " صف"],
    [/^(\d+) permissions$/, m => m[1] + " صلاحية"],
    [/^(\d+) levels$/, m => m[1] + " مستويات"],
    [/^(\d+) (words|vocab)$/, m => m[1] + (m[2] === "words" ? " كلمة" : " مفردات")],
    [/^([\d.]+) speed$/, m => "سرعة " + m[1]],
    [/^(\d+) tasks?$/, m => m[1] + " مهام"],
    [/^(\d+) scenarios?$/, m => m[1] + " سيناريو"],
    [/^([\d,.]+) hrs?$/, m => m[1] + " ساعة"],
    [/^([\d.]+) \/ ([\d.]+) hrs$/, m => m[1] + " / " + m[2] + " ساعة"],
    [/^over limit$/, () => "تجاوز الحد"],
    [/^(\d+)–(\d+) of ([\d,]+)$/, m => m[1] + "–" + m[2] + " من " + m[3]],
    [/^(\d+) of (\d+) (users|groups|requests)$/, m => m[1] + " من " + m[2] + " " + ({ users: "مستخدمين", groups: "مجموعات", requests: "طلبات" })[m[3]]],
    [/^(\d+) of (\d+) done$/, m => m[1] + " من " + m[2] + " مكتملة"],
    [/^Week (\d+) of (\d+)$/, m => "الأسبوع " + m[1] + " من " + m[2]],
    [/^Seats: (\d+) of (\d+) used$/, m => "المقاعد: " + m[1] + " من " + m[2] + " مستخدمة"],
    [/^capacity (\d+)$/i, m => "السعة " + m[1]],
    [/^(\d+) (minutes?|min|hours?|hr|days?|weeks?|months?) ago$/, m => "منذ " + m[1] + " " + UNIT[m[2]]],
    [/^(last active|updated) (.+)$/, (m, t) => (m[1] === "updated" ? "حُدّث " : "آخر نشاط ") + t(m[2])],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2], m[3])],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d\d:\d\d)$/, m => date(m[1], m[2]) + "، " + m[3]],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, m => MON[m[1]] + " " + m[2]],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) – (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2]) + " – " + date(m[3], m[4], m[5])],
    [/^Yesterday, (\d\d:\d\d)$/, m => "أمس، " + m[1]],
    [/^(Requested|generated|joined|enrolled|Last on|Unlocks|resets) (.+?)(?: by (.+))?$/, (m, t) => ({ Requested: "طُلب في ", generated: "أُنشئ في ", joined: "انضم في ", enrolled: "سُجّل في ", "Last on": "آخر جلسة في ", Unlocks: "يُفتح في ", resets: "يُعاد الضبط في " })[m[1]] + t(m[2]) + (m[3] ? " بواسطة " + m[3] : "")],
    [/^((?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)(?: · (?:Sun|Mon|Tue|Wed|Thu|Fri|Sat))*)(, .+)?$/, m => m[1].split(" · ").map(d => DAY[d]).join(" · ") + (m[2] ? "، " + m[2].slice(2) : "")],
    [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/, m => DAY[m[1]]],
    [/^Level ([A-C]\d): (Basic|Independent)( User)?$/, m => "المستوى " + m[1] + ": " + LVL[m[2]]],
    [/^Level ([A-C]\d)$/, m => "المستوى " + m[1]],
    [/^Level settings · (.+)$/, (m, t) => "إعدادات المستوى · " + t(m[1])],
    [/^(Light|Regular|Heavy|Intensive)(?: User)?$/, m => TIER[m[1]]],
    [/^(Light|Regular|Heavy|Intensive) · (\d+)( hrs(?:\/mo)?)?$/, m => TIER[m[1]] + " · " + m[2] + (m[3] ? (m[3].includes("/mo") ? " ساعة/شهريًا" : " ساعة") : "")],
    [/^(Light|Regular|Heavy|Intensive) User · (\d+) hrs$/, m => TIER[m[1]] + " · " + m[2] + " ساعة"],
    [/^(Course|Level|Group|Tier): (.+)$/, (m, t) => ({ Course: "الدورة", Level: "المستوى", Group: "المجموعة", Tier: "الفئة" })[m[1]] + ": " + ({ All: "الكل" }[m[2]] || t(m[2]))],
    [/^([↑↓→]) (\d+%?) (this month|vs July|pts vs July|vs previous period)$/, m => m[1] + " " + m[2] + " " + ({ "this month": "هذا الشهر", "vs July": "مقارنةً بيوليو", "pts vs July": "نقاط مقارنةً بيوليو", "vs previous period": "مقارنةً بالفترة السابقة" })[m[3]]],
    [/^([+−-]\d+) (this month|vs last month|vs previous period)$/, m => m[1] + " " + ({ "this month": "هذا الشهر", "vs last month": "مقارنةً بالشهر الماضي", "vs previous period": "مقارنةً بالفترة السابقة" })[m[2]]],
    [/^Capacity (\d+)$/, m => "السعة " + m[1]],
    [/^Group median (\d+%)$/, m => "وسيط المجموعة " + m[1]],
    [/^([\d.]+) avg per student$/, m => m[1] + " في المتوسط لكل طالب"],
    [/^Oldest (\d+) days old$/, m => "أقدمها منذ " + m[1] + " أيام"],
    [/^VAT (.+)$/, m => "الرقم الضريبي " + m[1]],
    [/^Pay (.+)$/, m => "ادفع " + m[1]],
    [/^Total at (.+)$/, m => "الإجمالي بسعر " + m[1]],
    [/^Delete (Level \w+)\?$/, (m, t) => "حذف " + t(m[1]) + "؟"],
    [/^(.+) — done$/, (m, t) => t(m[1]) + " — تم"],
    [/^(\d+) (vocab|tasks) · (\d+) (tasks|scenarios)$/, (m, t) => t(m[1] + " " + m[2]) + " · " + t(m[3] + " " + m[4])]
  ];
  function tr(s) {
    if (D.has(s)) return D.get(s);
    for (const [re, f] of R) { const m = s.match(re); if (m) return f(m, trOr); }
    if (s.includes(" · ")) { const parts = s.split(" · "); const out = parts.map(trOr); if (out.some((o, i) => o !== parts[i])) return out.join(" · "); }
    return null;
  }
  function trOr(s) { const r = tr(s); return r == null ? s : r; }

  let lang = "en", root = null, obs = null;
  const tracked = new Map(); // node -> { en, ar }
  function doText(n) {
    const v = n.nodeValue; if (!v || !v.trim()) return;
    const rec = tracked.get(n);
    if (rec && v === rec.ar) return;
    const core = v.trim(); const ar = tr(core);
    if (ar == null) { tracked.delete(n); return; }
    const full = v.replace(core, ar);
    tracked.set(n, { en: v, ar: full });
    n.nodeValue = full;
  }
  function doEl(el) {
    if (el.hasAttribute && el.hasAttribute("placeholder")) {
      const cur = el.getAttribute("placeholder"); const en = el.dataset.phEn;
      if (cur !== el.dataset.phAr) { const ar = tr(cur.trim()); if (ar) { el.dataset.phEn = cur; el.dataset.phAr = ar; el.setAttribute("placeholder", ar); } }
      else if (!en) {}
    }
  }
  function walk(node) {
    if (node.nodeType === 3) { if (!skip(node.parentNode)) doText(node); return; }
    if (node.nodeType !== 1 || skip(node)) return;
    doEl(node);
    const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let c; while ((c = w.nextNode())) { if (c.nodeType === 3) { if (!skip(c.parentNode)) doText(c); } else doEl(c); }
  }
  function skip(el) { return !el || el.closest && el.closest("script,style,[data-no-translate],input,textarea"); }
  function restore() {
    tracked.forEach((rec, n) => { if (n.nodeValue === rec.ar) n.nodeValue = rec.en; });
    tracked.clear();
    (root || document).querySelectorAll("[data-ph-en]").forEach(el => { if (el.getAttribute("placeholder") === el.dataset.phAr) el.setAttribute("placeholder", el.dataset.phEn); delete el.dataset.phEn; delete el.dataset.phAr; });
  }
  function setLang(l, r) {
    root = r || root || document.body; lang = l;
    if (obs) { obs.disconnect(); obs = null; }
    if (l === "ar") {
      walk(root);
      obs = new MutationObserver(ms => ms.forEach(m => {
        if (m.type === "characterData") { if (!skip(m.target.parentNode)) doText(m.target); }
        else if (m.type === "attributes") doEl(m.target);
        else m.addedNodes.forEach(walk);
      }));
      obs.observe(root, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["placeholder"] });
    } else restore();
  }
  window.SG_I18N = { setLang, t: s => (lang === "ar" ? trOr(s) : s), glossary: PAIRS };
})();
