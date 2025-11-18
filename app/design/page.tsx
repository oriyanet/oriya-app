import Image from "next/image";
import styles from "./page.module.css";

export default function Design() {
  return (
    <main className={styles.main}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/tevat-ozer-logo.png"
          alt="תיבת אוצר"
          width={400}
          height={200}
          className={styles.logo}
          priority
        />
      </div>

      {/* About Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>אודות המוצר</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            האפליקציה מאפשרת לאמנים, אוצרים ומוזיאונים לתקשר ולשתף פעולה בצורה ישירה ומהירה, בלי מיילים, טפסים או ניירת.
          </p>
          <p className={styles.paragraph}>
            במקום שכל צד יעביר קבצים, אישורים ומידע בנפרד, הכול קורה באפליקציה אחת, כמו העברה בביט:
          </p>
          <p className={`${styles.paragraphRed} ${styles.paragraphRedNoMargin}`}>
            האוצר &quot;מבקש&quot; יצירה ← האמן &quot;מאשר&quot; בלחיצה ←
          </p>
          <p className={styles.paragraphRed}>
            האפליקציה מעבירה את המידע הבירוקרטי בין השניים ומתאמת את פרטי המשלוח.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>הצוות</h2>
        <div className={styles.redLine}></div>
        <div className={styles.teamContent}>
          <div className={styles.teamGroup}>
            <h3 className={styles.teamSubtitle}>עיצוב</h3>
            <p className={styles.teamNames}>
              נטע זינו, טל ארבל, דניאל קרמש, אילן פריאל.
            </p>
          </div>
          <div className={styles.teamGroup}>
            <h3 className={styles.teamSubtitle}>פיתוח</h3>
            <p className={styles.teamNames}>
              אוריה נצר, תמר גזית, נמרוד שגב.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>רקע, מניעים ומטרות</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <p className={styles.paragraphRed}>
            תהליך הקמת תערוכה במוזיאון כרוך בהרבה בירוקרטיה.
          </p>
          <p className={styles.paragraph}>
            איסוף של מידע על יצירות, הקצאת חללים ותיאום שינוע של יצירות יוצרים כאבי ראש עבור צוות המוזיאון ואנשים שעובדים בשיתוף פעולה איתו.
          </p>
          <p className={styles.paragraph}>
            מטרת האפליקציה למנוע את הסיבוכים באמצעות ממשק מהיר לשיתוף ותיאום כל המידע.
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={`${styles.section} ${styles.sectionWithLargeTopMargin}`}>
        <h2 className={styles.sectionTitle}>קהל היעד וקונטקסט השימוש</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <p className={styles.paragraphRed}>
            קהל היעד הוא אוצרים ועובדי המוזיאון.
          </p>
          <p className={styles.paragraph}>
            האפליקציה נועדה להקל על האוצרים להזמין יצירות לתערוכות שהם בונים. האפליקציה נמצאת בשימוש בזמן תכנון תערוכה, בבית או במשרד.
          </p>
          <div className={styles.featuresSection}>
            <h3 className={styles.featuresTitle}>פיצ&apos;רים אופציונליים:</h3>
            <ul className={styles.featuresList}>
              <li>חווית משתמש קלה להבנה</li>
              <li>אוטומציה לרוב הפרטים</li>
              <li>התאמת גודל תצוגה</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>מה אנחנו בונים?</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <p className={styles.paragraphRed}>
            ממשק אשר מאגד את כל המידע והטפסים אשר נדרשים לשינוע של יצירות במוזיאון.
          </p>
          <p className={styles.paragraph}>
            לכל יצירה יש &quot;פרופיל&quot; שם נמצא כל המידע הבירוקרטי הנדרש למשלוח שלה אל האוצר. לאוצר יש אופציה לפתוח &quot;קבוצה&quot; שבה הוא מבקש רשימה של יצירות הרלוונטיות לתערוכה שהוא בונה, הוא ממלא את פרטי החדר הספציפי בו מתקיימת התערוכה והאפליקציה עושה בשבילו את העבודה הבירוקרטיות.
          </p>
          <p className={styles.paragraph}>
            בגלל שקהל היעד מורכב בעיקר מאוצרים שרגילים לתהליך עבודה מסורתי של העברת יצירות במשך שנים, ניתן לבצע תהליך Onboarding במוזיאון ישראל לכל משתמשי האפליקציה שיקל על הטמעת האפליקציה והשימוש בה בצורה יעילה, כך שהמעבר לשיטה דיגיטלית יהיה חלק, מהיר וברור לכולם.
          </p>
        </div>
      </section>

      {/* What We Don't Build Section */}
      <section className={`${styles.section} ${styles.sectionWithLargeTopMargin}`}>
        <h2 className={styles.sectionTitle}>מה אנחנו לא בונים?</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <ul className={styles.notBuildingList}>
            <li>
              <span className={styles.redX}>×</span> לא רשת חברתית לאמנים
            </li>
            <li>
              <span className={styles.redX}>×</span> לא מקום למכור יצירות
            </li>
            <li>
              <span className={styles.redX}>×</span> לא פלטפורמה לקהל לציבור הרחב: כלי מקצועי לאמנים ואוצרים בלבד.
            </li>
          </ul>
        </div>
      </section>

      {/* Content and Information - Data Hub Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>תוכן ומידע</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <h3 className={`${styles.subsectionTitle} ${styles.subsectionTitleRed}`}>מאגר המידע (Data Hub)</h3>
          <p className={styles.paragraph}>
            האפליקציה אוספת, שומרת ומצליבה את כלל הנתונים הנדרשים להובלה, אחסון והצגה של יצירות אמנות:
          </p>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitle}>נתוני יצירה</h4>
            <ul className={styles.dataList}>
              <li>← שם היצירה</li>
              <li>← אמן/ית</li>
              <li>← שנת יצירה</li>
              <li>← בעלים/גורם מחזיק (מוזיאון, אוסף פרטי, גלריה וכו׳)</li>
              <li>← חומר/מדיום (ציור, פיסול, צילום, וידאו ארט וכו׳)</li>
              <li>← מידות (גובה, רוחב, עומק, משקל)</li>
              <li>← מצב שימור נוכחי (כולל הערות משמר/ת)</li>
              <li>← מיקום נוכחי (אחסון, תצוגה, השאלה)</li>
            </ul>
          </div>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitle}>טפסים ומסמכים נלווים</h4>
            <ul className={styles.dataList}>
              <li>← אישור זכויות יוצרים והצגה</li>
              <li>← תעודת ביטוח (כולל ערך ביטוחי, תקופה, סוג כיסוי)</li>
              <li>← דו״ח מצב (Condition Report)</li>
              <li>← אישור שינוע (Transport Approval)</li>
              <li>← חוזה השאלה (Loan Agreement)</li>
            </ul>
          </div>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitle}>נתוני יעד</h4>
            <ul className={styles.dataList}>
              <li>← מוסד מקבל (שם, כתובת, פרטי קשר)</li>
              <li>← חלל תצוגה (גודל, תנאי תאורה, טמפרטורה ולחות נדרשת)</li>
              <li>← תאריכי תערוכה (פתיחה, סגירה, מועדי התקנה ופירוק)</li>
              <li>← איש קשר אחראי מטעם המוסד</li>
            </ul>
          </div>

          <div className={styles.contentInfoSubsection}>
            <h4 className={styles.contentInfoTitle}>תוכן ומידע</h4>
            <ul className={styles.contentInfoList}>
              <li>את המידע על היצירות צוות המוזיאון או האמנים ימלאו בעצמם באפליקציה. את המידע על כל אוצר, כל אוצר יכניס לעצמו בעת יצירת הפרופיל.</li>
              <li>הנתונים במערכת הם דינמיים - אמנים מעלים יצירות חדשות ומסירים יצירות שנמכרו, אוצרים מעלים תערוכות חדשות ובקשות מתעדכנות לעיתים קרובות. האפליקציה מאפשרת עריכה וניהול של התוכן דרך ממשק פנימי פשוט.</li>
              <li>את כל התוכן נציע לאוצרים לעדכן אחת לשנה.</li>
              <li>באפליקציה שלנו המידע נשמר בענן מאובטח, חשוב להקפיד על שמירת המידע בפרטיות על פרטים כגון איזה יצירות משויכות לתערוכה לפני שהדבר מפורסם, שם היצירה ותיאור קצר שלה יהיו חשופים לכולם.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Language Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>שפה עיצובית</h2>
        <div className={styles.redLine}></div>
        <div className={styles.content}>
          <div className={`${styles.dataSubsection} ${styles.designLanguageSubsection}`}>
            <h4 className={styles.dataSubsectionTitleRed}>צבעוניות</h4>
            <p className={styles.paragraph}>
              אדום, לבן ושחור (דואר ישראל, מוזיאון ישראל)
            </p>
          </div>

          <div className={`${styles.dataSubsection} ${styles.designLanguageSubsection}`}>
            <h4 className={styles.dataSubsectionTitleRed}>עולמות תוכן</h4>
            <p className={styles.paragraph}>
              דואר, מוזיאון ישראל, צורות פשוטות, באוהאוס: מינימליסטי, נקי ופרקטי.
            </p>
          </div>

          <div className={`${styles.dataSubsection} ${styles.designLanguageSubsection}`}>
            <h4 className={styles.dataSubsectionTitleRed}>איך עיצוב גרפי ותקשורת חזותית יכולים לעזור לנו להשיג את מטרות המוצר?</h4>
            <p className={styles.paragraph}>
              נגישות, פרקטיות.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={`${styles.section} ${styles.technologySectionWithMargin}`}>
        <h2 className={styles.sectionTitle}>טכנולוגיה</h2>
        <div className={`${styles.redLine} ${styles.technologyRedLine}`}></div>
        <div className={styles.content}>
          <div className={`${styles.dataSubsection} ${styles.technologySubsection}`}>
            <h4 className={styles.dataSubsectionTitleRed}>מה ה-data שאיתו נעבוד?</h4>
            <ul className={styles.dataList}>
              <li>← משתמשים (אמנים, אוצרים וכו׳)</li>
              <li>← יצירות (מידע בסיסי על היצירה + תמונות)</li>
              <li>← קבוצות בחירה (כוללת אוסף דרישות של האוצר כמו נושא, אילוצים ועוד)</li>
              <li>← תערוכות (נושא, תאריכים, רשימת יצירות)</li>
              <li>← בקשות להשאלת יצירה (עם סטטוס התקדמות)</li>
              <li>← מסמכים רלוונטיים נלווים (הסכמים, ביטוח וכו׳)</li>
            </ul>
          </div>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitleRed}>מה הישויות (entities) שיש לנו בפרויקט, ואיזה שדות (properties) יש להם?</h4>
            
            <div className={styles.entitySection}>
              <h5 className={styles.entityTitle}><span className={styles.entityNumber}>1</span>. User (משתמש)</h5>
              <ul className={styles.entityList}>
                <li>userId - מספר מזהה ייחודי :int</li>
                <li>userType - סוג משתמש (אמן/אוצר/אספן) :string</li>
                <li>name - שם מלא :string</li>
                <li>password - סיסמה :string</li>
                <li>email - אימייל :string</li>
                <li>organization - גוף רלוונטי (מוזיאון/ עצמאי/גלריה)</li>
                <li>profileDescription - תיאור משתמש :string</li>
                <li>preferences - תחומי עניין :string</li>
              </ul>
            </div>

            <div className={styles.entitySection}>
              <h5 className={styles.entityTitle}><span className={styles.entityNumber}>2</span>. ArtPiece (פרופיל לכל יצירה)</h5>
              <ul className={styles.entityList}>
                <li>artPieceId - מספר מזהה ייחודי: int</li>
                <li>name - שם של היצירה: string</li>
                <li>artistName - שם האמן : string</li>
                <li>curatorId - מזהה האוצר :User</li>
                <li>description - תיאור קצר על היצירה :string</li>
                <li>category - קטגוריה אמנותית (פסל, ציור, צילום, מיצב וכו׳)</li>
              </ul>
            </div>

            <div className={styles.entitySection}>
              <h5 className={styles.entityTitle}><span className={styles.entityNumber}>3</span>. Exhibition (תערוכה)</h5>
              <ul className={styles.entityList}>
                <li>exhibitionId - מזהה ייחודי: int</li>
                <li>curatorId - מזהה האוצר : User</li>
                <li>title - שם התערוכה : string</li>
                <li>theme - נושא התערוכה : string</li>
                <li>date - תאריכי פתיחה וסיום : timestamp</li>
                <li>venue - מקום התערוכה : string</li>
                <li>pieces - מערך של id&apos;s של יצירות משתתפות</li>
              </ul>
            </div>

            <div className={styles.entitySection}>
              <h5 className={styles.entityTitle}><span className={styles.entityNumber}>4</span>. notification (התראה)</h5>
              <ul className={styles.entityList}>
                <li>notificationId - מזהה ייחודי: int</li>
                <li>userId- מזהה המשתמש שאליו נשלחה ההתראה: int</li>
                <li>type - סוג ההתראה: string</li>
                <li>content - תוכן הההודעה: string</li>
                <li>createdAt - תאריך שליחת ההתראה: timestamp</li>
              </ul>
            </div>
          </div>

          <div className={styles.dataSubsection}>
            <p className={styles.paragraph}>
              נצטרך לממש אלגוריתם שלאחר ביצוע ההעברה משייך באופן זמני בלבד יצירות לתערוכות. עלינו <strong>למנוע התנגשויות</strong> בהזמנת יצירות בתאריכים חופפים ונעילה לזמן מוגדר של אפשרות הזמנת היצירה.
            </p>
            <p className={styles.paragraph}>
              כמו כן, נצטרך לממש <strong>מנגנון חיפוש</strong> שמאפשר לאוצרים לאתר יצירות לפי שם, אמן, קטגוריה או מילות מפתח. כולל סינון לפי זמינות, גודל, נושא ותאריכים רלוונטיים לתערוכה.
            </p>
          </div>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitleRed}>דרישות או מגבלות טכניות שעלינו לקחת בחשבון לפני היציאה לדרך:</h4>
            <ul className={styles.dataList}>
              <li>← יש צורך באחסון מאובטח לענן עבור תמונות, טפסים ומסמכים.</li>
              <li>← חשוב לשמור על נגישות גבוהה גם למשתמשים פחות טכנולוגיים.</li>
              <li>← יש לוודא שמירה על פרטיות וזכויות יוצרים של אמנים ויצירות.</li>
              <li>← נדרש תכנון טוב של מבנה הנתונים כדי שהמערכת תישאר מהירה גם עם מאגר גדול של יצירות.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problems, Concerns and Open Questions Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>בעיות, חששות ושאלות פתוחות</h2>
        <div className={`${styles.redLine} ${styles.problemsRedLine}`}></div>
        <div className={styles.content}>
          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitleRed}>בעיות</h4>
            <ul className={styles.dataList}>
              <li>← קושי בהטמעה</li>
            </ul>
          </div>

          <div className={styles.dataSubsection}>
            <h4 className={styles.dataSubsectionTitleRed}>חששות</h4>
            <ul className={styles.dataList}>
              <li>← חוסר שימוש ביצירות אשר לא יהיו במאגר (במידה ויהיו)</li>
              <li>← עוקץ אופציונלי של יצירות יקרות ערך</li>
              <li>← קהל משתמשים מבוגר אשר לא מורגל בחידושים טכנולוגיים</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bezalel Logo Section */}
      <section className={styles.section}>
        <div className={styles.bezalelLogoContainer}>
          <Image
            src="/bezalel-logo.png"
            alt="בצלאל אקדמיה לאמנות ועיצוב ירושלים"
            width={600}
            height={200}
            className={styles.bezalelLogo}
          />
        </div>
      </section>
    </main>
  );
}

