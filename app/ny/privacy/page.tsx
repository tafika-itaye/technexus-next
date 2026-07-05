import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ndondomeko ya Chinsinsi — TechNexus",
  description: "Momwe TechNexus imasonkhanitsira, kugwiritsira ntchito ndi kuteteza zidziwitso zanu.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/privacy",
    languages: {
      "en": "https://www.technexusmw.com/privacy",
      "pt": "https://www.technexusmw.com/pt/privacy",
      "ny": "https://www.technexusmw.com/ny/privacy",
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

export default function NyPrivacyPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Ndondomeko ya Chinsinsi</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "24px" }}>Tsiku loyambira: 1 Epulo 2026 · Kusinthidwa komaliza: Epulo 2026 · Baibolo 1.0</p>

          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "32px" }}>
            {["Kutsatira GDPR","Machitidwe a HIPAA (Ntchito za Chilankhulo)","Zidziwitso Sizigulitsidwa","Analytics: IP Yobisika"].map(b => (
              <span key={b} style={{ background: "rgba(0,120,212,0.1)", border: "1px solid rgba(0,120,212,0.3)", borderRadius: "999px", padding: "4px 14px", fontSize: "12px", color: ACCENT, fontWeight: 600 }}>{b}</span>
            ))}
          </div>

          <h2 style={h2s} id="s1">1. Ndife Ndani</h2>
          <p style={s}>TechNexus ("ife", "athu") ndi bizinesi yolembedwa mu Republic of Malawi (BRN: A6SNWQY). Timapereka hardware ya ICT, kupanga PC mwamsonkho, ntchito za kupanga software, ntchito za chilankhulo ndi kumasulira, ndi zida za chipatala kwa mabizinesi, maboma, ndi mabungwe a chitukuko mu Africa Yakum'mwera ndi Kum'mawa.</p>
          <p style={s}>Ndondomeko iyi ya Chinsinsi ikufotokoza momwe TechNexus imasonkhanitsira, kugwiritsira ntchito, kusunga ndi kuteteza zidziwitso za munthu mukapita ku www.technexusmw.com kapena mukatitumizira funso.</p>

          <h2 style={h2s} id="s2">2. Zidziwitso Zomwe Timasonkhanitsa</h2>
          <p style={s}>Timasonkhanitsa zidziwitso zochepa zokha zofunikira kuyankha funso lanu kapena kupereka ntchito zathu:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Zidziwitso za fomu ya mafunso:</strong> Dzina, dzina la bungwe, imelo kapena nambala ya WhatsApp, ntchito yosankhidwa, ndi uthenga — zoperekedwa mwaufulu kudzera mu mafomu athu.</li>
            <li style={li}><strong>Zidziwitso za Ntchito za Chilankhulo:</strong> Pa ntchito za kumasulira, kulembera, kapena kutanthauzira, tikhoza kugwira zikalata zomwe zili ndi zidziwitso za munthu kapena zachinsinsi za bungwe lanu kapena anthu ake.</li>
            <li style={li}><strong>Zidziwitso za analytics:</strong> Zidziwitso zosadziwika za kagwiritsidwe kudzera mu Google Analytics (GA4) ndi kubisa kwa IP. Palibe zidziwitso zozindikiritsa munthu zomwe zimatumizidwa ku Google Analytics.</li>
            <li style={li}><strong>Zidziwitso za ukadaulo:</strong> Ma log a seva/CDN osungidwa ndi opereka zomangamanga zathu (GitHub Pages / Cloudflare) — osasonkhanitsidwa kapena kusungidwa ndi TechNexus mwachindunji.</li>
          </ul>
          <p style={s}>Sitigwiritsa ntchito ma cookie potsatira, kutsatsa, kapena kupanga mbiri. Sitiyendetsa ma network otsatsa kapena masisitimu a retargeting.</p>

          <h2 style={h2s} id="s3">3. Momwe Timagwiritsira Ntchito Zidziwitso Zanu</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Kuyankha funso lanu pa WhatsApp kapena imelo.</li>
            <li style={li}>Kukonza ma quotation, zopereka za tender, kapena malingaliro a ntchito omwe mwapempha.</li>
            <li style={li}>Kupereka ntchito za chilankhulo zopanganidwa, kuphatikiza kumasulira ndi kulembera.</li>
            <li style={li}>Kumvetsetsa kagwiritsidwe ka tsamba kudzera mu analytics zosadziwika ndi kukonza webusaiti yathu.</li>
            <li style={li}>Kutsatira malamulo a Malawi.</li>
          </ul>
          <p style={s}>Sitidzagwiritsa ntchito zidziwitso zanu pa malonda osapemphedwa, kuzigulitsa kwa ena, kapena kuzigwiritsa ntchito popanga zisankho zokha.</p>

          <h2 style={h2s} id="s4">4. Maziko a Malamulo a Kagwiridwe (GDPR)</h2>
          <p style={s}>Ngati muli mu EU, EEA, kapena UK, timagwira zidziwitso zanu pa maziko awa a malamulo:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Zofuna zovomerezeka (Art. 6(1)(f)):</strong> Kuyankha mafunso a bizinesi omwe mwayambitsa.</li>
            <li style={li}><strong>Kukwaniritsa pangano (Art. 6(1)(b)):</strong> Kugwira zidziwitso zofunikira kupereka ntchito zomwe mwapangana nafe.</li>
            <li style={li}><strong>Udindo wa malamulo (Art. 6(1)(c)):</strong> Kutsatira malamulo a zachuma ndi msonkho a Malawi.</li>
            <li style={li}><strong>Chilolezo (Art. 6(1)(a)):</strong> Pa ma cookie a analytics, pomwe chilolezo chapezedwa.</li>
          </ul>

          <h2 style={h2s} id="s5">5. Ma Cookie ndi Analytics</h2>
          <p style={s}>Webusaiti iyi imagwiritsa ntchito Google Analytics 4 (GA4) ndi kubisa kwa IP. Palibe zotsatsa kapena remarketing zomwe zayambitsidwa. Mukhoza kusiya nthawi iliyonse kudzera mu Google Analytics Opt-out Browser Add-on. Sitiyika ma cookie ena, ma pixel otsatira, kapena fingerprinting.</p>

          <h2 style={h2s} id="s6">6. Ntchito za Chilankhulo ndi Kagwiridwe ka HIPAA</h2>
          <p style={s}>Ma projekiti ena akhoza kukhala ndi zikalata kapena zojambulidwa zokhala ndi zidziwitso za umoyo zotetezedwa (PHI), zolemba za odwala, zikalata za malamulo, kapena zidziwitso zina zachinsinsi. Pa ma projekiti otere timagwiritsa ntchito chitetezo ichi:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Zipangizo zoyambirira zimagwiridwa ndi akatswiri a chilankhulo osankhidwa okha, omangidwa ndi chinsinsi.</li>
            <li style={li}>Mafayilo amatumizidwa kudzera mu njira zotetezedwa, zobisidwa.</li>
            <li style={li}>Zotsatira ndi zipangizo zoyambirira zimafufutidwa mkati mwa masiku 30 projekiti itatha, pokhapokha kasitomala atapempha zina mwa kulemba.</li>
            <li style={li}>Sitisunga, kukopera, kapena kupereka chilolezo cha zinthu za kasitomala kupitilira projekiti yopanganidwa.</li>
            <li style={li}>Makasitomala a m'mafakitale oyendetsedwa ndi malamulo akulimbikitsidwa kusaina Data Processing Agreement (DPA) projekiti isanayambe.</li>
          </ul>
          <p style={{ ...s, fontStyle: "italic" }}>Dziwani: TechNexus ili ku Malawi ndipo si Covered Entity kapena Business Associate wa ku US pansi pa HIPAA. Mawu athu a "machitidwe a HIPAA" akutanthauza kuti timagwiritsa ntchito miyezo yofanana ya kagwiridwe ka zidziwitso monga machitidwe a ukatswiri.</p>

          <h2 style={h2s} id="s7">7. Kugawana Zidziwitso ndi Ena</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>WhatsApp (Meta Platforms):</strong> Mafunso amatumizidwa ku nambala yathu ya WhatsApp ya bizinesi ndipo amagwiridwa pansi pa ndondomeko ya chinsinsi ya WhatsApp. Mumayambitsa kutumiza uku mwaufulu.</li>
            <li style={li}><strong>Google Analytics (Google LLC):</strong> Zidziwitso zosadziwika za kagwiritsidwe monga zafotokozedwera mu Gawo 5.</li>
            <li style={li}><strong>GitHub / Cloudflare:</strong> Opereka zomangamanga za webusaiti yathu. Akhoza kugwira ma log a kufikira. Sitiwapatsa zidziwitso za mafunso.</li>
          </ul>
          <p style={s}>Sitigawana zidziwitso za munthu ndi ena aliwonse, otsatsa, kapena ogulitsa zidziwitso.</p>

          <h2 style={h2s} id="s8">8. Kusunga Zidziwitso</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Zidziwitso za mafunso:</strong> Zimasungidwa mu akaunti yathu ya WhatsApp ya bizinesi mpaka zaka 2, kenako zimafufutidwa.</li>
            <li style={li}><strong>Mafayilo a ma projekiti a Ntchito za Chilankhulo:</strong> Amafufutidwa mkati mwa masiku 30 projekiti itatha pokhapokha pagwirizana zina mwa kulemba.</li>
            <li style={li}><strong>Zidziwitso za analytics:</strong> Kusunga kwa Google Analytics kwakhazikitsidwa pa miyezi 14.</li>
            <li style={li}><strong>Ma log a zomangamanga:</strong> Amayendetsedwa ndi GitHub/Cloudflare motsatira ndondomeko zawo (nthawi zambiri masiku 30).</li>
          </ul>

          <h2 style={h2s} id="s9">9. Ufulu Wanu</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Ufulu wa kufikira:</strong> Kupempha kopi ya zidziwitso zanu zomwe tili nazo.</li>
            <li style={li}><strong>Ufulu wa kukonza:</strong> Kupempha kukonza zidziwitso zolakwika.</li>
            <li style={li}><strong>Ufulu wa kufufuta:</strong> Kupempha kufufuta zidziwitso zanu pomwe palibe lamulo lofuna kusunga.</li>
            <li style={li}><strong>Ufulu wa kuchepetsa kagwiridwe:</strong> Kupempha kuti tichepetse momwe timagwiritsira ntchito zidziwitso zanu.</li>
            <li style={li}><strong>Ufulu wa kusamutsa zidziwitso:</strong> Kulandira zidziwitso zanu mu mawonekedwe okonzedwa, owerengeka ndi makina.</li>
            <li style={li}><strong>Ufulu wa kukana:</strong> Kukana kagwiridwe kozikidwa pa zofuna zovomerezeka.</li>
            <li style={li}><strong>Ufulu wa kuchotsa chilolezo:</strong> Pomwe kagwiridwe kazikidwa pa chilolezo, kuchichotsa nthawi iliyonse.</li>
          </ul>
          <p style={s}>Kuti mugwiritse ntchito ufulu uliwonse wa awa, tilumikizaneni pogwiritsa ntchito zidziwitso za mu Gawo 14. Tikuyankhani mkati mwa masiku 30 popanda malipiro.</p>

          <h2 style={h2s} id="s10">10. Kutumiza Kunja kwa Dziko</h2>
          <p style={s}>TechNexus imagwira ntchito kuchokera ku Malawi. Zidziwitso zoperekedwa kudzera mu mafomu athu zimalandiridwa ndi kugwiridwa mu Malawi. Mukagwiritsa ntchito Google Analytics kapena WhatsApp, zidziwitso zanu zikhoza kutumizidwa ku ma seva a ku United States kapena mayiko ena, motsogozedwa ndi ndondomeko za chinsinsi za Google ndi Meta.</p>

          <h2 style={h2s} id="s11">11. Chitetezo</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>HTTPS yokakamizidwa pa malumikizidwe onse ndi HSTS preloading.</li>
            <li style={li}>Ma header a Content Security Policy (CSP) pochepetsa ziopsezo za cross-site scripting.</li>
            <li style={li}>X-Frame-Options yakhazikitsidwa pa DENY poletsa clickjacking.</li>
            <li style={li}>Palibe database ya seva — webusaiti iyi ndi tsamba lokhazikika lopanda malo osungira zidziwitso a back-end.</li>
          </ul>
          <p style={s}>Palibe njira ya kutumiza pa intaneti yomwe ndi yotetezedwa 100%. Timasunga chitetezo choyenera cha malonda.</p>

          <h2 style={h2s} id="s12">12. Chinsinsi cha Ana</h2>
          <p style={s}>Webusaiti yathu ndi ntchito zathu zimaperekedwa kwa mabizinesi ndi akatswiri okha. Sitisonkhanitsa mwadala zidziwitso za munthu aliyense wazaka zosakwana 18.</p>

          <h2 style={h2s} id="s13">13. Kusintha kwa Ndondomeko Iyi</h2>
          <p style={s}>Tikhoza kusintha Ndondomeko iyi ya Chinsinsi nthawi ndi nthawi. Tikatero, tidzasintha tsiku la "Kusinthidwa komaliza" pamwamba pa tsamba lino. Kupitiriza kugwiritsa ntchito webusaiti pambuyo pa kusintha kumatanthauza kuvomereza ndondomeko yosinthidwa.</p>

          <h2 style={h2s} id="s14">14. Tilumikizaneni</h2>
          <p style={s}>Pa mafunso okhudza chinsinsi, zopempha za eni zidziwitso, kapena kupempha Data Processing Agreement:</p>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265995753326" style={{ color: ACCENT }}>+265 995 753 326</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>
          <p style={{ ...s, marginTop: "20px", fontSize: "12px" }}>Ngati muli mu EU/EEA ndipo mukuona kuti sitinayankhe nkhawa yanu, muli ndi ufulu wopereka madandaulo kwa bungwe lanu la chitetezo cha zidziwitso.</p>

        </div>
      </div>
    </div>
  );
}
