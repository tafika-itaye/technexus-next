import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malamulo a Ntchito — TechNexus",
  description: "Malamulo a ntchito a webusaiti ndi ntchito za TechNexus.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/terms",
    languages: {
      "en": "https://www.technexusmw.com/terms",
      "pt": "https://www.technexusmw.com/pt/terms",
      "ny": "https://www.technexusmw.com/ny/terms",
    },
  },
};

const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const ACCENT = "var(--fl-blue)";

const s: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "12px" };
const h2s: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, margin: "36px 0 12px", paddingTop: "8px", borderTop: "1px solid var(--fl-neutral-8)" };
const li: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "6px" };

export default function NyTermsPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Malamulo a Ntchito</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "32px" }}>Tsiku loyambira: 1 Epulo 2026 · Kusinthidwa komaliza: Epulo 2026 · Baibolo 1.0</p>

          <h2 style={h2s} id="s1">1. Matanthauzo</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>"TechNexus"</strong>, "ife", "athu" akutanthauza TechNexus, yolembedwa mu Republic of Malawi (BRN: A6SNWQY), Blantyre.</li>
            <li style={li}><strong>"Webusaiti"</strong> ikutanthauza www.technexusmw.com ndi masamba ake onse.</li>
            <li style={li}><strong>"Wogwiritsa"</strong>, "inu", "anu" akutanthauza munthu aliyense kapena bungwe lofikira Webusaiti kapena kupangana ndi TechNexus pa katundu kapena ntchito.</li>
            <li style={li}><strong>"Ntchito"</strong> zikutanthauza katundu ndi ntchito zonse zoperekedwa ndi TechNexus, kuphatikiza kupereka hardware ya ICT, kupanga PC mwamsonkho, kupanga software, ntchito za chilankhulo ndi kumasulira, ndi kupereka zida za chipatala.</li>
            <li style={li}><strong>"Quotation"</strong> ikutanthauza chiwerengero cha mtengo cholembedwa kapena malingaliro operekedwa ndi TechNexus.</li>
          </ul>

          <h2 style={h2s} id="s2">2. Kuvomereza Malamulo</h2>
          <p style={s}>Pofikira kapena kugwiritsa ntchito Webusaiti iyi, kutumiza funso, kapena kuyika oda ndi TechNexus, mukuvomera kumangidwa ndi Malamulo awa a Ntchito ndi Ndondomeko yathu ya Chinsinsi. Ngati simukuvomereza, chonde musagwiritse ntchito Webusaiti iyi kapena ntchito zathu.</p>

          <h2 style={h2s} id="s3">3. Kagwiritsidwe ka Webusaiti Iyi</h2>
          <p style={s}>Mukuvomera kugwiritsa ntchito Webusaiti iyi pa zinthu zovomerezeka zokha. Simuyenera:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Kugwiritsa ntchito zida zokha kutenga zinthu popanda chilolezo cholembedwa.</li>
            <li style={li}>Kuyesera kufikira gawo lililonse la Webusaiti kapena zomangamanga zake popanda chilolezo.</li>
            <li style={li}>Kutumiza zinthu zovulaza, zonyansa, kapena zonyenga kudzera mu fomu iliyonse.</li>
            <li style={li}>Kunama za umunthu wanu kapena udindo wanu potumiza mafunso a kagulidwe.</li>
          </ul>

          <h2 style={h2s} id="s4">4. Zinthu ndi Ntchito</h2>
          <p style={s}>Mindandanda yonse ya zinthu, mafotokozedwe a ntchito, ndi makatalogu pa Webusaiti iyi ndi a chidziwitso chokha ndipo sizikupanga pangano lomangira. Kupezeka kwa katundu, mafotokozedwe, ndi kukula kwa ntchito zikhoza kusintha popanda chidziwitso.</p>
          <p style={s}>TechNexus imagula zinthu kuchokera kwa ogulitsa otsimikiziridwa a ku Malawi, China, South Africa, ndi UAE. Pa ntchito za chilankhulo, kukula, mawonekedwe a zotsatira, ndi nthawi ya kutha zidzagwirizanidwa mwa kulemba zisanayambe.</p>

          <h2 style={h2s} id="s5">5. Ma Quotation ndi Mitengo</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Mitengo yonse pa Webusaiti iyi ndi chisonyezo chokha ndipo ikhoza kusintha popanda chidziwitso.</li>
            <li style={li}>Mitengo sikuphatikiza VAT ya 17.5% pokhapokha zitanenedwa momveka.</li>
            <li style={li}>Pomwe mitengo ya USD ikuwonetsedwa, mtengo wa MWK umawerengedwa pa mtengo wa kusinthanitsa wa nthawi ya invoice.</li>
            <li style={li}>Quotation yovomerezeka, yomangira imakhala yogwira masiku 30 kuchokera tsiku loperekedwa pokhapokha zitanenedwa zina.</li>
            <li style={li}>TechNexus ili ndi ufulu wosintha quotation ngati mitengo ya ogulitsa, mitengo ya kusinthanitsa, kapena misonkho ya katundu wakunja zisintha kwambiri pakati pa quotation ndi chitsimikizo cha oda.</li>
          </ul>

          <h2 style={h2s} id="s6">6. Ma Oda, Malipiro ndi Kupereka</h2>
          <p style={s}>Oda imatsimikizidwa pokhapokha pakalandiridwa purchase order yolembedwa kapena pangano losainidwa ndipo, pofunikira, malipiro apatsogolo.</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Njira za malipiro:</strong> Monga zagwirizanidwa mu quotation. Njira za makasitomala atsopano ndi 50% ya dipoziti pa chitsimikizo cha oda, zotsala pa kupereka.</li>
            <li style={li}><strong>Kupereka:</strong> Chiopsezo cha katundu chimasamukira kwa wogula pa kupereka ku adiresi yogwirizanidwa. TechNexus si yoyenera pa kuchedwa koyambitsidwa ndi customs, mayendedwe a ena, kapena zinthu zopanda mphamvu zathu.</li>
            <li style={li}><strong>Kuletsa:</strong> Ma oda a katundu wogulidwa makamaka wa kasitomala sangathe kuletsedwa purchase order ya ogulitsa itayikidwa. Katundu wa nthawi zonse akhoza kuletsedwa ndi chidziwitso cholembedwa cha masiku 7 kutumiza kusanachitike.</li>
          </ul>

          <h2 style={h2s} id="s7">7. Umwini wa Nzeru</h2>
          <p style={s}>Zonse za pa Webusaiti iyi ndi za TechNexus kapena opereka zilolezo ake ndipo zimatetezedwa ndi malamulo a copyright ndi umwini wa nzeru. Simungathe kukopera, kugawa, kapena kufalitsa zinthu zilizonse popanda chilolezo cholembedwa, kupatula kagwiritsidwe ka umwini kapena ka bizinesi ya mkati kapena kugawana ulalo wa Webusaiti iyi.</p>
          <p style={s}>Ma logo a zinthu ndi zizindikiro za mitundu zomwe zikuwonetsedwa ndi za eni ake ndipo zimagwiritsidwa ntchito pozindikiritsa zokha.</p>

          <h2 style={h2s} id="s8">8. Malire a Udindo</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>TechNexus imapereka Webusaiti iyi ndi zinthu zake "monga zilili" popanda ma warranty a mtundu uliwonse.</li>
            <li style={li}>TechNexus si yoyenera pa kutayika kulikonse kosalunjika, kwapadera, kapena kotsatira kochokera pa kagwiritsidwe kanu ka Webusaiti iyi kapena kudalira zinthu zake.</li>
            <li style={li}>Udindo wonse wa TechNexus wokhudza oda iliyonse sudzaposa mtengo wa oda imeneyo.</li>
            <li style={li}>TechNexus si yoyenera pa kutayika kochokera pa kuchedwa kwa ogulitsa, kutha kwa zinthu, kusungidwa ndi customs, kapena zochitika za force majeure.</li>
          </ul>

          <h2 style={h2s} id="s9">9. Maulalo ndi Ntchito za Ena</h2>
          <p style={s}>Webusaiti iyi ili ndi maulalo a ntchito za ena kuphatikiza WhatsApp (Meta Platforms) ndi zonena za MANePS ndi PPDA. TechNexus si yoyenera pa zinthu, machitidwe a chinsinsi, kapena kupezeka kwa webusaiti kapena ntchito iliyonse ya ena.</p>

          <h2 style={h2s} id="s10">10. Chinsinsi</h2>
          <p style={s}>Kusonkhanitsa ndi kugwiritsa ntchito kwathu zidziwitso za munthu kumatsogozedwa ndi Ndondomeko yathu ya Chinsinsi, yomwe ndi gawo la Malamulo awa a Ntchito.</p>

          <h2 style={h2s} id="s11">11. Malamulo Otsogolera ndi Mikangano</h2>
          <p style={s}>Malamulo awa amatsogozedwa ndi malamulo a Republic of Malawi. Mkangano uliwonse udzakhala pansi pa ulamuliro wa makhoti a Malawi okha. Pomwe mbali zonse ziwiri zavomereza, mikangano ikhoza kuyamba kutumizidwa ku mediation milandu isanayambe.</p>

          <h2 style={h2s} id="s12">12. Kusintha kwa Malamulo Awa</h2>
          <p style={s}>TechNexus ili ndi ufulu wosintha Malamulo awa nthawi iliyonse. Zosintha zidzayikidwa pa tsamba lino ndi tsiku losinthidwa. Kupitiriza kugwiritsa ntchito Webusaiti pambuyo pa kusintha kumatanthauza kuvomereza Malamulo osinthidwa.</p>

          <h2 style={h2s} id="s13">13. Kulumikizana</h2>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265995753326" style={{ color: ACCENT }}>+265 995 753 326</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>

        </div>
      </div>
    </div>
  );
}
